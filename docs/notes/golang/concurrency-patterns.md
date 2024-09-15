# Concurrency Patterns

Concurrency patterns are proven solutions to common challenges in concurrent programming. These patterns help us write efficient, reliable concurrent code by offering structured approaches to managing goroutines, synchronizing data access, and facilitating communication between concurrent tasks. By leveraging these patterns, Go programmers can handle concurrency more effectively and avoid common pitfalls like race conditions and deadlocks.

# Confinement

Confinement is the simple yet powerful idea of ensuring information is only ever available from one concurrent process. When this is achieved, a concurrent program is implicitly safe and no synchronization is needed.

```go
func generator() <-chan int {
	results := make(chan int, 2)
	go func() {
		defer close(results)
		for i := 0; i < 5; i++ {
			fmt.Println("Sending", i)
			// do some task that can take long time
			results <- i
		}
	}()
	return results
}

func receiver(results <-chan int) {
	for result := range results {
		// do some task as soon as the value is available
		fmt.Println("Received", result)
	}
	fmt.Println("Done!")
}

func main() {
	results := generator()
	receiver(results)
}
```

This way of doing things is good because it lets us work on two things at once. We can have values being made in one part of our program while another part does something else. We don't need to wait for tasks to be done for elements and don't need to return the entire slice.

# The `for-select` Loop

Something you’ll see over and over again in Go programs is the for-select loop. It’s nothing more than something like this:

```go
for { // Either loop infinitely or range over something
    select {
    // Do some work with channels
    }
}
```
There are a couple of different scenarios where you’ll see this pattern pop up:
- Sending iteration variables out on a channel
- Looping infinitely waiting to be stopped

# Preventing Goroutine Leaks

The runtime handles multiplexing the goroutines onto any number of operating system threads so that we don’t often have to worry about that level of abstraction. But they do cost resources, and goroutines are not garbage collected by the runtime, so regardless of how small their memory footprint is, we don’t want to leave them lying about our process. So how do we go about ensuring they’re cleaned up?

The goroutine has a few paths to termination:
- When it has completed its work.
- When it cannot continue its work due to an unrecoverable error.
- When it’s told to stop working.

We get the first two paths for free, these paths are your algorithm, but what about work cancellation?

The way to successfully mitigate this is to establish a signal between the parent goroutine and its children that allows the parent to signal cancellation to its children. By convention, this signal is usually a read-only channel named `done`. The parent goroutine passes this channel to the child goroutine and then closes the channel when it wants to cancel the child goroutine.

**Conventions:** 
- If a goroutine is responsible for creating a goroutine, it is also responsible for ensuring it can stop the goroutine.
- `done` channel should be first parameter.

```go
func doWork(done <-chan bool, stream <-chan string) <-chan bool {
	terminated := make(chan bool)
	go func() {
		defer fmt.Println("doWork exited.")
		defer close(terminated)
		for {
			select {
			case s, ok := <-stream:
				if !ok {
					fmt.Println("Nothing to stream...")
					return
				}
				fmt.Println("Here:", s)
			case <-done:
				fmt.Println("Received done signal.")
				return
			}
		}
	}()
	return terminated
}

func main() {
	done := make(chan bool)
	stream := make(chan string)
	terminated := doWork(done, stream) // will not cause deadlock if stream is nil

	go func() {
		defer close(done)
		defer fmt.Println("Cancelling doWork goroutine...")
		time.Sleep(1 * time.Second)
	}()

	go func() {
		defer close(stream)
		for _, s := range []string{"a", "b", "c", "d", "e", "f", "g", "h"} {
			stream <- s
			time.Sleep(200 * time.Millisecond)
		}
	}()

	<-terminated
	fmt.Println("Done!")
}
```

The previous example handles the case for goroutines receiving on a channel nicely, but what if we’re dealing with the reverse situation: a goroutine blocked on attempting to write a value to a channel? Here’s a quick example to demonstrate the issue:

```go
func genRandomIntStream(done <-chan bool) <-chan int {
	randIntStream := make(chan int)
	go func() {
		defer fmt.Println("genRandomIntStream exited.")
		defer close(randIntStream)
		for {
			select {
			case randIntStream <- rand.Int():
			case <-done:
				return
			}
		}
		/*
			will never execute defer methods
			for {
				randIntStream <- rand.Int()
			}
		*/
	}()
	return randIntStream
}

func main() {
	done := make(chan bool)
	randStream := genRandomIntStream(done)
	fmt.Println("3 random ints:")
	for i := 0; i < 3; i++ {
		fmt.Printf("%d: %d\n", i+1, <-randStream)
	}
	close(done)
	time.Sleep(1 * time.Second)
}
```
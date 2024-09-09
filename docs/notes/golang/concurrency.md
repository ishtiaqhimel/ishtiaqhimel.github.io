## Concurrency vs Parallelism
Concurrency is not parallelism, although it enables parallelism.

If we have only one processor, our program can still be concurrent but it cannot be parallel. On the other hand, a well-written concurrent program might run efficiently in parallel on a multiprocessor. 

## Goroutines

A goroutine is a lightweight thread managed by the Go runtime.

```go
go say("hello world")
```

Goroutines run in the same address space, so access to shared memory must be synchronized.

## Channels

Channels are a typed conduit through which you can send and receive (bidirectional by default) values with the channel operator, `<-`.

```go
ch <- v // send v to channel ch
v := <- ch // receive from ch, and assign value to v
```

By default, sends and receives block until the other side is ready. This allows goroutines to synchronize without explicit locks or condition variables.

## Buffered Channels

Channels can be buffered. Provide the buffer length as the second argument to `make` to initialize a buffered channel:

```go
ch := make(chan int, 100)
```

`cap(ch)` is used to get buffer capacity and `len(ch)` is used to get buffer length.

Sends to a buffered channel block only when the buffer is full. Receives block when the buffer is empty.

## Range and Close

A sender can `close` a channel to indicate that no more values will be sent. Receivers can test whether a channel has been closed by assigning a second parameter to the receive expression: after

```go
v, ok := <- ch
```

`ok` is `false` if there are no more values to receive and the channel is closed.

The loop for `i := range c` receives values from the channel repeatedly until it is closed.

Only the sender should close a channel, never the receiver. Sending on a closed channel will cause a **panic**.

Closing a already closed channel will cause a **panic**. 

Channels aren't like files; we don't usually need to close them. Closing is only necessary when the receiver must be told there are no more values coming, such as to terminate a `range` loop.

## Select

The `select` statement lets a goroutine wait on multiple communication operations.

A `select` blocks until one of its cases can run, then it executes that case. It chooses one at random if multiple are ready.

The `default` case in a `select` is run if no other case is ready.

Use a `default` case to try a send or receive without blocking.

```go
select {
case i := <-c:
    // use i
default:
    // receiving from c would block
}
```

## sync.Mutex

We've seen how channels are great for communication among goroutines.

But what if we don't need communication? What if we just want to make sure only one goroutine can access a variable at a time to avoid conflicts?

This concept is called mutual exclusion, and the conventional name for the data structure that provides it is mutex.

Go's standard library provides mutual exclusion with `sync.Mutex` and its two methods:

- `Lock`
- `Unlock`

We can define a block of code to be executed in mutual exclusion by surrounding it with a call to `Lock` and `Unlock`.

We can also use `defer` to ensure the mutex will be unlocked.


## Remember
- Don't communicate by sharing memory, share memory by communicating.
- Channels orchestrate; mutexes serialize.
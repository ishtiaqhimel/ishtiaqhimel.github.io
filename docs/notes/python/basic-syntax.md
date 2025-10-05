```python
# this is a single line comment

# print hello world
print("Hello World!")

# take user input
a = int(input("Enter a number: "))

# indentation block
if a > 0:
    print("Answer")
    print("Greater than zero")
elif a == 0:
    print("Answer")
    print("Zero")
else :
    print("Answer")
    print("Lesser than zero")

# multi-line statement
b = 5 + \
    6
print(b)

# statements contained within the [], {}, or () brackets do not need to use the line continuation character
days = ['Monday', 'Tuesday', 'Wednesday',
        'Thursday', 'Friday']
print(days)

# python accepts single ('), double (") and triple (''' or """) quotes to denote string literals, as long as
# the same type of quote starts and ends the string, triple quotes are used to span the string across multiple lines
word = 'word'
print (word)

sentence = "This is a sentence."
print (sentence)

paragraph = """This is a paragraph. It is
 made up of multiple lines and sentences."""
print (paragraph)

# triple-quoted string is also ignored by python interpreter and can be used as a multiline comments
'''
This is a multiline
comment.
'''

# semicolon ( ; ) allows multiple statements on the single line
x = 5; print(x)
```
```python
# variables in python are symbolic names pointing to objects or values in memory
print(id(18)) # memory of all 18 will be same
a = 18
b = a
print(id(a)) # memory of 18
print(id(b)) # memory of 18
b = b + 1
print(id(a + 1)) # memory of 19
print(id(b)) # memory of 19
print(id(19)) # memory of 19

# variables by assigning them a value using the assignment operator
word = "hello"
print(type(word)) # str

x = 20
print(type(x)) # int

p = 21.0
print(type(p)) #float

subjects = ["Math", "English", "Physics", "Chemistry"]
print(type(subjects)) # list

person = ("Alice", 25, "Python Dev")
print(type(person)) # tuple

# variables are dynamically typed, allowing type changes through reassignment
subjects = {"Math", "English", "Physics", "Chemistry"}
print(type(subjects)) # set

p = "21.0"
print(type(p)) # str

# delete the reference to a number object by using the del statement
del x, p
# print(x) # undefined

# data type of variable can be changed with help of casting
x = int('10')
print(type(x)) # int

# variables are case-sensitive
age = 19
Age = 20
print(age, Age, sep="---")

# python allows to initialize more than one variable in a single statement
a, b, c = 1, 2, 'hello'
print(a, b, c)
print(a, b, c, sep="---")

a = b = c = 1
print(a, b, c, sep="---")

# variable names can include letters, digits, and underscores but can’t start with a digit
# use snake case for multi-word names to improve readability (camel case and pascal case also can be used)
total_sum = a + b + c
print(total_sum)

# in Python, there are four different variable scopes, which can be presented using the LEGB acronym
# the letters in this acronym stand for local, enclosing, global, and built-in scopes

# global variables are those that are created at the module level
# these variables are visible within the containing module and in other modules that import them
print(dir()) # to check the list of names defined in current global scope

# local variables are those that are defined inside a function
def func():
    y = 9
    return y
print(func())
# print(y) # unresolved reference

# Global scope
global_variable = "global"
def outer_func():
    # Nonlocal scope
    nonlocal_variable = "nonlocal"
    def inner_func():
        # Local scope
        local_variable = "local"
        print(f"Hi from the '{local_variable}' scope!")
        print(f"Hi from the '{nonlocal_variable}' scope!")
        print(f"Hi from the '{global_variable}' scope!")
    inner_func()
outer_func()

# class attributes are variables that are created at the class level
# while instance attributes are variables that are attached to instances of a given class
class Employee:
    count = 0

    def __init__(self, name, position, salary):
        self.name = name
        self.position = position
        self.salary = salary
        Employee.count += 1

    def display_profile(self):
        print(f"Name: {self.name}")
        print(f"Position: {self.position}")
        print(f"Salary: ${self.salary}")

jane = Employee("Jane Doe", "Software Engineer", 90000)
john = Employee("John Doe", "Product Manager", 120000)

jane.display_profile()
jane.display_profile()
print(Employee.count)

# Employee.name # type object 'Employee' has no attribute 'name'
```
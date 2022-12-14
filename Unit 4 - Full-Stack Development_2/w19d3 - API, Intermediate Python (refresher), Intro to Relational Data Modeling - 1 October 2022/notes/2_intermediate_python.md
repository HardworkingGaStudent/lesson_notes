[![General Assembly Logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)](https://generalassemb.ly)

# Intro to Intermediate Python

## Overview

This lesson starts with a recap of all of the topics covered up to this point, giving you a final chance to express your questions before we move beyond the basics. It then has a very quick overview of the upcoming unit — user input and file I/O, abstraction, modules, and APIs.

## Learning Objectives

*After this lesson, you will be able to:*

- Confidently recap the previous units.
- Describe key components of the upcoming unit.

## Duration

20 minutes

## Agenda

| Duration | Activity                    |
| -------- | --------------------------- |
| 3 mins   | Welcome                     |
| 8 mins   | Basic Topics Recap          |
| 4 mins   | Intermediate Topics Preview |
| 3 mins   | Summary                     |

---

**Talking Points:**

- This lesson is pretty solidly a review.
- Then, we'll very briefly introduce all of the concepts covered the next unit. Don't worry about learning them here!
It's the final Python unit and it covers quite a lot, so we'll just give you an overview in advance.

---

## Leveling Up

You're leveling up!
You have the proper foundation. Now, let's check how you're doing.

---

## Let's Review: Lists

- A collection of items stored in a single variable.
- Created with square brackets (`[]`).
- Begin counting at `0`.

```python
my_queens = ["Cersei", "Daenerys", "Arwen", "Elsa", "Guinevere"]
step_counts_this_week = [8744, 5256, 7453, 3097, 4122, 2908, 6720]

# We can also mix types.
weird_list = [1, "weird", ["nested list"], "eh?"]
```

> **Challenge:** Can you recall how to slice a section of the list? For example, items 2 through 5 of `step_counts_this_week`?

**Talking Points:**

- Lists are a collection of items stored in a single variable.
- Lists can be of any type, but they are typically of related items.

---

## Answer: Lists Challenge

- Python uses a `:` to represent a range of indices.
- Beware of off-by-one errors!

```python
step_counts_this_week = [8744, 5256, 7453, 3097, 4122, 2908, 6720]
days_2_thru_5 = step_counts_this_week[2:6] # Items 2, 3, 4, and 5
```

> **Pro tip:** It's `6` instead of `5` because the range is exclusive.

**Talking Point:**

- Many languages have a `slice()` method, but Python simply uses the colon to represent a range of indices."

---

## Let's Review: Loops and Iteration

What about looping a list?

```python
my_queens = ["Cersei", "Daenerys", "Arwen", "Elsa", "Guinevere"]

for queen in my_queens:
    print(queen, "is the most powerful queen!")
```

> **Challenge:** What if I want to loop from 1 to 10 and print out the numbers? How do I do this without a data structure to loop over?

**Talking Point:**

- We just reviewed looping over a dictionary. Let's loop over a list.

---

## Answer: Loops Challenge

To loop 1–10 without a data structure:

```python
# Remember, "i" is a common name for a counter/index in programming!
for i in range(1, 11):
    print(i)
```

- Why do you think we put `11` in the code?
- What values does this print?

**Talking Point:**

- Remember that ranges in Python are exclusive on the end!

---

## Let's Review: Sets

- Lists that don't have duplicates.
- Created with curly braces (`{}`) or from lists with the `set()` function.
- Aren't indexed — elements are in any order!
- Handy for storing emails, user names, and other unique elements.

```python
email_set = {"my_email@gmail.com", "second_email@yahoo.com", "third_email@hotmail.com"}
# Or from a list:
my_list = ["red", "yellow", "green", "red", "green"]
my_set = set(my_list)
# => {"red",  "yellow", "green"}
```

**Talking Point:**

- Sets are lists that don't have duplicates.

---

## Let's Review: Tuples

- Lists that can't be changed!
- Created with parentheses (`()`).
- Can't add, pop, remove, or otherwise change elements after creation.

```python
rainbow_colors_tuple = ("red", "orange", "yellow", "green", "blue", "indigo", "violet")
```

- Reminder: Tuples are lists that can't be changed.

---

## Let's Review: Dictionaries

- A collection of key-value pairs.
- Created with curly braces (`{key: value, key: value}`).
- Values can be anything!

```python
my_puppy = {
    "name": "Fido",
    "breed": "Corgi",
    "age": 3,
    "vaccinated": True,
    "fave toy": ["chew sticks", "big sticks", "any sticks"]
}
```

> **Challenge:** Can you recall how to iterate (loop) over each key of `my_puppy` and print out both the key and the corresponding value?

**Talking Points:**

- Dictionaries are made of key-value pairs.
- We split lines for readability.

---

## Answer: Dictionaries Challenge

Iterating a dictionary is similar to a list:

```python
for key in my_puppy:
    print(key, "-", my_puppy[key])
```

Outputs:

> name - Fido
> breed - Corgi
> age - 3
> vaccinated - True
> fave toy - chew sticks

**Talking Point:**

- Dictionaries are made of key-value pairs.

---

## Let's Review: Functions

- Bits of code that can be used repeatedly.
- Enable DRY — Don't Repeat Yourself.
- Declared with `def`, `()`, and `:`.
- Declare the function *above* the function call!

```python
# Function definition:
def say_hello():
    print("hello!")

# Run the function three times.
say_hello()
say_hello()
say_hello()
```

---

## Let's Review: Function Parameters

Parameters are in the function definition.

- Arguments are in the function call.
- Useful for very similar code with only minor variations.

**Challenge:** Rewrite the code below to use a single function with one parameter.

**Talking Point:**

- Parameters to functions allow us to pass in arguments to use within the function. This is useful when you have very similar code.

**Repl.it note:** The code [here](https://repl.it/@SuperTernary/python-programming-intro-intermed?lite=true) is:

```python
# Function definitions:
def say_hello_ada():
  print("hello, Ada")

def say_hello_alan():
  print("hello, Alan")

def say_hello_linus():
  print("hello, Linus")

# Call the functions:
say_hello_ada()
say_hello_alan()
say_hello_linus()
```

> **Challenge:** Could we do this with a single function that has a parameter called "name"?

---

## Let's Review: Return Statements

- Bring data out of a function.
- Cause the function to exit.
- Aren't a `print` statement!

```python
def multiply(x, y):
    return x * y

result = multiply(3, 4) # Result is now equal to 12.
```

**Talking Point:**

- Return statements bring data out of a function. They are not the same thing as `print` statements, which simply output text.

---

## Let's Review: Classes

- Templates (aka, blueprints) for objects.
- Can contain methods and/or variables.
- `self` is a reference to the created object.

```python
class Animal():
    def __init__(self):
        self.energy = 50

    def get_status(self):
        if self.energy < 20:
            print("I'm hungry!")
        elif self.energy > 100:
            print("I'm stuffed!")
        else:
            print("I'm doing well!")
```

> **Challenge:** How do you declare a new `Animal`?

**Talking Point:**

- Classes are essentially blueprints for object-making factories. They can be used to make several objects of the same type.

---

> Answer: Classes

Declaring a new `Animal` from the class:

```python
my_animal = Animal() # Creates a new Animal instance.
my_animal.get_status() # Prints "I'm doing well!"
my_animal.energy += 100 # We can access properties!
my_animal.get_status() # Prints "I'm stuffed!"
```

- Quick check: How can multiple animals be created?
- Show how we can directly access properties.

---

## Let's Review: Inheritance

A class can inherit properties and methods from another class.

**You Do:** Create a new class, `Dog`, which inherits from `Animal`.

- `Dog` has an extra function, `bark()`, that prints `"bark"`.
- `Dog` has an extra property, `breed`.

**Talking Point:**

- Inheritance is all about reusing code. You may have two classes that are related. Inheritance allows you to take advantage of that.

**Repl.it note: [Here](https://repl.it/@SuperTernary/python-programming-intro-inter-classes?lite=true) is our `Animal()` class**

```python
class Animal:
    def __init__(self):
        self.energy = 50

    def get_status(self):
        if self.energy < 20:
            print("I'm hungry!")
        elif self.energy > 100:
            print("I'm stuffed!")
        else:
            print("I'm doing well!")


# Directions Part 1: Create a class, `Dog`.
# * `Dog` inherits from `Animal`.
# * `Dog` has an extra function, `bark`.
# * `Dog` has an extra property, `breed`.

# Directions Part 2: Declare a new dog.
# * Call the `bark()` function.
# * Give the dog a breed.
```

---

## Knowledge Check

We're about to move on to the next unit: Intermediate Python.

Any questions?

> Don't be shy! If you have a question, so do others!

---

## Switching Gears: Preview

The next unit covers many topics, including:

- User input
- File I/O
- Abstraction
- Modules and libraries
- APIs

You don't need to memorize them now! This is just an overview.

**Talking Point:**

- Here's a preview of what's coming. We'll have lessons on the following topics.

---

## User Input and File I/O

You've seen this a few times already with `input()`.

We'll build real interactions between your Python programs and other files — or the person using your app!

- In this section we'll cover opening, reading, writing, and closing files, as well as browsing directory contents.

---

## Abstraction

Python has built-in functions for performing common tasks.

You've seen things like `my_list.len()`, which tells you the length of a list.

But Python has more specialized built-in functions, like chaining lists together:

```python
food = ["pizza", "tacos", "sushi"]
colors = ["red", "green"]
# => lists_chained =['pizza', 'tacos', 'sushi', 'red', 'green']
```

This helps you get complex things done more quickly.

We'll learn several of these.

---

## Modules and Libraries

We mentioned these in the pre-work!

Modules and libraries are:

- Code that others have written.
- Free to use!
- Useful extensions of the Python language (e.g., a fancy date and time formatter).

This one tells us when Mother's Day is for a given year:

**Talking Points:**

- We can use code other people have written. Here, we can get the date of Mother's Day from 2013 with just one line of code!

**Repl.it note:** This repl.it [code](https://repl.it/@SuperTernary/python-programming-intro-inter-modules?lite=true) has:

```python
from pytime import pytime

# Now we can use any function in the datetime module.

print(pytime.mother(2013))

```

---

## What Is an API?

Not only can we use code other people have written; we can also use data that they've made available to us.

We can incorporate stocks, movie ratings, or GIFs from the internet into your program!

This API lists *Star Wars* characters.

**Talking Point:**

- "API" is a very general term. Usually we actually mean some information from other people.

**Repl.it note:** This [code](https://repl.it/@SuperTernary/python-programming-intro-intermediate-apis?lite=true) is:

```python
# Import requests module.
import requests

# Call the Star Wars API (swapi).
res = requests.get("https://swapi.co/api/people").json()

# Print the result count.
print("found", res["count"], "results. Here are the first 10:\n")

# Loop through characters: Append to file and print to screen
for person in res["results"]:
    print(person["name"])
```

---

## Summary and Q&A

We reviewed topics from earlier lessons:

- Lists, sets, tuples, and dictionaries.
- Loops and iteration.
- Functions, parameters, and return statements.
- Classes and inheritance.

We brushed the surface on some upcoming topics:

- User input and file I/O.
- Abstraction.
- Modules and libraries.
- APIs.

Let's jump in to it!

---

## Additional Reading and Resources

Now that you have an understanding of basic programming, here are some cool people to read about:

- **[Ada Lovelace](https://en.wikipedia.org/wiki/Ada_Lovelace):** Regarded as the first programmer.
- **[Alan Turing](https://en.wikipedia.org/wiki/Alan_Turing):** Considered the father of theoretical computer and artificial intelligence; helped crack the enigma code during World War II.
- **[Linus Torvalds](https://en.wikipedia.org/wiki/Linus_Torvalds):** Creator of Linux OS and Git.

---

_Copyright 2022, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)_
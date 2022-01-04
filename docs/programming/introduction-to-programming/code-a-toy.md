---
sidebar_position: 1
---

# Code a toy

## Summary

### Objectives
*By the end of this session you should be able to:*
* Demonstrate that a program can:
  * Receive interactive user input
  * Store data in memory
  * Output data to the screen

### Key Points
* A program can receive user input interactively using an input statement
* A program can store data in variables of various types
* A program can output data to the screen using a print statement

## Breakdown
### Mad Libs
Mad Libs is a word game where you have to fill in the blanks in a given sentence; each blank is given a category. Example:

> *<name\>* started their first Generation course today. They are training as a *<job name\>*. They found their cohort to be very *<adjective\>* but their teacher was, at least, *<adjective\>*. For lunch they have *<food\>* and *<food\>* while reviewing their notes. They feel *<feeling\>* but are determined to complete the course.

This could be filled in seriously:

> *Max* started their first Generation course today. They are training as a *Software Engineer*. They found their cohort to be very *overwhelming* but their teacher was, at least, *understandable*. For lunch they have *pizza* and *chips* while reviewing their notes. They feel *apprehensive* but are determined to complete the course.

Or humourously:

> *Tomato* started their first Generation course today. They are training as a *Tomato*. They found their cohort to be very *tomato* but their teacher was, at least, *a tomato*. For lunch they have *tomatoes* and *tomatoes* while reviewing their notes. They feel *tomatoes* but are determined to complete the course.

Either way, it's important to note that these blank spaces are *variable* - they can be changed based on inputs. As such, they are a useful tool for exploring variables and inputs.

### Demonstrating a toy program
:::info
A toy program is a small computer program typically used to test a programming language's syntax. It is more complex than "Hello World" but is not intended to be used for anything other than demonstration and practice.
:::

We can use the following program to demonstrate three essential features available in all programming languages:
``` python
print("What is your first name?")
first_name = input()
print("What is your last name?")
last_name = input()
print("Hey " + first_name + " " + last_name + "!")
```

#### Output
The `print()` function is a very simple tool, used in this program to output text to the screen. Anything within the parentheses of the `print()` function will be displayed to the user.

#### Input
The `input()` function is used in this program to capture user-provided input. When the program is run it will process each statement in turn, and when it hits the `input()` function it will wait for the user to press the Enter key. Anything typed in before the Enter key will be taken as input.

By itself, this `input()` statement would do nothing - it needs to *assign* the user's input to.. something.

#### Variables
A *variable* is somewhere that the program can put data. In this program, anything entered in line 2 is *assigned* to the `first_name` variable (in Python, the *syntax* for a variable is just a word). Anything entered in line 4 is assigned to the `last_name` variable. Note that in Python, `=` is the *syntax* for assigning something, and the thing you're assigning (the output of `input()`) is on the right of the `=` sign.

In the final line, we use the `+` syntax to add together multiple pieces of data - strings of text and variables containing text! Thus, if we assign "Peter" to `first_name` and "Parker" to `last_name` then line 5 will print the result of:

> "Hey " + "Peter" + " " + "Parker" + "!"

Which is:

> Hey Peter Parker!

If both `first_name` and `last_name` were assigned the input "Tomato" then we would get:

> Hey Tomato Tomato!

Just like the Mad Libs!

:::info
These concepts are not hard, but they can be *weird*. Understanding programming involves a lot of lateral thinking. It involves challenging things we thought we understood, and building knowledge that can sometimes feel vague and bewildering. This does not go away - working in tech requires constant development and growth. Good tech workers don't know everything; they *do* have the persistence, growth mindset and orientation to detail that allows them to solve anything (eventually!).

These are all part of what is referred to as a "developer mindset" in the industry. Good tech workers are not necessarily the quickest to solve a problem; rather, they are the ones that are left when everyone else gives in. Developing a “developer mindset” is as important as technical knowledge - it’s highly valued by employers, and it’s thoroughly tested for in interviews.

Don't worry too much if you don't understand these concepts *yet*; rather, cultivate a set of behavioural skills and mindsets that allow you to hang on and work through until you do.
:::
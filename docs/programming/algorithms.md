---
sidebar_position: 3
---

# Algorithms

## Summary

### Objectives
*By the end of this session you should be able to:*
* Demonstrate performing basic arithmetic
* Define an algorithm
* Write and call functions in a program

### Key Points
* In most programming languages, arithmetic follows the BODMAS order of execution.
* An algorithm is a set of steps used to complete a specific task.
* Functions are a set of instructions bundled together to achieve a specific outcome.

## Breakdown
### Order of Operations
When calculating a mathematical equation you might expect to just move through each part in turn, calculating it and then moving on (usually from left to right) - however, this is not how computers (or mathematicians!) calculate. Instead, there is an *order of operations* - a set of rules that tell the computer what should be calculated first. That order is commonly remembered as **BODMAS**, an acronym which stands for:

* **B**rackets
* **O**rder of powers or roots
* **D**ivision and **M**ultiplication
* **A**ddition and **S**ubtraction

If you don't bear this in mind when writing calculations you may be caught out - for example, these two equations do not equal the same thing:

```
3 + 5 * 7 = 38
(3 + 5) * 7 = 56
```

### Algorithms
The word *algorithm* sounds like something complex and magical - indeed, many algorithms can be very complex (and seem like magic until you understand them). However, an algorithm is simply a set of instructions that describe how to get something done. An example of an algorithm might be a food recipe, or a guide to building some furniture. All computer programs are at least one algorithm, and we can expect them to have the following features:

* **Zero or more inputs** - an algorithm often has an input, but doesn't have to. An example might be a random number generator.
* **A procedure** - a process that must be followed.
* **One or more outputs** - the end of the process must produce at least one output.

In programming we like to separate out our algorithms so that we can easily understand them and build them into more complex systems.

### Functions
Functions are a great way to capture algorithms within a piece of code. A function is declared in a program - but not run until it is called. A function might be called many times, each with a different input. For example:

```python
def more_than_ten(number):
    if number > 10:
        response = True
    else:
        response = False
    return response
```

This function has a single input (`number`), and when called will test that input to see if it's more than ten. It then returns an output (`response`), which is a boolean. If we call this function by typing `more_than_ten(7)`, the function will respond `False`; if we call `more_than_ten(11)` it will respond `True`.

### Built-in functions and Libraries
Programming languages have many *built-in functions*, which can be found in their documentation. Built-in functions come with the programming language and allow programmers to complete tasks they would otherwise have to write a function for themselves.

In addition to this, programmers publish **modules** of functions in **libraries* which can be loaded into your code. This can be done within projects (to separate out code for ease of maintenance) or between projects (to share the burden of developing and maintaining generic algorithms). Many programming languages have repositories of libraries (e.g. `PyPi` for Python, `npmjs` for JavaScript) which you can use in your code to quickly get a project working.

::info
Libraries contain modules, which themselves contain functions. However, since many libraries have only one module, these terms are often used interchangeably.
:::
---
sidebar_position: 0
---

# The Central Processing Unit

## Summary

### Objectives

*By the end of this session you should be able to:*

* Introduce logic gates
* Describe what a transistor is
* Describe how transistors can be arranged into logic gates
* Explain what a CPU Architecture is

### Key Points

* Logic Gates are devices that combine binary inputs together using fixed rules.
* Transistors are small electrical devices that we use as switches in modern computers.
* Logic Gates can be made out of transistors.
  * This is an example of abstraction.
* A computer itself is made of several layers of abstraction.

## Breakdown

### Transistors

*Transistors* are simple electronic components. They have three pins, and current - electricity - can flow between the first two when electricity is applied to the third. For this reason they are often thought of like electronically-activated switches.

The Transistor became the dominant method for switching in circuits, and we can squeeze lots of transistors into a *microchip*. Transistors can be arranged into complex circuits like the *full adder*, which can take binary numbers and add them together! This is the basis of all modern computers.

:::info
Transistors are made with *silicon*, a product made from sand. This is the "silicon" in "silicon valley" - the name comes from the large quantity of microchips needed by the fast-growing tech companies in the San Francisco Bay Area.

You might hear some people joke that we're "making sand do maths" - which is sort-of true!
:::

### Logic gates

As computers got more complex, we needed a way of *abstracting* away the complexity by representing it in simpler terms. We created *logic gates*, which are arrangements of transistors that can complete simple logical functions like AND, OR and NOT. Using a series of logic gates we can design instructions like adders, subtractors and multiplers - as well as far more complex circuits.

:::info
Abstraction is an important concept in tech. Trying to understand computers as a series of switching transistors is basically impossible, let alone programming them as such. For this reason, we come up with *models* which allow us to ignore the underlying complexity.

The network stack is another example of abstraction
:::

### Layers of abstraction

There are many other layers of abstraction between a transistor and your first "Hello World" program:

* Instructions - arrangements of logic gates - are captured in **instruction sets**, which are then built into a microchip which we call the *processor*.
* An **Assembly language** is written which commands these instructions in a way that a human can read.
* While some applications are written directly in Assembly, **Low-level programming languages** like C are written to make programming easier than directly commanding the instructions on the processor.
* **High-level programming languages** like Python are then written which seek to make programming even more  human-friendly!

A "Hello World" program written in Python is *interpreted* by the Python interpreter, which is written in C. This then *compiles* the program to Assembly language, which directly commands the instructions in the CPU's *instruction set*. These instructions are arrangements of logic gates, which themselves are just arrangements of transistors.

### Specialisation

Computers are very complex machines. Not only have we made them human-friendly through layers of abstraction, we have different engineers specialising in different layers of the stack. *Nobody understands the full stack in depth* - but having an awareness of it, and a curiosity about how problems are solved in different parts of it, will make you a better engineer.

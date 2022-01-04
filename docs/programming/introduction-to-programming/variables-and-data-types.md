---
sidebar_position: 2
---

# Variables and Data Types

## Summary

### Objectives
*By the end of this session you should be able to:*
* Explain what variables are
* Introduce common primitive data types.
* Introduce key data structures

### Key Points
* A variable is a named storage location for data.
* Data can be stored as one of many types, like strings or numbers - these are called primitives.
* Data can be organised into structures, like lists or objects - these are called data structures.

## Breakdown
### Variables
Programs contain lines of code which may take input, or compute values - but without anywhere to put that data it will disappear instantly.

A variable is a named storage location which can be used to store data - the data is called the variable's *value*. It can be thought of like a bucket, which can hold data until it's ready to be used again.

:::info
In some programming languages you must declare the data type that a variable can hold; this is a feature of *static typing*. In a statically typed language, an attempt to add a string to an integer type variable would result in an error. Other programming languages, like Python and JavaScript, use *dynamic types* - as such, a variable can contain any type.

These systems are collectively known as *Type Systems*; the study of which is called *Type Theory*.
:::

### Data Types
A programming language needs to know that `1 + 1` should equal `2`, but `Hello + World` must equal `Hello World`. To do this, a programming language defines specific rules that apply differently to different types of data. These are the programming language's *data types*.

Different programming languages have different types, and the same type might work differently in different programming languages. However, most have at least the following basic data types:
* **Integer** - A whole number, e.g. `32` or `-6` or `1`.
* **Floating-point number** - Real numbers, e.g. `5.7` or `-34.3333` or `1`.
* **String** - A sequence of characters, e.g. `Hello World` or `😎😎😎` or `1`.
* **Boolean** - A type with only two possible values, `False` or `True` - which can also be represented as `0` or `1`.

:::info
**Check your assumptions!** When programming languages are created, the designers make decisions that may seem confusing or illogical to new users. Older programming languages also carry "baggage" in the form of poor decisions, which must be maintained for backwards compatibility. If something isn't working, your first port of call should be to ensure you are using the features of a language (or library) in the correct manner.

Most programming languages have comprehensive documentation, which is referenced often by programmers. Reading the documentation isn't cheating, it's literally their job!
:::

### Data Structures
Data structures are objects that can contain other data types (including other data structures). They are a convenient way of storing and moving associated groups of data.

Like types, different programming languages have their own data structures - and different names for similar structures! These are common data structures:
* **Array** - a collection of *elements*. Some programming languages call these *lists* instead.
* **Associative Array** -  collection of *key-value pairs*. Some programming languages call these *maps*, *symbol tables*, or *dictionaries*.
* **String** - in most programming languages a string is actually a data structure - an array of characters - and can be manipulated like an array.
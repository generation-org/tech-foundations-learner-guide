---
sidebar_position: 0
---

# Hello World

## Summary

### Objectives
*By the end of this session you should be able to:*
* Explain what a program is at a high level
* Explain what a programming language is
* Describe some high-level concepts many programming languages have in common
* Write a “Hello, World!” program

### Key Points
* A program is a series of instructions that can be executed by a computer.
* A programming language is a formal set of rules (syntax) for writing a computer program.
* Programming languages have different features and syntax but share many fundamental concepts.
* “Hello, World” is a common, simple program used to demonstrate the basic syntax of a programming language.

## Breakdown
### Computer programs
Computer programmers program computers by giving them instructions, often as a set of written statements. These sets of instructions are called programs, and they set out step-by-step what a computer should do. However, computers are very simple machines - as such, it is very important that we give them *exact*, *unambiguous* instructions.

Consider the following sentence:
> "Look at the dog with one eye"

This sentence could have two meanings:
* Close one eye, then look at the dog
* Look at the dog that has a single eye

The meaning is *ambiguous*.

Humans handle ambiguity well - we can use context and experience, and when we make mistakes we can correct them in real-time:
* We know from experience that it's uncommon to ask for someone to look at an object with only one of their eyes.
* We may know from context that there are many dogs, and as such the *specificity* of the request is warranted.
* If we look around and see no one-eyed dog, we could re-evaluate our understanding (or possibly ask a clarifying question).

Computers cannot do any of this unless they are specifically instructed how to - as such, a computer given this task would likely either default to one behaviour in all circumstances, or else error out.

### Syntax
The rules we create for computers and programmers to follow are called *syntax*, and they are similar to rules in human languages. Most English grammar is syntax.

Consider the following sentence:
> I don't want no pudding

This is a common example of bad grammar - specifically, a double negative. A human listener may just recognise (from knowledge and context) what the intent is, and may correct the speaker - but since the speaker *technically* said they didn't want "no pudding", a computer would dispense more pudding.

As with human languages, which are made up of words and rules for how to use them, programming languages are also made up of words and rules for how to use them. However, programming languages are designed - as such, a complete set of rules is available to any programmer to follow. Programming languages also have far fewer words and rules than human languages, as well as being more logical to follow.

### Programming languages
Many programming languages exist, and they all compete for the attention of programmers. Languages have different features, and different implementations of the same features. They all have different *syntax*, and are suited to different tasks:

* Python is a popular tool for scientific computing
* C# is a common computer game programming language
* JavaScript is extremely popular for developing web applications

However, **all programming languages share fundamental concepts** - once you understand these concepts in one programming language you can use it in others, too.

### Hello World
*Hello World* is a simple computer program that outputs or displays the message "Hello World". It is often used to test the syntax of a programming language before moving on to write more complex programs. By exploring how this program is written in different programming languages we can see what common similarities and differences you might find between them.

All the following programs do the same thing - they print the words "Hello World", then they exit.

#### Hello World in Python
```
print("Hello World")
```
Python is a very popular first programming language because it is easy to write and easy to read. In this example we can see that displaying our text is as easy as adding it to the parentheses of the `print()` function.

#### Hello World in Java
```
class Main {
 public static void main(String[] args) {
    System.out.println("Hello World");
  }
}
```
Java is a very popular and powerful enterprise programming language, but the syntax can be overwhelming for newcomers. In this example we can see a lot of *boilerplate* code which is necessary in all Java programs.

:::info
**Boilerplate code** - often simply called *boilerplate* - are sections of code that are necessary to write before you can achieve basic functionality, but often aren't changed from program to program. Programmers often have collections of boilerplate text they will copy into their code and then modify.

Some programming languages have tools that automatically generate boilerplate; newer programming languages try to reduce boilerplate altogether.
:::

#### Hello World in TI-BASIC
```
:Disp "Hello World"
```
TI-BASIC is a niche programming language used on calculators made by Texas Instruments. This example is interesting because it uses the verb `:Disp` to print (or "display") the text.

#### Hello world in Ezhil
```
பதிப்பி "Hello, World!"
exit()
```
Exhil is a Tamil-language programming language, which means that it uses not only non-English verbs but a non-English *script*. This was invented to help increase computer literacy amongst learners that have no English language experience. `பதிப்பி` roughly translates to "Publish" in English (it is notable that `exit()` is still in English).

Most programming languages are written using English verbs, and most programmers - even programmers that cannot speak English - use English-language programming languages.
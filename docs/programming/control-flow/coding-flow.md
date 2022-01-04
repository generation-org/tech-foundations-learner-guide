---
sidebar_position: 1
---

# Coding flow

## Summary

### Objectives
*By the end of this session you should be able to:*
* Explain what control flow is, and how flow can be manipulated using:
  * For and While Loops
  * If statements
* Demonstrate common comparisons that can be used in control flow statements

### Key Points
* Control Flow comprises of the rules that tell a computer to do things conditionally and repetitively
* In code, programmers create:
  * Branching using if statements
  * Repetition using for and while loops
* We use comparisons to make decisions in Control Flow

## Breakdown
### Control Flow
Control flow is the order in which individual instructions in a program are executed, and it can be visualised as a flowchart. We can manipulate control flow to run instructions repeatedly (more than one time) and conditionally (if certain criteria are met). By default, most computer programs run instructions one line at a time, starting at the top.

### Comparisons
Comparisons are statements that evaluate to either `True` or `False`, and rely on *comparison operators*. Comparison operators can be placed between two values to form a statement - the program then *evaluates* whether that statement is true or not. Common comparison operators include:
* `==`, or "equal". `7 == 7` would evaluate to `True`, because both values are equal.
* `!=`, or "not equal". `7 != 7` would evaluate to `False`, because both values are *not* not equal.
* `<` and `>`, or "less than" and "more than". `7 > 7` would evaluate to `False`, because `7` is not more than `7`.
* `<=` and `>=`, or "less than or equal to" and "more than or equal to". `7 >= 7` would evaluate to `True`, because `7` is more than or equal to `7`.

### Branching
An if statement allows us to use comparisons as conditional "gates"; if the comparison evaluates to `True` then the associated instructions are executed, if it evaluates to `False` then it does not. If statements can also have "else if" and "else" clauses, which give further branch options; these are optional. Consider this example:

```python
doorbell = input("Who is it?")
if doorbell == "Peter":
  print("Welcome home!")
elif doorbell == "Paul":
  print("Paul, you've got the wrong door again. Your house is next door.")
else:
  print("Welcome, visitor!")
```

From this code we can see that Peter, who owns this house, has written a little script to welcome him home - and to welcome visitors, too. However, if Paul (his neighbour) rings the doorbell it will politely remind him that he has the wrong house.

### Loops
Loops are a way to run a block of code many times. Two common loops are the *while* loop and the *for* loop.

#### While loops
While loops run the block of code *while* a condition is true. Consider this example, which will run infinitely (since `True` will always evaluate to `True`):

```python
while True:
  print("This will run forever")
```

More commonly, while loops have comparison statements that eventually evaluate to false:

```python
while bottles != 0:
  print(bottles + "green bottles, hanging on the wall")
  bottles = bottles - 1
```

#### For loops
For loops iterate through every item in a range, such as a list. This is possible in a while loop, but for loops are more suited to some tasks:

```python
bottles = ["Ten", "Nine", "Eight", "Seven", "Six", "Five", "Four", "Three", "Two", "One"]
for bottle in bottles:
  print(bottle + "green bottles, hanging on the wall")
```
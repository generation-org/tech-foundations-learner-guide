---
sidebar_position: 0
---

# Counting like a computer

## Summary

### Objectives
*By the end of this session you should be able to:*
* Explain what binary numbers are
* Explain what Hexadecimal numbers are, and why Engineers use them

### Key Points
* Binary digits are 0 and 1 (two digits); you can count to any number using these two digits
* Hexadecimal digits are 0 through F (sixteen digits); engineers use them because they can represent four binary digits as a single hex digit

### Materials
* [A multibase tally calculator](https://replit.com/@genadmin/Multibase-Tally-Calculator), which can be used to count up/down as well as changing the number's base representation

## Breakdown
### Decimal revision
Most people are so used to counting in decimal - base-10 - that they may not realise there's any other way to count. We count from zero to nine (0-9) then move from nine to ten (10) - at which point we start again at 0 and move up to 9 (19). But we can count with less digits - or with more. We can represent this as a series of columns - for example, three hundred and twenty-seven could be written as:

| 1000s | 100s | 10s | 1s |
|-------|------|-----|----|
|     0 |    3 |   2 |  7 |

This is a useful way of adding large numbers. As an example, if I wanted to add three hundred and twenty-seven to seven thousand and eighty eight I can simply add up each of the columns and then roll over each column into the one next to it:

|   1000s |  100s |   10s |    1s |
|---------|-------|-------|-------|
|       0 |     3 |     2 |     7 |
|     + 7 |     0 |     8 |     8 |
|   = *7* |   *3* |   *10*|  *15* |
|   = *7* |   *4* |    *0*|  *15* |
| **= 7** | **4** | **1** | **5** |

Which gives us seven thousand, four hundred and fifteen.

### Counting in Binary

Computers work in binary (base-2) instead of decimal, which means they have only two numbers - 1 and 0. Otherwise they work exactly the same - we go from 0, to 1, then run out of numbers so we move to 10. This number isn't ten - it can be read as two, or as *one-zero*, but it isn't equal to ten in our normal decimal system. Again, this can be represented as a series of columns - but in multiples of 2 instead of 10:

|    8s |   4s |  2s | 1s |
|-------|------|-----|----|
|     0 |    0 |   1 |  0 |

Adding two numbers is similarly easy:

|      8s |    4s |    2s |    1s |
|---------|-------|-------|-------|
|       0 |     0 |     1 |     0 |
|     + 0 |     1 |     1 |     1 |
|   *= 0* |   *1* |  *11* |   *1* |
|   *= 0* |  *11* |   *1* |   *1* |
| **= 1** | **1** | **1** | **1** |

:::info
Don't spend lots of time trying to convert between binary and decimal! The calculation is complex, and counting from 0 takes a long time for big numbers. There are lots of binary/decimal converters available - pick a nice one and use it!
:::

### Counting in Hexadecimal
Binary numbers are long and hard for humans to work with, but converting between binary and decimal is complex and unintuitive. For this reason, engineers often use hexadecimal - base-16, also known as *hex* - instead. Hexacecimal numbers go from 0-F:

| 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | A | B | C | D | E | F |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|

Because 16 is exactly divisible by 2, every Hexadecimal number can be exactly represented by four binary numbers (with no waste!):

|    0 |    1 |    2 |    3 |    4 |    5 |    6 |    7 |    8 |    9 |    A |    B |    C |    D |    E |    F |
|------|------|------|------|------|------|------|------|------|------|------|------|------|------|------|------|
| 0000 | 0001 | 0010 | 0011 | 0100 | 0101 | 0110 | 0111 | 1000 | 1001 | 1010 | 1011 | 1100 | 1101 | 1110 | 1111 |

Large hex numbers can be represented in columns and calculated exactly like binary and decimal numbers; to demonstrate, let's calculate `A8C + 7F1`:

|     64s |   32s |   16s |    1s |
|---------|-------|-------|-------|
|       0 |     A |     8 |     C |
|     + 0 |     7 |     F |     1 |
|   *= 0* |  *11* |  *17* |   *D* |
|   *= 0* |  *12* |   *7* |   *D* |
| **= 1** | **2** | **7** | **D** |
---
sidebar_position: 1
---

# Talking like a computer

## Summary

### Objectives
*By the end of this session you should be able to:*
* Explain why computers use binary numbers.
* Demonstrate that computers can transmit information over anything that can represent two states.
* Explain how engineers measure the “size” of data on a computer.
* Explain how to measure the "speed" of connections.

### Key Points
* Computers use binary numbers because they have digital circuits, which can only represent two states.
* Computers can transmit data over anything that can represent two states, like an electrical wire, or a light.
* A binary digit is stored in a computer as a “bit”; 8 bits make up a “byte.”
* Data is measured in either multiples of bits (kilobit, megabit, gigabit), or multiples of bytes (kilobyte, megabyte, gigabyte).

## Breakdown
### Binary data
Early electronic computers (known as *analogue* electronic computers) worked by having precisely machined components that worked together in sequence to complete calculations, and would transmit data between components by changing the voltage - much like a dimmer swich on a light. Although faster, these computers weren't very precise - voltages could be affected not only by intentional changes but by unintentional factors - varying input voltages, manufacturing differences between components, wear and tear etc.

Digital electronic computers work in two discrete states - on and off - much more like a typical light switch. This means they can be extremely precise and reliable even with imprecise components and various levels of interference. Transmitting data between computers can be completed by anything that can represent two states - high and low voltage on a cable, on and off on a light or laser, high and low amplitude on a radio wave, etc.

We label the two states 0 and 1, and use them in binary arithmetic (instead of decimal arithmetic) as the basis of everything we do with a computer.

:::info
This is a primer on how computers work, and provides a basic model for understanding them. Modern networks take advantage of more complex signalling, which can do amazing things like running many binary signals on the same wire by modifying the amplitude of each signal, or sending more than one beam of light down an optical cable by separating them with different angles of refraction.
:::

### Measuring bits
A binary number is called a *bit*, and the rate at which two computers communicate is measured in *bits-per-second* (bps).

We also have notation for large numbers of bits, which are the the same prefixes and amounts as metric units:

|        # of bits |    Name |
|------------------|---------|
|                1 |     bit |
|             1000 | Kilobit |
|          1000000 | Megabit |
|       1000000000 | Gigabit |
|    1000000000000 | Terabit |
| 1000000000000000 | Petabit |

(You are not expected to remember this table - just remember that each unit is 1000 of the previous unit in the table)

We also have a name for eight bits - we call it a *byte*. A Kilobyte is 1000 bytes - or, 8000 bits:

|        # of bits |     Name |
|------------------|----------|
|                8 |     byte |
|             8000 | Kilobyte |
|          8000000 | Megabyte |
|       8000000000 | Gigabyte |
|    8000000000000 | Terabyte |
| 8000000000000000 | Petabyte |

Data in storage tends to be measured in bytes, while data in transit tends to be measured in bits - so remember to convert between these units when comparing them.

### 1000 or 1024?
Computers work most efficiently in powers of 2, and the nearest power of 2 to 1000 is 1024. For this reason, Kila, Mega, Giga, etc always denoted 1024 rather than 1000 in computer science circles - 1 Kilobyte was 1024 bytes, for example. However, hardware manufacturers preferred to work in powers of 1000 (probably because it made their hardware look like it could handle more data). This disagreement in the industry led to confusing situations such as consumers buying hard disks that reported less space in their software than the hardware manufacturer wrote on the box.

In 1996 a decision was made that the traditional prefixes would be 1000-based (decimal) - and new prefixes would be created for 1024-based (binary) notation. These were Kibi, Mebi, Gibi, etc.. replacing the last two letters of the original prefixes with "bi" (meaning "two"):

|        # of bits |    Name |        # of bits |     Name |
|------------------|---------|------------------|----------|
|                1 |     bit |                8 |     byte |
|             1024 | Kibibit |             8192 | Kibibyte |
|          1048576 | Mebibit |          8388608 | Mebibyte |
|       1073741824 | Gibibit |       8589934592 | Gibibyte |
|    1099511627776 | Tebibit |    8796093022208 | Tebibyte |
| 1125899906842624 | Pebibit | 9007199254740992 | Pebibyte |

(Like with the previous table, don't try to remember these numbers - just remember that each unit is 1024 of the previous unit)

Lots of people still disagree with this decision, and refuse to implement the new binary prefixes.
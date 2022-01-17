---
sidebar_position: 2
---

# Peripherals

## Summary

### Objectives

*By the end of this session you should be able to:*

* Explain what a peripheral is, and how the CPU can interact with common peripherals

### Key Points

* A peripheral is a device that can be connected to a computer to provide input, or receive output (or both).
* The CPU can read and write to a peripheral just like any bit of memory.

## Breakdown

### Peripheral types

Peripherals are devices that are connected to a computer - more typically, connected to the computer's CPU. Peripherals usually manage this by presenting as a *memory address* which the processor can read or write to - however, instead of that data being stored in memory it will be taken as input/output (I/O) to the peripheral.

* **Input Devices** like keyboards will *present* bytes of data in memory based on what input it is expected to represent. As an example, pressing the "X" key will set the keyboard's memory address to the bits that represent an X, and the CPU will read that in the same way it reads an "X" stored in memory.
* **Output Devices** like displays will *read* bytes of data that the CPU writes to it's assigned memory addresses and then act on it. As an example, writing the bits that represent an "X" to a display's memory address could cause a display to present an "X" on the screen.

### The Bus

Peripherals often connect to a shared "bus" which allows it to present data for the CPU to read to and write from. If you've ever connected a USB device then you've used such a bus - USB stands for *Universal Serial Bus* and it was built to provide a unified bus for all peripherals to connect using.

Other buses may be the Memory Bus (dedicated to memory) and the storage bus (dedicated to storage devices).

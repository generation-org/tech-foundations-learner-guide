---
sidebar_position: 1
---

# Storage

## Summary

### Objectives

*By the end of this session you should be able to:*

* Demonstrate how a “bit” of data can be logically “stored”
* Explain how data can be stored after a computer is switched off
* List the different hardware that exists to store data, and what their unique features are

### Key Points

* A single bit of data can be “stored” using a latch created out of logic gates
* To persist data it must be written to a permanent storage medium
* Storage options include:
  * Optical storage
  * Magnetic Storage
  * Solid State Storage

## Breakdown

### Latches

Using an OR gate with the output wired to one of it's input legs, we can create a simple logical *latch* - that is, when power is applied to the other leg, the gate will always output true (regardless of whether we take the power away from the other leg). This is a very simple way of storing a bit of data - but it's not very good, because we can't change it once it's set!

Using two NOR logic gates (combinations of NOT and OR gates) with their outputs wired to each other's second input pins, we can create a more complex latch that allows us to "flip" from 1 to 0 by providing power to one gate or the other. This is the most basic way of storing a bit of data.

By arranging eight of these next to each other, and wiring it up to our processor, we can store and read a byte of memory!

### Persistent Storage

These simple latches only work while the computer is powered - to store data *persistently* we must look at other technologies. Options include:

* **Paper Storage** - old computers would use punched holes in cards or paper tape, which could be written with an electronic hammer and read either with a "feeler" button or an optical sensor. A 1 would be a punched hole, with a 0 being an unpunched hole.
* **Magnetic Storage** - still used where large amounts of storage are required (e.g. backups), magnetic storage works similarly to paper - but instead of reading and writing to holes, 1s and 0s can be represented by positively or negatively charging parts of a surface (either a tape or a disk).
* **Optical Storage** - nowadays only really used for selling media (or for low-volume backups), optical storage is a new spin on an old idea. Discs are stamped to either absorb or reflect light around a spinning surface, which is then read by a laser and an optical sensor. Disks that are written at home use a laser to change some dye on the disk to either reflect or absorb light instead.
* **Solid State Storage** - also known as Non-Volatile Memory, this uses a circuit much more like a volitile latch than Paper, Magnetic or Optical Storage. These rely on special transistors that don't lose their charge when disconnected from a circuit.

Different storage technologies are used in different applications, and new technologies are being developed all the time. But they all boil down to arrangements of electronic components and abstractions built on top of them. Some engineers need to know more than others about how data storage works - but as with processors, having a basic understanding and a curiosity will make you a better engineer.

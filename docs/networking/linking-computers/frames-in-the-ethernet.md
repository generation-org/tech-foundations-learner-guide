---
sidebar_position: 1
---

# Frames in the Ethernet

## Summary

### Objectives
*By the end of this session you should be able to:*
* Identify MAC Addresses on a network
* Describe the features of an Ethernet Frame

### Key Points
* MAC Addresses are globally unique, fixed IDs assigned to network devices
* Ethernet is the most common wired LAN technology
  * It sends data by encapsulating chunks of the message into frames

## Breakdown
### MAC Addresses
Every device that connects to a network has a MAC Address assigned to it during manufacture (sometimes more than one, e.g. if a device has both wired and wireless network connectivity). This is a 6-byte hexadecimal number that is usually separated into bytes by dashes or colons, e.g. `02:34:f8:b8:3b:2a`. You should be able to find the MAC Address for your device with a little searching through the settings, or by using the right commands. On Linux you can see it in the output for `ip a`.

:::info
MAC stands for Media Access Control. It has nothing to do with the Mac computer products from Apple - that's just a coincidence.
:::

### Ethernet Frames
Ethernet networks use MAC addresses to identify where packets are going, and where they're coming from (most modern networks use Ethernet). Ethernet packets are called *frames*, and they have the following parts:

* An 8-byte **Preamble** which identifies the start of the packet. It is always `aa-aa-aa-aa-aa-aa-aa-ab`
* A **Destination MAC Adress**
* A **Source MAC Address**
* The **Protocol Type**, which is usually IP (`08-00`)
* The **Data** itself, which can be up to 1500 bytes (any more and it gets split into another packet)
* The **CRC Check**, a 4-byte value calculated from the rest of the frame. If the CRC Check doesn't match the frame when a computer receives it, the frame is discarded as corrupt.

People don't generally construct Ethernet frames and you may never need to understand this in detail - however, since this is the basis of almost all computer networks it's good to have an awareness of it. Any data sent over a network is broken up into parts, usually no more than 1500 bytes in size, then placed in packets that are assembled according to this protocol.
---
sidebar_position: 0
---

# Linking and Switching

## Summary

### Objectives
*By the end of this session you should be able to:*
* Describe what a Local Area Network is
* Explain what Packet Switching is and why it is used

### Key Points
* A Local Area Network (LAN) is a network that connect computers within a limited area
* Local Area Networks take advantage of packet switching, which splits data into packets that can be sent efficiently across a network with many clients.

## Breakdown
### Local Area Networks
Most people interact with two types of network in their day-to-day lives:
* *Local Area Networks*, or LANs, consist of computers that are connected over *short* distances.
* *Wide Area Networks*, or WANs, consist of computers that are connected over *long* distances.

Wide Area Networks tend to be (but are not always!) arranged as an internetworking of Local Area Networks - an example of this is the internet. As such, Local Area Networks tend to be where the low-level *link layer* is handled - defining how things are connected together, how they talk to each other, and how they listen to each other.

Home networks are prime examples of LANs. They tend to have a small number of computers - phones, tablets, PCs, etc - connected to each other through a central device (usually called a *router*) which also connects them all out to the internet.

:::info
Mobile Phone networks are an example of a WAN which is not an internetworking of LANs - instead, a phone network needs to handle the low-level linking of devices over large areas!
:::

### Packet Switching
Networks were initially modelled on phone networks, where home and office telephones were physically linked to each other through switchboards. Someone would need to physically plug your phone into a port marked with the phone you wanted to call - if that phone wasn't in the same switchboard then they would need to connect through a *trunk* line to another switchboard. This was called *circuit switching*, and it's a very inefficient system. As such, it has fallen out of favour for most networks.

Later networks were modelled on telegrams, which copied messages from switchboard to switchboard until they reached their destination. An advantage of message switching was that the circuit was only in use while the message was being sent, which made it far more efficient - however, large messages could clog up the system and cause large delays. This *message switching* is also not used in most networks, although it is how some applications work (e.g. email works on message switching).

Modern networks work in a similar manner to message switching, except all data is split up into small *packets* which are sent through the network and reassembled at the destination. This *packet switching* allows for highly efficient transmission and is how most networks work today.
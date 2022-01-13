---
sidebar_position: 1
---

# The OSI Model

## Summary

### Objectives

*By the end of this session you should be able to:*

* Introduce the Internet Protocol Suite
* Compare and contrast with the OSI Model

### Key Points

* The internet Protocol suite, also known as the TCP/IP, is a client-server model, (e.g. when the client requests service it is provided by the server).
* The OSI is a conceptual model.

## Breakdown

### The Internet Protocol Suite

Also known as the *TCP/IP stack*, the *Internet Protocol Suite* is the set of communications protocols that underpins the Internet (and most other modern networks). It is made up of four layers, each of which builds on the previous.

* **The Link Layer** is concerned with the physical linking of computers - and providing protocols over which they can communicate. Most networks use *Ethernet*, communicating using packets called *Frames* between computers with distinct *MAC Addresses*.
* **The Internet Layer** builds on top of the Link Layer, and enables communication between computers which aren't directly linked. Most networks use IP, communicating using packets between computers with IP addresses.
* **The Transport Layer** builds on top of the Internet Layer, and consists of protocols which allow for streams of data to be transported across networks. The most common transport protocols are TCP (which is reliable and connection-oriented) and UDP (which is fast and connectionless).
* **The Application Layer** consists of applications that run on top of the transport layer to provide a service. A common application for the internet is the World Wide Web, which communicates HyperText Markup Language (HTML) documents over the HyperText Transfer Protocol (HTTP), which runs on top of TCP.

### The Open Systems Interconnection Model

The *Open Systems Interconnection model* (OSI Model) is a more complex and detailed way of understanding the protocols that make up a network. It is split up into *seven* layers instead of the TCP/IP stack's four.

* The first two layers split the TCP/IP stack's *Link Layer*:
  * **The Physical Layer** is the raw connection between computers, which communicate in *bits*.
  * **The Data Link Layer** covers the protocol that runs over the physical layer, communicating in *frames*.
* **The Network Layer** handles internetworkng between computers that aren't directly linked, communicating in *packets*. This is analogous to the TCP/IP stack's *Internet Layer*.
* **The Transport Layer**, much like the TCP/IP stack's *Transport Layer*, handles streams of data (usually in *segments* or *datagrams*).
* The final three layers split the TCP/IP stack's *Application Layer*:
  * **The Session Layer** manages *sessions* between two nodes.
  * **The Presentation Layer** manages encoding, encryption/decryption and compression.
  * **The Application Layer** provides high-level services such as APIs.

The OSI Model is often considered complex, and does not neatly match patterns in modern networks as well as the TCP/IP stack. However, it is still referred by network engineers.

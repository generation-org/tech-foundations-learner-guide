---
sidebar_position: 0
---

# TCP and UDP

## Summary

### Objectives

*By the end of this session you should be able to:*

* Compare and contrast the Transmission Control Protocol and the User Datagram Protocol.

### Key Points

* The transport layer is one of the most important layers on the internet since it is responsible for transporting the data end-to-end between applications.
* The User Datagram Protocol (UDP) is a simple protocol and it provides nonsequenced transport functionality. This type of protocol is used when reliability and security are less important than speed and size.
* The Transmission Control Protocol (TCP) is a connection-oriented protocol, which means the connection is established between both ends of the transmission. This type of protocol guarantees that it will deliver them to the remote computer accurately and in order.

## Breakdown

### The Transmission Control Protocol

Packet switching is an effective way of moving data around a network, but individual packets can become lost or corrupted; they can also arrive out of order. IP networks are inherently unreliable systems - but we can write protocols that account for that.

The Transmission Control Protocol (TCP) is a *connection-oriented* protocol that ensures connectivity between two computers and then guarantees data delivery. It does this through a three-way handshake, which confirms the two computers can actually send packets to each other:

* First, the computer initiating the connection sends a Synchronise (SYN) packet to the other computer
* The second computer responds with an Acknowledgement (ACK) packet alongside it's own SYN
* The first computer sends an ACK packet back to the second, confirming both can both send and receive

Data then flows between the two computers, with the protocol periodically checking in to ensure the right data was received in the right order (and re-sending data if necessary). This process creates more *overhead* since many more packets need to be sent betwen the two computers than if you weren't checking the data, but works well for data that must arrive complete and in the right order.

### The User Datagram Protocol

When it doesn't really matter if some packets are dropped - for example, in a video feed - the *User Datagram Protocol* (UDP) protocol is a better fit. UDP is a *connectionless* protocol, which means it doesn't attempt to initiate a connection - one computer simply starts sending data to the other, sometimes without that computer even requesting it, and doesn't check to see if that data is being received. Due to this, UDP can be *really* fast.

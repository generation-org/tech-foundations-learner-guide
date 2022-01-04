---
sidebar_position: 1
---

# Managing IP Addresses

## Summary

### Objectives

*By the end of this session you should be able to:*

* Explain how computers are assigned IP addresses
* Explain how we are tackling a shortage of IP addresses in the world today

### Key Points

* IP addresses of devices change based on which network they are in
* Organizations either statically assign IP addresses to new devices by configuring them manually..
* ..or dynamically assign them using DHCP
* IPv6 is the new Internet Protocol designed to increase the number of available IP addresses, compared to IPv4
* NAT is a method of allowing different networks to use the same IP addresses, by translating connections between them.

## Breakdown

### DHCP

On some networks, all computers are *statically* assigned IP addresses. This is a manual configuration process, and until it is completed the computer cannot participate on the network. However, this can get quite onerous for larger networks - and for networks with a lot of computers connecting and disconnecting in a short period of time.

The *Dynamic Host Configuration Protocol* (DHCP) can assign IP addresses to computers automatically, as they connect. To do this a DHCP Server must be running on the network and a DHCP Client must be running on all the devices. This is a very common system in modern networks and is probably how your computer is connected to your network right now.

### Running out of IP Addresses

Our IP addressing system is on version 4. IPv4 has 32-bit addresses, which allows for just over 4 billion addresses. This isn't enough for everyone in the world to have even a single IP address, and most people have more than one computer nowadays. We have developed two systems to combat this.

#### IPv6

IPv6 is a replacement for IPv4, and it has 128-bit addresses. This allows for 340 trillion trillion trillion (340 undecillion) addresses - far more than we're likely to need in the near term.

IPv6 addresses are written as 8 *hextets*, separated by colons. They are also written in hexadecimal:

```
8000:0000:0000:0000:0123:4567:89AB:CDEF
```

An IPv6 address can have any zero-value hextets removed in an address, but only in one place in any address. This is simply replaced by a double colon:

```
8000::0123:4567:89AB:CDEF
```

Unfortunately IPv6 is not used by the majority of today's internet, so it cannot be relied on to handle address exhaustion (yet!).

#### NAT

Network Address Translation allows for many devices to be presented to another network (e.g. the internet) using only a single IP address. To do this, devices on a network are all given *private* IP addresses - then, a NAT device (usually a router) is given both a *private* and a *public* IP address. Packets addressed to the public internet are then *translated* by the NAT device by replacing the private source IP with the NAT device's public IP - the NAT device then keeps a record of sending that packet out. If there are any responses to that packet, the NAT device performs another translation before sending the packet on to the originating device.

Most home and office networks use NAT to share a single public IP address between all the devices on the local network.

:::info
If you are behind a NAT device, your local IP address (the IP address in your computer's config) won't match the IP address you present to on the internet.
:::

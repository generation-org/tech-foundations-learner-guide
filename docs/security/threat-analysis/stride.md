---
sidebar_position: 1
---

# STRIDE

## Summary

### Objectives

*By the end of this session you should be able to:*

* Identify common Information Security threats

### Key Points

* There are six common threats to Information Security:
  * Spoofing
  * Tampering
  * Repudiation
  * Information Disclosure
  * Denial of Service
  * Elevation of Privileges
* This can be remembered using the mnemonic “STRIDE”

## Breakdown

### STRIDE

STRIDE is a mnemonic - a way of rememebering a sequence. Each letter represents a different type of attack:

#### Spoofing

Spoofing is an attempt to provide falsified data - often falsified identification. An example might be pretending to be someone else on the phone, or changing a MAC address on a computer to appear like it's someone else's.

#### Tampering

Tampering is an attempt to manipulate data in a way that give the attacker some sort of advantage. An example might be to pull a fire alarm to get everyone to exit a building. Tampering with food is a known risk for restaurants in highly competitive markets.

#### Repudiation

Repudiation is an attempt to erase evidence that an attack has happened. Commonly an attacker would seek to erase CCTV recordings, or system logs, in an attempt to "disappear". Effective repudiation may lead to the target never knowing they've been attacked!

#### Information Disclosure

Information Disclosure is an attempt to expose - or *exfiltrate* - private data. A simple example would be to steal the guest book at a hotel, giving access to a list of everyone that stayed there. More commonly attackers will focus on exfiltrating personal information that can be used in further attacks - e.g. spoofing using credit card information.

Another common Information Disclosure attack is to go through the bins of a target to find information they haven't securely destroyed.

#### Denial of Service

Denial of Service is an attempt to stop authorised users from being able to access a service. A common way of achieving this is to command lots of compromised computers to connect to a service at once; sometimes this is done accidentally by customers when connecting to a service that's unprepared! Offline examples may be dumping rubble in the street to deny access.

#### Elevation of Privilege

Elevation of Privilege is an attempt to gain additional access over and above what they should normally have. A common way of doing this is to attack a vulnerable service which is running with more privileges than it really needs - if the attacker can get the service to run code *arbitrarily* then they will be able to access almost anything the service can.

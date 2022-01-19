---
sidebar_position: 0
---

# Security Principles

## Summary

### Objectives

*By the end of this session you should be able to:*

* Explain basic information security principles.

### Key Points

* Basic security principles include:
  * Least privilege - no user or process should have more access than necessary to perform their function.
  * Privilege separation - processes should be broken up so that privileges can be assigned in a more targeted fashion.
  * Open design - mechanisms for securing systems should not depend on an attacker’s ignorance.
  * Fail-secure - when in doubt, systems should default to denying access.
  * Defense in Depth - security systems should be layered in such a way that they fortify each other.

## Breakdown

### Principles

Before applying security interventions, it is important to understand the *principles* that underpin their use. These are five popular, foundational principles used in modern information security.

#### Least Privilege

Every privilige a user or process has is a potential vulnerability. As such, good engineers always restrict permissions to only what is necessary for them to perform their function. This means that e.g. if a process is exploited it can only damage a subset of the infrastructure. This idea is also applied in real-life settings - e.g. office key cards only allow access to rooms an employee needs to access, which cuts down on potential for them (or others, using their key cards) to sabotage or steal.

Be wary of temptations or requests to "just give access to everything", or to a laundry list of things - this is often done in haste (to get something working) and sits as a security vulnerability waiting to be exploited.

:::info
This approach is sometimes known as "limiting the blast radius", referring to the damage that could be caused by the user or process if it tried to destroy everything.
:::

#### Privilege separation

Related to the principle of least privilege, this principle encourages engineers to break up their processes into distinct units which can be given discrete privileges. As an example, a mail server could be broken up into a process to receive the mail, a process to check for viruses, and a process for storing the mail - all passing a message along to each other down the way. If a message manages to take advantage of a vulnerability in the virus scanner, this would limit the damage to things the virus scanner has access to - and not the things the mail storage process has access to.

#### Open Design

Like a key hid underneath a plant pot, it is tempting for engineers to achieve *security through obsecurity* - that is, something which is only secure because a potential attacker is ignorant of it. An example might be to provide confidential information on an unpublished web address, hoping that the link will only be shared to authorised users.

A way of ensuring that engineers don't take these shortcuts is to design and implement your infrastructure in the open. This also has the added benefit of good actors looking at your work to identify vulnerabilities you might not have, as part of their efforts to learn from your design and implementation.

#### Fail-secure

A door that unlocks when it is broken can be considered *fail-safe* because it will e.g. not trap anyone in a room, but it is not *fail-secure* because it will allow unauthorised entry. These two terms are often mixed up - even in the tech industry - but *fail-secure* systems will deny access if something goes wrong, to stop attackers from taking advantage of such a vulnerability.

#### Defense in Depth

All security interventions have vulnerabilities, but by carefully layering tools and processes in ways that reinforce each other you can both reduce and reinforce your attack surface. A simple example of this may be to put a second lock on a door, meaning an attacker needs to pick two locks instead of one!

A common security anti-pattern is to apply multiple interventions that cancel each other out, instead of reinforcing each other. As an example, allowing someone to log in with a password OR a fingerprint doubles the attack surface instead of reinforcing it. This may be desirable for other reasons (e.g. usability) but it can also be stumbled upon accidentally by thoughtlessly applying security tools.

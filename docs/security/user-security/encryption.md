---
sidebar_position: 1
---

# Encryption

## Summary

### Objectives
*By the end of this session you should be able to:*
* Explain what encryption is, and explore the differences between symmetric and asymmetric encryption
* Create a hand-computed, reversible encryption routine

### Key Points
* Encryption is the process of encoding information to make it unintelligible to anyone that doesn’t know how to decrypt it
* Symmetric Encryption uses a single, shared secret that can be used to encrypt and decrypt information
* Asymmetric Encryption uses separate encryption and decryption keys which cannot be used interchangeably
* All encryption processes are algorithms, and anyone can make their own encryption algorithm

## Breakdown
### What is encryption?
Encryption is simply the process of encoding information, following a series of steps (an algorithm, known as a *cipher*) - and as such it can be written out as code. Simple ciphers must be kept secret, because anyone that knows the cipher can decode anything that's been encrypted with it. Most modern ciphers are publicly available, and instead incorporate *keys* which are kept secret instead.

To encrypt data you need to know what cipher to use, and then create a key that the cipher uses to encrypt the data. You will need the key and the cipher to decrypt the data again. If you want to share data with someone else you will need to give them the key and tell them which cipher you're using.

:::info
A famous early encryption cipher is the *Caesar cipher*, so called because Roman Emperor Julius Caesar apparently used it to encrypt his messages. A number would be agreed with the recipient, which acted as a key. The cipher would then substitute each letter by the one that many letters down the alphabet. This is also known as a ROT (ROTate) cipher.
:::

### Asymmetric encryption
Under *Symmetric* Encryption algorithms, a key must be shared between anyone that needs to encrypt or decrypt data. This means that anyone with the key can decrypt _any_ message - even messages not intended for them - and can also encrypt any message, meaning you don't really know who the message is from.

*Asymmetric* Encryption algorithms work on a key *pair* - usually a public and private key. Everyone that needs to share data will keep their own personal, private key - and share the public key with everyone else. This has two advantages:
* Anyone with your public key can encrypt a message with it, but only you can decrypt the data.
* You can also *sign* a message with your private key, which people can verify using your public key.

As such, a user can *encrypt* a message with your public key (meaning only you can read it) and *sign* it with their private key (meaning you know it's from them). This system is used extensively on the modern internet, and is the basis for secure websites.
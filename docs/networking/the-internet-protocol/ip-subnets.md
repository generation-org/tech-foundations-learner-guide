---
sidebar_position: 2
---

# IP Subnets

## Summary

### Objectives

*By the end of this session you should be able to:*

* Explain how an IP address is constructed
* Explain how and why IP networks are divided up into subnets

### Key Points

* IP addresses have two parts:
  * Network (prefix) bits: The first bits of the IP address that is assigned to an org, used to route packets to the network from outside.
  * Host bits: The last bits, used to route packets internally.
* Subnets allow organizations to split an IP block into smaller networks

## Breakdown

### Subnetworks

IP Networks have access to just over 4 billion IP addresses, but managing that from a single router would be almost impossible. The address space is instead broken up into subnetworks, which are portioned out to different organisations to manage. Those subnetworks - *subnets* - are further divided, as many times as makes sense for any individual network.

Computers can only directly send packets to other computers on the same subnet - packets outside of their subnet must be sent to their default route (usually a router). For this reason, subnets are also a good way to monitor and control traffic moving across a wider network.

:::info
On the public Internet IP addresses are broken up into subnets and managed by different entities, mostly regional Internet registries. These are then assigned to local Internet Service Providers (ISPs) to provision to customers.
:::

### Subnet masks

IP Addresses are broken up into two parts:

* Prefix bits - the first part of an IP address, which is fixed for all devices in a subnet.
* Host bits - the second part of an IP address, which is different for all devices in a subnet.

The prefix bits, plus all-zero post bits, make up the *network name* - the name of the subnet. To know how many bits make up the prefix, two notation schemes can be used:

* `/<prefix>` can be added to an IP address, with the number denoting the prefix bits (e.g. `192.168.0.0/24` is a 24-bit prefix)
* A *subnet mask* can be written, which is a 32-bit number that is 1 for the prefix and 0 for the host bits (e.g. `255.255.255.0` is also a 24-bit prefix)

Because the four octets of an IP address cannot be mathematically connected, it's usually easier to work in binary when looking at an IP Address. This is because a subnet mask can fall part-way across an octet, which is not intuitive to read - look at the progression of the binary mask and the subnet mask in the following table:

| IP Addresses | Host bits | Prefix |     Subnet Mask |                           Binary mask |
|--------------|-----------|--------|-----------------|---------------------------------------|
|            1 |        0  |    /32 | 255.255.255.255 | `11111111 11111111 11111111 11111111` |
|            2 |        1  |    /31 | 255.255.255.254 | `11111111 11111111 11111111 11111110` |
|            4 |        2  |    /30 | 255.255.255.252 | `11111111 11111111 11111111 11111100` |
|            8 |        3  |    /29 | 255.255.255.248 | `11111111 11111111 11111111 11111000` |
|           16 |        4  |    /28 | 255.255.255.240 | `11111111 11111111 11111111 11110000` |
|           32 |        5  |    /27 | 255.255.255.224 | `11111111 11111111 11111111 11100000` |
|           64 |        6  |    /26 | 255.255.255.192 | `11111111 11111111 11111111 11000000` |
|          128 |        7  |    /25 | 255.255.255.128 | `11111111 11111111 11111111 10000000` |
|          256 |        8  |    /24 | 255.255.255.0   | `11111111 11111111 11111111 00000000` |
|          512 |        9  |    /23 | 255.255.254.0   | `11111111 11111111 11111110 00000000` |
|         1024 |        10 |    /22 | 255.255.252.0   | `11111111 11111111 11111100 00000000` |

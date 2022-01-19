---
sidebar_position: 1
---

# Computer Security

## Summary

### Objectives

*By the end of this session you should be able to:*

* Explain how a firewall protects computers.
* Describe other computer security interventions.

### Key Points

* A firewall protects computers by limiting what other computers can connect to it over a network, and limiting the ports that can be connected to.
* Other computer security interventions include:
  * Content Delivery Networks
  * Virtual Private Networks
  * Monitoring tools
  * Intrusion Detection/Prevention Systems
  * Security Information and Event Management
  * Antivirus software

## Breakdown

### Firewalls

A firewall is a process that intercepts network connections as they enter or leave a computer or network. These firewalls can then inspect the traffic on the connection, selectively allowing or denying based on a set of rules. Two major types of firewalls exist:

* **Packet Filter** firewalls are very simple - they have a list of allowed IP addresses and ports, and they then check every IP packet to see if they're on that list. If so then the packet is allowed - otherwise the packet is blocked.
* **Application firewalls** are a more recent innovation that can inspect the *contents* of an IP packet (as well as the source/destination addresses and ports). This allows the firewall to be more targeted - for example, only allowing HTTP connections regardless of the port.

These are sometimes known as "Layer 3" and "Layer 7" firewalls respectively, referring to the layers of the OSI Model.

:::info
Other types of firewalls exist - for example, Layer 2 firewalls - also known as *transparent* firewalls - intercept traffic at the frame level without disturbing the rest of the network stack.
:::

### Other network interventions

#### Content Delivery Networks

Firewalls are very effective at blocking malicious traffic, but can still be overwhelmed by large amounts of traffic, such as those used by a denial of service attack.

Content Delivery Networks (CDNs) are large providers with points of presence all over the world. These organisations specialise in accelerating connections to their customers' infrastructure using techniques such as caching - but they also provide an important protection from denial of service attacks by simply being too large for any one attacker to overwhelm.

#### Virtual Private Networks

Virtual Private Networks (VPNs) allow computers on a network (usually the internet) to create encrypted tunnels betwen them, creating a virtual network on top of whatever underlies it. This is a popular way of including remote workers in an internal network, forcing their traffic to go through the corporate firewall, e.t.c.

VPNs have also become a popular consumer tool for bypassing geo-restricted content, as well as being generally sold as a "security" intervention. It is worth noting that a consumer VPN doesn't necessarily provide any additional security, since traffic still needs to enter/exit the VPN endpoint to connect to the rest of the internet. However, they can be useful in cases where you don't trust a network you're connected to - e.g. public Wi-Fi.

### Monitoring tools

An important part of securing infrastructure is to know what's going on inside that infrastructure - to do this, engineers deploy monitoring systems to aggregate metrics (like CPU%, bandwidth utilisation, etc) and log files (from servers and services) in one place. These can then be processed to help identify security incidents.

#### Intrusion Detection/Prevention Systems

An Intrusion Detection System (IDS) specialises in identifying potential intruders, through both *policies* (which legitimate users are expected to uphold) and *patterns* (based on other attacks). IDS systems can be host-based (monitoring systems) or network-based (monitoring network traffic).

A system that responds to events (e.g. by shutting down access) is called an Intrusion Prevention System (IPS).

#### Security Information and Event Management

Although monitoring tools can be configured to provide security insights, purpose-built tools now exist to aggregate information. This can then be viewed as a single "event", with all of the network traffic and host-based logs pieced together into a clear picture of an attempted attack (or an attack in progress).

### Antivirus software

Antivirus software was originally built to detect viruses using *signatures* which they could use to match against files on the system. Over time these products have grown to handle all sorts of malware, sometimes also embedding firewalls and other security tools alongside them.

Antivirus software has gotten a bad name for causing computers to slow down, and for adding annoying pop-ups to the user experience. However, many organisations need antivirus software for compliance reasons - and it _is_ helpful in some cases. For home users both macOS and Windows now come with antivirus software built-in. However, Antivirus software must be deployed as part of a defense-in-depth strategy.

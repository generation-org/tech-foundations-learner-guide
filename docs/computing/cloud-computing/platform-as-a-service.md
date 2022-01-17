---
sidebar_position: 1
---

# Platform as a Service

## Summary

### Objectives

*By the end of this session you should be able to:*

* Explain what Platform as a Service is, and how it abstracts away physical/virtual infrastructure from the user.
* Discuss cloud storage options, compare and contrast them.
* Give an overview of common PaaS services.
* Explain "Functions as a Service".

### Key Points

* PaaS provides a complete, flexible and cost-effective cloud platform for developing, running and managing applications.
* Everything that is provided by IaaS, is also provided by PaaS.
* There are some specific purposes that a PaaS offer can be built to provide. The Purpose-built PaaS types: AIPaaS (PaaS for Artificial Intelligence), iPaaS (integration platform as a service), cPaaS (communications platform as a service), mPaaS (mobile platform as a service).
* There are three types of cloud storage: Object Storage, Block Storage, File Storage.
* FaaS allows you to write isolated functions. They are expected to start within milliseconds and process individual requests and then the process ends.

## Breakdown

### PaaS

Traditionally, developers would need to either deploy their software to harware themselves - or else hire someone else to do this. Platform as a Service providers allow developers to deploy their software without having to worry about hardware, operating systems, networking and other components that can be standardised.

A modern PaaS service usually provides:

* **Development Tools**, which are tailored for their service.
* **Middleware**, which developers can include in their software so it works with the PaaS service.
* **Database Management**, which gives developers a database to read from and write to without having to manage.

### Purpose-built PaaS

As the PaaS market has grown, more niche providers have sprung up offering services such as:

* **AIPaaS** - Artificial Intelligence Platforms as a Service, allowing developers to hook into AI without having to manage a complex Artificial Intelligence model or their unique underlying hardware requirements.
* **iPaaS** - integration Platforms as a Service are tailor-made for integrating existing applications.
* **cPaas** - communications Platforms as a Service offer bespoke communications platforms which can be integrated into existing software.

### Cloud Storage

Storage is a popular use of Cloud Services, and can be broken down into two types:

* **Object Storage** is great for storing unstructured data *objects*. This sort of storage can be really fast and easy to work with, but doesn't work well with large files that have constant small changes made to them. Another advantage of object storage is that it can be easily and quickly *replicated*.
* **Block Storage** acts much more like a traditional storage device, with bits of data organised and written as blocks. This can be slower than handling a whole object at a time, but means that a small change to a large file only requires writing one or two blocks instead of the whole file.

### FaaS

*Functions as a Service* are an evolution of PaaS which allow single functions to be run on the cloud (instead of whole pieces of software). These are generally billed in very small increments, as low as 1 millisecond. This can be useful for running a small piece of code regularly (like a scheduled task) without needing to provision a computer to run it on.

Whole services can be created on FaaS platforms, allowing for highly efficient billing (pay as you use, down to the millisecond). The group of technologies that enable this is collectively known as *Serverless Computing* - not because there are no servers, but because servers aren't considered when designing them.

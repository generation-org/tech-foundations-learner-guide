---
sidebar_position: 4
---

# Application Programming Interfaces

## Summary

### Objectives

*By the end of this session you should be able to:*

* Explain what an API is.
* Demonstrate calling an API in the terminal, then demonstrate working with basic APIs in a program.

### Key Points

* An API - Application Programming Interface - is a connection between computer programs.
* APIs are commonly used to break up services into components which can talk to each other.
* Web APIs are a useful way to programmatically get data from web services.

## Breakdown

### APIs

Application Programming Interfaces allow processes to ask each other questions - *requests* - and receive answers - *responses*. APIs are a powerful tool on the modern internet, allowing new services to be built on top of existing ones. A common example is price comparison websites, which leverage the APIs of online shops to compare prices on the same product.

:::info
While we primarily explore Web APIs in this course, not all APIs are Web APIs. APIs can be created between applications running on the same computer - as an example, a time daemon could provide an API for processes to request the time.
:::

### Web APIs

There are two popular types of APIs on the modern internet:

* **Simple Object Access Protocol** (SOAP) is a *protocol* that strictly defines APIs, and uses XML (a subset of HTML) to share data.
* **Representational State Transfer** (ReST) is a set of principles for building a web API, commonly using JSON to share data.

SOAP is popular in enterprise applications, but most web APIs now use REST (also known as RESTful APIs).

### JavaScript Object Notation

JSON is a way of *serialising* data into a string in a standardised way, such that it can be shared between applications. Although it's got JavaScript in the name it's suitable for use in any programming languages, and most have a built-in library for processing JSON strings. It looks like this:

```json
{
  "firstName": "John",
  "lastName": "Smith",
  "isAlive": true,
  "age": 27,
  "address": {
    "streetAddress": "21 2nd Street",
    "city": "New York",
    "state": "NY",
    "postalCode": "10021-3100"
  },
  "phoneNumbers": [
    {
      "type": "home",
      "number": "212 555-1234"
    },
    {
      "type": "office",
      "number": "646 555-4567"
    }
  ],
  "children": [],
  "spouse": null
}
```

---
sidebar_position: 0
---

# HyperText

## Summary

### Objectives

*By the end of this session you should be able to:*

* Demonstrate how HTTP clients and servers interact with each other
* Explain the relationship between HTTP and:
  * TCP
  * TLS (HTTPS)
  * HTML
  * The World Wide Web

### Key Points

* The Web is an interconnected system of public web pages accessible through the Internet.
* HTTP is a protocol for fetching resources such as HTML documents. It is the foundation of any data exchange on the Web.
* The difference between the HTTP and the HTTPs, is that the second uses the TCS to encrypt the response sent by the server.

## Breakdown

### The World Wide Web

The *World Wide Web*, *Web*, or *WWW*, is an interconnected system of public web pages accessible on the internet. It is commonly mistaken for the internet itself; however, it is only one of many applications that the internet supports (others include email, streaming TV, etc). It is by far the dominant internet application, and many other applications now use the world wide web as a tool for accessing them (e.g. Webmail). It is accessed using a web client, or *browser*.

The key innovation of the web was *HyperText* - the idea that a word in a document could be clicked, leading to another word. These *HyperLinks* created a web of information much more powerful and useful than any single document. Web pages are made with HyperText Markup Language (HTML), which tells the browser what should appear on a web page and where it should appear (as well as those all-important links). Modern web pages additionally use other technologies (like CSS and JavaScript). HTML looks like this:

```html
<html>
    <head>
        <title>Hello World!</title>
    </head>
    <body>
        <h1>Hello World!</h1>
        <p>This is a webpage. It uses tags to describe (mark up) the structure of content, and we can make links <a href="http://another.webpage/">like this</a>
    </body>
</html>
```

HTML is communicated (served) to web clients from web servers using a protocol called *HyperText Transfer Protocol* (HTTP). A web client makes a HTTP request to a Web Server, and will receive a HTTP response which contains the HTML for it to display to the user.

### Transport Layer Security

Protocols can be *encapsulated* inside other protocols, such as how HTTP is encapsulated within TCP. *Transport Layer Security* (TLS) is a cryptographic, asymetric protocol used for securing connections between two computers. A web server which supports TLS will host a private certificate, and then initiate a handshake process with any web clients to negotiate a secure connection.

When we encapsulate a HTTP connection within TLS we call the resulting mash-up *"HyperText Transport Protocol Secure"* (HTTPS).

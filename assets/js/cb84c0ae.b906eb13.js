"use strict";(self.webpackChunktech_foundations=self.webpackChunktech_foundations||[]).push([[445],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,g=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},79125:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],s={sidebar_position:4},l="Application Programming Interfaces",p={unversionedId:"programming/application-programming-interfaces",id:"programming/application-programming-interfaces",isDocsHomePage:!1,title:"Application Programming Interfaces",description:"Summary",source:"@site/docs/programming/application-programming-interfaces.md",sourceDirName:"programming",slug:"/programming/application-programming-interfaces",permalink:"/tech-foundations-learner-guide/docs/programming/application-programming-interfaces",editUrl:"https://github.com/generation-org/tech-foundations/edit/main/docs/programming/application-programming-interfaces.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"programmingSidebar",previous:{title:"Algorithms",permalink:"/tech-foundations-learner-guide/docs/programming/algorithms"}},c=[{value:"Summary",id:"summary",children:[{value:"Objectives",id:"objectives",children:[],level:3},{value:"Key Points",id:"key-points",children:[],level:3}],level:2},{value:"Breakdown",id:"breakdown",children:[{value:"APIs",id:"apis",children:[],level:3},{value:"Web APIs",id:"web-apis",children:[],level:3},{value:"JavaScript Object Notation",id:"javascript-object-notation",children:[],level:3}],level:2}],m={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"application-programming-interfaces"},"Application Programming Interfaces"),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("h3",{id:"objectives"},"Objectives"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"By the end of this session you should be able to:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Explain what an API is."),(0,i.kt)("li",{parentName:"ul"},"Demonstrate calling an API in the terminal, then demonstrate working with basic APIs in a program.")),(0,i.kt)("h3",{id:"key-points"},"Key Points"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"An API - Application Programming Interface - is a connection between computer programs."),(0,i.kt)("li",{parentName:"ul"},"APIs are commonly used to break up services into components which can talk to each other."),(0,i.kt)("li",{parentName:"ul"},"Web APIs are a useful way to programmatically get data from web services.")),(0,i.kt)("h2",{id:"breakdown"},"Breakdown"),(0,i.kt)("h3",{id:"apis"},"APIs"),(0,i.kt)("p",null,"Application Programming Interfaces allow processes to ask each other questions - ",(0,i.kt)("em",{parentName:"p"},"requests")," - and receive answers - ",(0,i.kt)("em",{parentName:"p"},"responses"),". APIs are a powerful tool on the modern internet, allowing new services to be built on top of existing ones. A common example is price comparison websites, which leverage the APIs of online shops to compare prices on the same product."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"While we primarily explore Web APIs in this course, not all APIs are Web APIs. APIs can be created between applications running on the same computer - as an example, a time daemon could provide an API for processes to request the time."))),(0,i.kt)("h3",{id:"web-apis"},"Web APIs"),(0,i.kt)("p",null,"There are two popular types of APIs on the modern internet:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Simple Object Access Protocol")," (SOAP) is a ",(0,i.kt)("em",{parentName:"li"},"protocol")," that strictly defines APIs, and uses XML (a subset of HTML) to share data."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Representational State Transfer")," (ReST) is a set of principles for building a web API, commonly using JSON to share data.")),(0,i.kt)("p",null,"SOAP is popular in enterprise applications, but most web APIs now use REST (also known as RESTful APIs)."),(0,i.kt)("h3",{id:"javascript-object-notation"},"JavaScript Object Notation"),(0,i.kt)("p",null,"JSON is a way of ",(0,i.kt)("em",{parentName:"p"},"serialising")," data into a string in a standardised way, such that it can be shared between applications. Although it's got JavaScript in the name it's suitable for use in any programming languages, and most have a built-in library for processing JSON strings. It looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "firstName": "John",\n  "lastName": "Smith",\n  "isAlive": true,\n  "age": 27,\n  "address": {\n    "streetAddress": "21 2nd Street",\n    "city": "New York",\n    "state": "NY",\n    "postalCode": "10021-3100"\n  },\n  "phoneNumbers": [\n    {\n      "type": "home",\n      "number": "212 555-1234"\n    },\n    {\n      "type": "office",\n      "number": "646 555-4567"\n    }\n  ],\n  "children": [],\n  "spouse": null\n}\n')))}u.isMDXComponent=!0}}]);
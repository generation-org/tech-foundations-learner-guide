"use strict";(self.webpackChunktech_foundations=self.webpackChunktech_foundations||[]).push([[2031],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,h=p["".concat(s,".").concat(d)]||p[d]||c[d]||a;return n?r.createElement(h,i(i({ref:t},m),{},{components:n})):r.createElement(h,i({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},66727:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return m},default:function(){return p}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={sidebar_position:3},s="Algorithms",u={unversionedId:"programming/algorithms",id:"programming/algorithms",isDocsHomePage:!1,title:"Algorithms",description:"Summary",source:"@site/docs/programming/algorithms.md",sourceDirName:"programming",slug:"/programming/algorithms",permalink:"/tech-foundations-learner-guide/docs/programming/algorithms",editUrl:"https://github.com/generation-org/tech-foundations/edit/main/docs/programming/algorithms.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"programmingSidebar",previous:{title:"Coding flow",permalink:"/tech-foundations-learner-guide/docs/programming/control-flow/coding-flow"},next:{title:"Application Programming Interfaces",permalink:"/tech-foundations-learner-guide/docs/programming/application-programming-interfaces"}},m=[{value:"Summary",id:"summary",children:[{value:"Objectives",id:"objectives",children:[],level:3},{value:"Key Points",id:"key-points",children:[],level:3}],level:2},{value:"Breakdown",id:"breakdown",children:[{value:"Order of Operations",id:"order-of-operations",children:[],level:3},{value:"The Algorithm",id:"the-algorithm",children:[],level:3},{value:"Functions",id:"functions",children:[],level:3},{value:"Built-in functions and Libraries",id:"built-in-functions-and-libraries",children:[],level:3}],level:2}],c={toc:m};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"algorithms"},"Algorithms"),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("h3",{id:"objectives"},"Objectives"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"By the end of this session you should be able to:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Demonstrate performing basic arithmetic"),(0,a.kt)("li",{parentName:"ul"},"Define an algorithm"),(0,a.kt)("li",{parentName:"ul"},"Write and call functions in a program")),(0,a.kt)("h3",{id:"key-points"},"Key Points"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In most programming languages, arithmetic follows the BODMAS order of execution."),(0,a.kt)("li",{parentName:"ul"},"An algorithm is a set of steps used to complete a specific task."),(0,a.kt)("li",{parentName:"ul"},"Functions are a set of instructions bundled together to achieve a specific outcome.")),(0,a.kt)("h2",{id:"breakdown"},"Breakdown"),(0,a.kt)("h3",{id:"order-of-operations"},"Order of Operations"),(0,a.kt)("p",null,"When calculating a mathematical equation you might expect to just move through each part in turn, calculating it and then moving on (usually from left to right) - however, this is not how computers (or mathematicians!) calculate. Instead, there is an ",(0,a.kt)("em",{parentName:"p"},"order of operations")," - a set of rules that tell the computer what should be calculated first. That order is commonly remembered as ",(0,a.kt)("strong",{parentName:"p"},"BODMAS"),", an acronym which stands for:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"B"),"rackets"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"O"),"rder of powers or roots"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"D"),"ivision and ",(0,a.kt)("strong",{parentName:"li"},"M"),"ultiplication"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"A"),"ddition and ",(0,a.kt)("strong",{parentName:"li"},"S"),"ubtraction")),(0,a.kt)("p",null,"If you don't bear this in mind when writing calculations you may be caught out - for example, these two equations do not equal the same thing:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"3 + 5 * 7 = 38\n(3 + 5) * 7 = 56\n")),(0,a.kt)("h3",{id:"the-algorithm"},"The Algorithm"),(0,a.kt)("p",null,"The word ",(0,a.kt)("em",{parentName:"p"},"algorithm")," sounds like something complex and magical - indeed, many algorithms can be very complex (and seem like magic until you understand them). However, an algorithm is simply a set of instructions that describe how to get something done. An example of an algorithm might be a food recipe, or a guide to building some furniture. All computer programs are at least one algorithm, and we can expect them to have the following features:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Zero or more inputs")," - an algorithm often has an input, but doesn't have to. An example might be a random number generator."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"A procedure")," - a process that must be followed."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"One or more outputs")," - the end of the process must produce at least one output.")),(0,a.kt)("p",null,"In programming we like to separate out our algorithms so that we can easily understand them and build them into more complex systems."),(0,a.kt)("h3",{id:"functions"},"Functions"),(0,a.kt)("p",null,"Functions are a great way to capture algorithms within a piece of code. A function is declared in a program - but not run until it is called. A function might be called many times, each with a different input. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def more_than_ten(number):\n    if number > 10:\n        response = True\n    else:\n        response = False\n    return response\n")),(0,a.kt)("p",null,"This function has a single input (",(0,a.kt)("inlineCode",{parentName:"p"},"number"),"), and when called will test that input to see if it's more than ten. It then returns an output (",(0,a.kt)("inlineCode",{parentName:"p"},"response"),"), which is a boolean. If we call this function by typing ",(0,a.kt)("inlineCode",{parentName:"p"},"more_than_ten(7)"),", the function will respond ",(0,a.kt)("inlineCode",{parentName:"p"},"False"),"; if we call ",(0,a.kt)("inlineCode",{parentName:"p"},"more_than_ten(11)")," it will respond ",(0,a.kt)("inlineCode",{parentName:"p"},"True"),"."),(0,a.kt)("h3",{id:"built-in-functions-and-libraries"},"Built-in functions and Libraries"),(0,a.kt)("p",null,"Programming languages have many ",(0,a.kt)("em",{parentName:"p"},"built-in functions"),", which can be found in their documentation. Built-in functions come with the programming language and allow programmers to complete tasks they would otherwise have to write a function for themselves."),(0,a.kt)("p",null,"In addition to this, programmers publish ",(0,a.kt)("strong",{parentName:"p"},"modules")," of functions in *",(0,a.kt)("em",{parentName:"p"},"libraries")," which can be loaded into your code. This can be done within projects (to separate out code for ease of maintenance) or between projects (to share the burden of developing and maintaining generic algorithms). Many programming languages have repositories of libraries (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"PyPi")," for Python, ",(0,a.kt)("inlineCode",{parentName:"p"},"npmjs")," for JavaScript) which you can use in your code to quickly get a project working."),(0,a.kt)("p",null,"::info\nLibraries contain modules, which themselves contain functions. However, since many libraries have only one module, these terms are often used interchangeably.\n:::"))}p.isMDXComponent=!0}}]);
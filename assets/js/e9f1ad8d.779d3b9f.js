"use strict";(self.webpackChunktech_foundations=self.webpackChunktech_foundations||[]).push([[2840],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8964:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],s={sidebar_position:2},l="Servers",u={unversionedId:"linux/introduction-to-linux/servers",id:"linux/introduction-to-linux/servers",isDocsHomePage:!1,title:"Servers",description:"Summary",source:"@site/docs/linux/introduction-to-linux/servers.md",sourceDirName:"linux/introduction-to-linux",slug:"/linux/introduction-to-linux/servers",permalink:"/tech-foundations-learner-guide/docs/linux/introduction-to-linux/servers",editUrl:"https://github.com/generation-org/tech-foundations/edit/main/docs/linux/introduction-to-linux/servers.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"linuxSidebar",previous:{title:"Open Source Software",permalink:"/tech-foundations-learner-guide/docs/linux/introduction-to-linux/open-source-software"},next:{title:"Commanding Linux",permalink:"/tech-foundations-learner-guide/docs/linux/commanding-linux"}},c=[{value:"Summary",id:"summary",children:[{value:"Objectives",id:"objectives",children:[],level:3},{value:"Key Points",id:"key-points",children:[],level:3}],level:2},{value:"Breakdown",id:"breakdown",children:[{value:"WordPress",id:"wordpress",children:[],level:3},{value:"Servers",id:"servers-1",children:[],level:3}],level:2}],p={toc:c};function d(e){var t=e.components,s=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"servers"},"Servers"),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("h3",{id:"objectives"},"Objectives"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"By the end of this session you should be able to:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Explain what a \u201cserver\u201d is, and how it contrasts with other types of computer"),(0,i.kt)("li",{parentName:"ul"},"Explore common Linux server software")),(0,i.kt)("h3",{id:"key-points"},"Key Points"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A server is a computer that runs server software; in comparison to a desktop, they generally have no mouse, keyboard or monitor and are managed remotely"),(0,i.kt)("li",{parentName:"ul"},"Common Linux server software includes Apache httpd, MySQL and WordPress")),(0,i.kt)("h2",{id:"breakdown"},"Breakdown"),(0,i.kt)("h3",{id:"wordpress"},"WordPress"),(0,i.kt)("p",null,'WordPress is a very popular piece of software used for hosting websites. It is built on a "stack" of other pieces of software called the LAMP stack. LAMP is an acronym that stands for:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Linux - the Open Source Operating System."),(0,i.kt)("li",{parentName:"ul"},"Apache httpd - an Open Source Web Server."),(0,i.kt)("li",{parentName:"ul"},"MySQL - an Open Source Database Server."),(0,i.kt)("li",{parentName:"ul"},"PHP - a Programming Language.")),(0,i.kt)("p",null,"Installing, configuring and maintaining WordPress is a good way to develop and practice System Adminstration skills."),(0,i.kt)("h3",{id:"servers-1"},"Servers"),(0,i.kt)("p",null,'"Server" refers to two distinct things:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A piece of software that provides a service - e.g. a Web Server, which provides a website service."),(0,i.kt)("li",{parentName:"ul"},"A computer specifically designed for running server software.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"A picture of a 1U rackmount server with the top removed, exposing the internal components",src:r(82091).Z}),"\n",(0,i.kt)("em",{parentName:"p"},'This image by "Rodzilla" at English Wikipedia is licensed under CC-BY-2.5')),(0,i.kt)("p",null,"Consider this image of a typical computer designed to run a web server. Notable features include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'A "slab-like" design, which allows it to be mounted with other servers in a rack.'),(0,i.kt)("li",{parentName:"ul"},"A monitor connection at the front of the computer, which allows a monitor to be connected for troubleshooting (in normal operation, servers do not usually have monitors attached)."),(0,i.kt)("li",{parentName:"ul"},"Loud fans and large holes which allow for lots of air-flow and cooling of components."),(0,i.kt)("li",{parentName:"ul"},'Easily removable components and a "sliding" removal design, allowing for quick repair and maintenance.')),(0,i.kt)("p",null,"This computer would be impractical for home use. However, it still has the same ",(0,i.kt)("em",{parentName:"p"},"components")," as a home computer - there is nothing technically restricting it from being used as a desktop computer. There is also nothing stopping people from running server software on a desktop computer - and many people do!"))}d.isMDXComponent=!0},82091:function(e,t,r){t.Z=r.p+"assets/images/server-33b695b3966809090b291972755af9e6.jpg"}}]);
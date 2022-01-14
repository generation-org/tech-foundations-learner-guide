"use strict";(self.webpackChunktech_foundations=self.webpackChunktech_foundations||[]).push([[161],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),h=a,p=m["".concat(l,".").concat(h)]||m[h]||d[h]||i;return n?r.createElement(p,o(o({ref:t},u),{},{components:n})):r.createElement(p,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},80456:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],s={sidebar_position:1},l="Frames in the Ethernet",c={unversionedId:"networking/linking-computers/frames-in-the-ethernet",id:"networking/linking-computers/frames-in-the-ethernet",isDocsHomePage:!1,title:"Frames in the Ethernet",description:"Summary",source:"@site/docs/networking/linking-computers/frames-in-the-ethernet.md",sourceDirName:"networking/linking-computers",slug:"/networking/linking-computers/frames-in-the-ethernet",permalink:"/tech-foundations-learner-guide/docs/networking/linking-computers/frames-in-the-ethernet",editUrl:"https://github.com/generation-org/tech-foundations/edit/main/docs/networking/linking-computers/frames-in-the-ethernet.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"networkingSidebar",previous:{title:"Linking and Switching",permalink:"/tech-foundations-learner-guide/docs/networking/linking-computers/linking-and-switching"},next:{title:"Routing",permalink:"/tech-foundations-learner-guide/docs/networking/the-internet-protocol/routing"}},u=[{value:"Summary",id:"summary",children:[{value:"Objectives",id:"objectives",children:[],level:3},{value:"Key Points",id:"key-points",children:[],level:3}],level:2},{value:"Breakdown",id:"breakdown",children:[{value:"MAC Addresses",id:"mac-addresses",children:[],level:3},{value:"Ethernet Frames",id:"ethernet-frames",children:[],level:3}],level:2}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"frames-in-the-ethernet"},"Frames in the Ethernet"),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("h3",{id:"objectives"},"Objectives"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"By the end of this session you should be able to:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Identify MAC Addresses on a network"),(0,i.kt)("li",{parentName:"ul"},"Describe the features of an Ethernet Frame")),(0,i.kt)("h3",{id:"key-points"},"Key Points"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"MAC Addresses are globally unique, fixed IDs assigned to network devices"),(0,i.kt)("li",{parentName:"ul"},"Ethernet is the most common wired LAN technology",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"It sends data by encapsulating chunks of the message into frames")))),(0,i.kt)("h2",{id:"breakdown"},"Breakdown"),(0,i.kt)("h3",{id:"mac-addresses"},"MAC Addresses"),(0,i.kt)("p",null,"Every device that connects to a network has a MAC Address assigned to it during manufacture (sometimes more than one, e.g. if a device has both wired and wireless network connectivity). This is a 6-byte hexadecimal number that is usually separated into bytes by dashes or colons, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"02:34:f8:b8:3b:2a"),". You should be able to find the MAC Address for your device with a little searching through the settings, or by using the right commands. On Linux you can see it in the output for ",(0,i.kt)("inlineCode",{parentName:"p"},"ip a"),"."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"MAC stands for Media Access Control. It has nothing to do with the Mac computer products from Apple - that's just a coincidence."))),(0,i.kt)("h3",{id:"ethernet-frames"},"Ethernet Frames"),(0,i.kt)("p",null,"Ethernet networks use MAC addresses to identify where packets are going, and where they're coming from (most modern networks use Ethernet). Ethernet packets are called ",(0,i.kt)("em",{parentName:"p"},"frames"),", and they have the following parts:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"An 8-byte ",(0,i.kt)("strong",{parentName:"li"},"Preamble")," which identifies the start of the packet. It is always ",(0,i.kt)("inlineCode",{parentName:"li"},"aa-aa-aa-aa-aa-aa-aa-ab")),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("strong",{parentName:"li"},"Destination MAC Adress")),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("strong",{parentName:"li"},"Source MAC Address")),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Protocol Type"),", which is usually IP (",(0,i.kt)("inlineCode",{parentName:"li"},"08-00"),")"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"Data")," itself, which can be up to 1500 bytes (any more and it gets split into another packet)"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"CRC Check"),", a 4-byte value calculated from the rest of the frame. If the CRC Check doesn't match the frame when a computer receives it, the frame is discarded as corrupt.")),(0,i.kt)("p",null,"People don't generally construct Ethernet frames and you may never need to understand this in detail - however, since this is the basis of almost all computer networks it's good to have an awareness of it. Any data sent over a network is broken up into parts, usually no more than 1500 bytes in size, then placed in packets that are assembled according to this protocol."))}m.isMDXComponent=!0}}]);
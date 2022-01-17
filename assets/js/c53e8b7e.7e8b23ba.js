"use strict";(self.webpackChunktech_foundations=self.webpackChunktech_foundations||[]).push([[7600],{3905:function(t,e,a){a.d(e,{Zo:function(){return u},kt:function(){return c}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),s=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},u=function(t){var e=s(t.components);return n.createElement(m.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,m=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),d=s(a),c=r,b=d["".concat(m,".").concat(c)]||d[c]||p[c]||i;return a?n.createElement(b,l(l({ref:e},u),{},{components:a})):n.createElement(b,l({ref:e},u))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var m in e)hasOwnProperty.call(e,m)&&(o[m]=e[m]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},36228:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return o},contentTitle:function(){return m},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),l=["components"],o={sidebar_position:1},m="Talking like a computer",s={unversionedId:"computing/binary-code/talking-like-a-computer",id:"computing/binary-code/talking-like-a-computer",isDocsHomePage:!1,title:"Talking like a computer",description:"Summary",source:"@site/docs/computing/binary-code/talking-like-a-computer.md",sourceDirName:"computing/binary-code",slug:"/computing/binary-code/talking-like-a-computer",permalink:"/tech-foundations-learner-guide/docs/computing/binary-code/talking-like-a-computer",editUrl:"https://github.com/generation-org/tech-foundations/edit/main/docs/computing/binary-code/talking-like-a-computer.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"computingSidebar",previous:{title:"Counting like a computer",permalink:"/tech-foundations-learner-guide/docs/computing/binary-code/counting-like-a-computer"},next:{title:"The Central Processing Unit",permalink:"/tech-foundations-learner-guide/docs/computing/computer-hardware/the-central-processing-unit"}},u=[{value:"Summary",id:"summary",children:[{value:"Objectives",id:"objectives",children:[],level:3},{value:"Key Points",id:"key-points",children:[],level:3}],level:2},{value:"Breakdown",id:"breakdown",children:[{value:"Binary data",id:"binary-data",children:[],level:3},{value:"Measuring bits",id:"measuring-bits",children:[],level:3},{value:"1000 or 1024?",id:"1000-or-1024",children:[],level:3}],level:2}],p={toc:u};function d(t){var e=t.components,a=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"talking-like-a-computer"},"Talking like a computer"),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("h3",{id:"objectives"},"Objectives"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"By the end of this session you should be able to:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Explain why computers use binary numbers."),(0,i.kt)("li",{parentName:"ul"},"Demonstrate that computers can transmit information over anything that can represent two states."),(0,i.kt)("li",{parentName:"ul"},"Explain how engineers measure the \u201csize\u201d of data on a computer."),(0,i.kt)("li",{parentName:"ul"},'Explain how to measure the "speed" of connections.')),(0,i.kt)("h3",{id:"key-points"},"Key Points"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Computers use binary numbers because they have digital circuits, which can only represent two states."),(0,i.kt)("li",{parentName:"ul"},"Computers can transmit data over anything that can represent two states, like an electrical wire, or a light."),(0,i.kt)("li",{parentName:"ul"},"A binary digit is stored in a computer as a \u201cbit\u201d; 8 bits make up a \u201cbyte.\u201d"),(0,i.kt)("li",{parentName:"ul"},"Data is measured in either multiples of bits (kilobit, megabit, gigabit), or multiples of bytes (kilobyte, megabyte, gigabyte).")),(0,i.kt)("h2",{id:"breakdown"},"Breakdown"),(0,i.kt)("h3",{id:"binary-data"},"Binary data"),(0,i.kt)("p",null,"Early electronic computers (known as ",(0,i.kt)("em",{parentName:"p"},"analogue")," electronic computers) worked by having precisely machined components that worked together in sequence to complete calculations, and would transmit data between components by changing the voltage - much like a dimmer swich on a light. Although faster, these computers weren't very precise - voltages could be affected not only by intentional changes but by unintentional factors - varying input voltages, manufacturing differences between components, wear and tear etc."),(0,i.kt)("p",null,"Digital electronic computers work in two discrete states - on and off - much more like a typical light switch. This means they can be extremely precise and reliable even with imprecise components and various levels of interference. Transmitting data between computers can be completed by anything that can represent two states - high and low voltage on a cable, on and off on a light or laser, high and low amplitude on a radio wave, etc."),(0,i.kt)("p",null,"We label the two states 0 and 1, and use them in binary arithmetic (instead of decimal arithmetic) as the basis of everything we do with a computer."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This is a primer on how computers work, and provides a basic model for understanding them. Modern networks take advantage of more complex signalling, which can do amazing things like running many binary signals on the same wire by modifying the amplitude of each signal, or sending more than one beam of light down an optical cable by separating them with different angles of refraction."))),(0,i.kt)("h3",{id:"measuring-bits"},"Measuring bits"),(0,i.kt)("p",null,"A binary number is called a ",(0,i.kt)("em",{parentName:"p"},"bit"),", and the rate at which two computers communicate is measured in ",(0,i.kt)("em",{parentName:"p"},"bits-per-second")," (bps)."),(0,i.kt)("p",null,"We also have notation for large numbers of bits, which are the the same prefixes and amounts as metric units:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"# of bits"),(0,i.kt)("th",{parentName:"tr",align:null},"Name"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},"bit")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1000"),(0,i.kt)("td",{parentName:"tr",align:null},"Kilobit")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1000000"),(0,i.kt)("td",{parentName:"tr",align:null},"Megabit")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1000000000"),(0,i.kt)("td",{parentName:"tr",align:null},"Gigabit")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1000000000000"),(0,i.kt)("td",{parentName:"tr",align:null},"Terabit")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1000000000000000"),(0,i.kt)("td",{parentName:"tr",align:null},"Petabit")))),(0,i.kt)("p",null,"(You are not expected to remember this table - just remember that each unit is 1000 of the previous unit in the table)"),(0,i.kt)("p",null,"We also have a name for eight bits - we call it a ",(0,i.kt)("em",{parentName:"p"},"byte"),". A Kilobyte is 1000 bytes - or, 8000 bits:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"# of bits"),(0,i.kt)("th",{parentName:"tr",align:null},"Name"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"8"),(0,i.kt)("td",{parentName:"tr",align:null},"byte")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"8000"),(0,i.kt)("td",{parentName:"tr",align:null},"Kilobyte")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"8000000"),(0,i.kt)("td",{parentName:"tr",align:null},"Megabyte")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"8000000000"),(0,i.kt)("td",{parentName:"tr",align:null},"Gigabyte")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"8000000000000"),(0,i.kt)("td",{parentName:"tr",align:null},"Terabyte")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"8000000000000000"),(0,i.kt)("td",{parentName:"tr",align:null},"Petabyte")))),(0,i.kt)("p",null,"Data in storage tends to be measured in bytes, while data in transit tends to be measured in bits - so remember to convert between these units when comparing them."),(0,i.kt)("h3",{id:"1000-or-1024"},"1000 or 1024?"),(0,i.kt)("p",null,"Computers work most efficiently in powers of 2, and the nearest power of 2 to 1000 is 1024. For this reason, Kila, Mega, Giga, etc always denoted 1024 rather than 1000 in computer science circles - 1 Kilobyte was 1024 bytes, for example. However, hardware manufacturers preferred to work in powers of 1000 (probably because it made their hardware look like it could handle more data). This disagreement in the industry led to confusing situations such as consumers buying hard disks that reported less space in their software than the hardware manufacturer wrote on the box."),(0,i.kt)("p",null,'In 1996 a decision was made that the traditional prefixes would be 1000-based (decimal) - and new prefixes would be created for 1024-based (binary) notation. These were Kibi, Mebi, Gibi, etc.. replacing the last two letters of the original prefixes with "bi" (meaning "two"):'),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"# of bits"),(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"# of bits"),(0,i.kt)("th",{parentName:"tr",align:null},"Name"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},"bit"),(0,i.kt)("td",{parentName:"tr",align:null},"8"),(0,i.kt)("td",{parentName:"tr",align:null},"byte")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1024"),(0,i.kt)("td",{parentName:"tr",align:null},"Kibibit"),(0,i.kt)("td",{parentName:"tr",align:null},"8192"),(0,i.kt)("td",{parentName:"tr",align:null},"Kibibyte")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1048576"),(0,i.kt)("td",{parentName:"tr",align:null},"Mebibit"),(0,i.kt)("td",{parentName:"tr",align:null},"8388608"),(0,i.kt)("td",{parentName:"tr",align:null},"Mebibyte")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1073741824"),(0,i.kt)("td",{parentName:"tr",align:null},"Gibibit"),(0,i.kt)("td",{parentName:"tr",align:null},"8589934592"),(0,i.kt)("td",{parentName:"tr",align:null},"Gibibyte")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1099511627776"),(0,i.kt)("td",{parentName:"tr",align:null},"Tebibit"),(0,i.kt)("td",{parentName:"tr",align:null},"8796093022208"),(0,i.kt)("td",{parentName:"tr",align:null},"Tebibyte")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1125899906842624"),(0,i.kt)("td",{parentName:"tr",align:null},"Pebibit"),(0,i.kt)("td",{parentName:"tr",align:null},"9007199254740992"),(0,i.kt)("td",{parentName:"tr",align:null},"Pebibyte")))),(0,i.kt)("p",null,"(Like with the previous table, don't try to remember these numbers - just remember that each unit is 1024 of the previous unit)"),(0,i.kt)("p",null,"Lots of people still disagree with this decision, and refuse to implement the new binary prefixes."))}d.isMDXComponent=!0}}]);
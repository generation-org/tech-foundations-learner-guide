(self.webpackChunktech_foundations=self.webpackChunktech_foundations||[]).push([[4093],{20837:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return h},default:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=n(93456),l=["components"],s={sidebar_position:0},d="Routing",c={unversionedId:"networking/the-internet-protocol/routing",id:"networking/the-internet-protocol/routing",isDocsHomePage:!1,title:"Routing",description:"Summary",source:"@site/docs/networking/the-internet-protocol/routing.md",sourceDirName:"networking/the-internet-protocol",slug:"/networking/the-internet-protocol/routing",permalink:"/tech-foundations-learner-guide/docs/networking/the-internet-protocol/routing",editUrl:"https://github.com/generation-org/tech-foundations/edit/main/docs/networking/the-internet-protocol/routing.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"networkingSidebar",previous:{title:"Frames in the Ethernet",permalink:"/tech-foundations-learner-guide/docs/networking/linking-computers/frames-in-the-ethernet"},next:{title:"Managing IP Addresses",permalink:"/tech-foundations-learner-guide/docs/networking/the-internet-protocol/managing-ip"}},h=[{value:"Summary",id:"summary",children:[{value:"Objectives",id:"objectives",children:[],level:3},{value:"Key Points",id:"key-points",children:[],level:3}],level:2},{value:"Breakdown",id:"breakdown",children:[{value:"The Internet Protocol",id:"the-internet-protocol",children:[],level:3},{value:"IP Addresses",id:"ip-addresses",children:[],level:3},{value:"Routing Packets",id:"routing-packets",children:[],level:3},{value:"Encapsulation",id:"encapsulation",children:[],level:3}],level:2}],p={toc:h};function u(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"routing"},"Routing"),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("h3",{id:"objectives"},"Objectives"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"By the end of this session you should be able to:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Explain how data is moved between different Local Area Networks")),(0,o.kt)("h3",{id:"key-points"},"Key Points"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"IP addresses are hierarchical addresses that help us in interconnecting networks"),(0,o.kt)("li",{parentName:"ul"},"Routing solves the problem of sending data through several local area networks connected together")),(0,o.kt)("h2",{id:"breakdown"},"Breakdown"),(0,o.kt)("h3",{id:"the-internet-protocol"},"The Internet Protocol"),(0,o.kt)("p",null,"Computers that are ",(0,o.kt)("em",{parentName:"p"},"directly")," connected to each other can communicate by addressing frames to each others MAC Addresses over the Ethernet Protocol. However, this doesn't work for any computer that isn't directly connected - Ethernet has no ",(0,o.kt)("em",{parentName:"p"},"routing")," capability, which means frames cannot leave their local domain."),(0,o.kt)("p",null,"The Internet Protocol allows computers that ",(0,o.kt)("em",{parentName:"p"},"aren't")," directly connected to each other to send each other data, in ",(0,o.kt)("em",{parentName:"p"},"packets"),", which can be ",(0,o.kt)("em",{parentName:"p"},"routed")," between networks until they get to their destination."),(0,o.kt)("h3",{id:"ip-addresses"},"IP Addresses"),(0,o.kt)("p",null,"The Internet Protocol works based on IP Addresses, which are assigned to each computer on a network. IP Addresses are not permanent, and a device may have different IP addresses when it connects to different networks."),(0,o.kt)("p",null,"IP addresses are 32-bit binary numbers, which are presented in the form of four 8-bit ",(0,o.kt)("em",{parentName:"p"},"octets"),":"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"IP Address"),(0,o.kt)("th",{parentName:"tr",align:null},"Binary Address"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"0.0.0.0")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"00000000000000000000000000000000"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"192.168.0.1")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"11000000101010000000000000000001"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"255.255.255.255")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"11111111111111111111111111111111"))))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This is a rare case of decimal representation of binary numbers, which are much more commonly represented in hexadecimal. Due to the nature of this representation - four decimal numbers representing a single underlying binary number - performing arithmetic in decimal is very hard."),(0,o.kt)("p",{parentName:"div"},"For this reason many people will convert between decimal and binary when performing calculations on IP Addresses."))),(0,o.kt)("h3",{id:"routing-packets"},"Routing Packets"),(0,o.kt)("p",null,"The Internet Protocol functions by ",(0,o.kt)("em",{parentName:"p"},"abstracting")," connections between computers from the underlying Ethernet link layer, and is built on top of it. A device will send data wrapped in an IP packet out to the network, wrapped in an Ethernet frame. If the recipient is on the same Ethernet network (e.g. in the same house) then they will receive the frame, unwrap the frame, and then unwrap the packet to get at the data."),(0,o.kt)("p",null,"If the packet is destined for an external device then it will be sent to the network's ",(0,o.kt)("em",{parentName:"p"},"default route"),", which is usually a ",(0,o.kt)("em",{parentName:"p"},"router"),". Routers are computers that are connected to two or more networks, and are in charge of routing packets between them. The router will unwrap the frame, read the packet, then wrap the packet in a new frame destined for the ",(0,o.kt)("em",{parentName:"p"},"next hop"),"."),(0,o.kt)("p",null,"This will continue until it reaches a router that has a direct connection to the recipient, which it will send the packet to directly."),(0,o.kt)("h3",{id:"encapsulation"},"Encapsulation"),(0,o.kt)(i.Mermaid,{chart:"flowchart\n    subgraph Ethernet Frame\n      subgraph IP Packet\n        subgraph TCP Datagram\n          Data\n        end\n      end\n    end",mdxType:"Mermaid"}),(0,o.kt)("p",null,"Modern networks are very complex, and only achieve such complexity through ",(0,o.kt)("em",{parentName:"p"},"abstraction"),". By separating the link layer (Ethernet) and the internet layer (IP) into separate protocols, each can focus on doing their job well while relying on the other to handle other parts of the stack."),(0,o.kt)("p",null,"As we learn more about networks you will find that data is encapsulated by many different protocols, each building on what came before to provide highly precise, performant and complex systems."))}u.isMDXComponent=!0},11748:function(e,t,n){var r={"./locale":89234,"./locale.js":89234};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id=11748}}]);
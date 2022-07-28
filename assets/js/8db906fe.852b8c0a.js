(self.webpackChunktech_foundations=self.webpackChunktech_foundations||[]).push([[1594],{89001:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=r(93456),l=["components"],s={sidebar_position:0},d="Drawing flow",u={unversionedId:"programming/control-flow/drawing-flow",id:"programming/control-flow/drawing-flow",isDocsHomePage:!1,title:"Drawing flow",description:"Summary",source:"@site/docs/programming/control-flow/drawing-flow.md",sourceDirName:"programming/control-flow",slug:"/programming/control-flow/drawing-flow",permalink:"/tech-foundations-learner-guide/docs/programming/control-flow/drawing-flow",editUrl:"https://github.com/generation-org/tech-foundations/edit/main/docs/programming/control-flow/drawing-flow.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"programmingSidebar",previous:{title:"Variables and Data Types",permalink:"/tech-foundations-learner-guide/docs/programming/introduction-to-programming/variables-and-data-types"},next:{title:"Coding flow",permalink:"/tech-foundations-learner-guide/docs/programming/control-flow/coding-flow"}},p=[{value:"Summary",id:"summary",children:[{value:"Objectives",id:"objectives",children:[],level:3},{value:"Key Points",id:"key-points",children:[],level:3}],level:2},{value:"Breakdown",id:"breakdown",children:[{value:"Fizz buzz",id:"fizz-buzz",children:[],level:3},{value:"Flowcharts",id:"flowcharts",children:[{value:"Terminal",id:"terminal",children:[],level:4},{value:"Flowline",id:"flowline",children:[],level:4},{value:"Process",id:"process",children:[],level:4},{value:"Input/Output",id:"inputoutput",children:[],level:4},{value:"Decision",id:"decision",children:[],level:4}],level:3}],level:2}],m={toc:p};function c(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"drawing-flow"},"Drawing flow"),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("h3",{id:"objectives"},"Objectives"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"By the end of this session you should be able to:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Draw out simple applications as flowcharts, using the following symbols:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Terminal"),(0,i.kt)("li",{parentName:"ul"},"Flowline"),(0,i.kt)("li",{parentName:"ul"},"Process"),(0,i.kt)("li",{parentName:"ul"},"Input/Output"),(0,i.kt)("li",{parentName:"ul"},"Decision")))),(0,i.kt)("h3",{id:"key-points"},"Key Points"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Flowcharts are diagrams that represent a workflow or process",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The specific symbols used the flowchart show the type of instructions"),(0,i.kt)("li",{parentName:"ul"},"Repetition and decisions with branches can be easily represented in a Flowchart")))),(0,i.kt)("h2",{id:"breakdown"},"Breakdown"),(0,i.kt)("h3",{id:"fizz-buzz"},"Fizz buzz"),(0,i.kt)("p",null,'"Fizz buzz" is a simple children\'s game that also happens to be a popular programming interview question. The rules are:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Each player, in turn, counts upwards from 1."),(0,i.kt)("li",{parentName:"ul"},"On your turn:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'If your number is divisible by 3 you must say "Fizz".'),(0,i.kt)("li",{parentName:"ul"},'If your number is divisible by 5 you must say "Buzz".'),(0,i.kt)("li",{parentName:"ul"},'If your number if divisible by both 3 and 5 you must say "Fizzbuzz".'))),(0,i.kt)("li",{parentName:"ul"},"Otherwise, you just say your number and play moves to the next player.")),(0,i.kt)("h3",{id:"flowcharts"},"Flowcharts"),(0,i.kt)("p",null,"Flowcharts are diagrams that show a workflow or process. Like programming languages, flowcharts have ",(0,i.kt)("em",{parentName:"p"},"syntax")," that set out how they work. We start with five basic symbols common to all flowcharts:"),(0,i.kt)("h4",{id:"terminal"},"Terminal"),(0,i.kt)(o.Mermaid,{chart:"flowchart LR;\n    id1([Start]);",mdxType:"Mermaid"}),(0,i.kt)("p",null,"A ",(0,i.kt)("em",{parentName:"p"},"terminal")," symbol marks the start or end of a flowchart. It is commonly represented as either an oval, or as a rectangle with rounded corners."),(0,i.kt)("h4",{id:"flowline"},"Flowline"),(0,i.kt)(o.Mermaid,{chart:"flowchart LR;\n    id1([Start]) --\x3e id2([End]);",mdxType:"Mermaid"}),(0,i.kt)("p",null,"A ",(0,i.kt)("em",{parentName:"p"},"flowline")," arrow marks the flow from one symbol to the other. In the above chart, the flowline is connecting the Start and End terminals."),(0,i.kt)("h4",{id:"process"},"Process"),(0,i.kt)(o.Mermaid,{chart:"flowchart LR;\n    id1([Start]) --\x3e id2[password = secret]\n    id2 --\x3e id3([End])",mdxType:"Mermaid"}),(0,i.kt)("p",null,"A ",(0,i.kt)("em",{parentName:"p"},"process")," symbol represents an instruction that is completed internally. In the above chart, the process is assigning the value ",(0,i.kt)("inlineCode",{parentName:"p"},"secret")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"password"),"."),(0,i.kt)("h4",{id:"inputoutput"},"Input/Output"),(0,i.kt)(o.Mermaid,{chart:"flowchart LR;\n    id1([Start]) --\x3e id2[real_password = secret]\n    id2 --\x3e id3[/Input user_password/]\n    id3 --\x3e id4([End])",mdxType:"Mermaid"}),(0,i.kt)("p",null,"An ",(0,i.kt)("em",{parentName:"p"},"input/output")," symbol represents either input from or output to a user. In the above chart, the input/output symbol is asking for a value to assign to ",(0,i.kt)("inlineCode",{parentName:"p"},"user_password"),"."),(0,i.kt)("h4",{id:"decision"},"Decision"),(0,i.kt)(o.Mermaid,{chart:"flowchart LR;\n    id1([Start]) --\x3e id2[real_password = secret]\n    id2 --\x3e id3[/Input user_password/]\n    id3 --\x3e id4{Does<br/> real_password == <br/>user_password?}\n    id4 -- No --\x3e id5([Wrong password!])\n    id4 -- Yes --\x3e id6([Correct!])",mdxType:"Mermaid"}),(0,i.kt)("p",null,"A ",(0,i.kt)("em",{parentName:"p"},"decision")," symbol represents a decision that should be made, with each option represented by the writing on the flowlines that run from it. In the above chart, the decision symbol compares the ",(0,i.kt)("inlineCode",{parentName:"p"},"real_password")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"user_password")," to see if they match."))}c.isMDXComponent=!0},11748:function(e,t,r){var n={"./locale":89234,"./locale.js":89234};function a(e){var t=i(e);return r(t)}function i(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=i,e.exports=a,a.id=11748}}]);
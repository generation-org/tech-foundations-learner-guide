(self.webpackChunktech_foundations=self.webpackChunktech_foundations||[]).push([[291],{1953:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return p},default:function(){return u}});var i=n(7462),a=n(3366),r=(n(7294),n(3905)),o=n(3456),l=["components"],s={sidebar_position:4},d="Working with text",m={unversionedId:"linux/working-with-text",id:"linux/working-with-text",isDocsHomePage:!1,title:"Working with text",description:"Summary",source:"@site/docs/linux/working-with-text.md",sourceDirName:"linux",slug:"/linux/working-with-text",permalink:"/tech-foundations-learner-guide/docs/linux/working-with-text",editUrl:"https://github.com/generation-org/tech-foundations/edit/main/docs/linux/working-with-text.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"linuxSidebar",previous:{title:"Permissions",permalink:"/tech-foundations-learner-guide/docs/linux/permissions"}},p=[{value:"Summary",id:"summary",children:[{value:"Objectives",id:"objectives",children:[],level:3}],level:2},{value:"Breakdown",id:"breakdown",children:[{value:"Less",id:"less",children:[],level:3},{value:"Grep",id:"grep",children:[],level:3},{value:"Vim",id:"vim",children:[],level:3},{value:"Regular Expressions (RegEx)",id:"regular-expressions-regex",children:[],level:3}],level:2}],h={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"working-with-text"},"Working with text"),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("h3",{id:"objectives"},"Objectives"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"By the end of this session you should be able to:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"View and scroll text files in the terminal"),(0,r.kt)("li",{parentName:"ul"},"Search text files for matching strings"),(0,r.kt)("li",{parentName:"ul"},"Define what Regular Expressions are"),(0,r.kt)("li",{parentName:"ul"},"Edit text files with Vim")),(0,r.kt)("h2",{id:"breakdown"},"Breakdown"),(0,r.kt)("h3",{id:"less"},"Less"),(0,r.kt)("p",null,"The simplest way of viewing a file in the terminal is the ",(0,r.kt)("inlineCode",{parentName:"p"},"cat")," command - type ",(0,r.kt)("inlineCode",{parentName:"p"},"cat <filename>")," and the contents will echo out to the screen. However, the ",(0,r.kt)("inlineCode",{parentName:"p"},"less")," command has a useful feature - the ability to scroll. You can use the up and down keys, or the ",(0,r.kt)("inlineCode",{parentName:"p"},"Home"),",",(0,r.kt)("inlineCode",{parentName:"p"},"End"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"PgUp")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"PgDn")," keys to move around the file. Press ",(0,r.kt)("inlineCode",{parentName:"p"},"q")," to quit."),(0,r.kt)("p",null,"Less also allows you to search through files - press ",(0,r.kt)("inlineCode",{parentName:"p"},"/")," then type your search string, and then press enter. Typing ",(0,r.kt)("inlineCode",{parentName:"p"},"/")," and enter will search for the next match of the same search string."),(0,r.kt)("h3",{id:"grep"},"Grep"),(0,r.kt)("p",null,"Grep allows us to search through files from the terminal, without opening the files themselves. Simply type ",(0,r.kt)("inlineCode",{parentName:"p"},"grep <search term> <filename>")," and it will print out any lines from the file that match the string. Grep has a bunch of handy options, too - e.g. the ",(0,r.kt)("inlineCode",{parentName:"p"},"-c")," option will count the number of times the search term appears instead of printing the lines."),(0,r.kt)("h3",{id:"vim"},"Vim"),(0,r.kt)("p",null,"While Less is a text viewer, and grep is a text search tool, Vim is a text editor. Many engineers swear by Vim and use it as their primary editor. It's also installed on almost every Linux computer by default, so if you want to edit a text file it's worth knowing."),(0,r.kt)(o.Mermaid,{chart:'flowchart LR\nid1[Insert Mode] -- "Esc" --\x3e id2(Normal Mode)\nid2 -- " : " --\x3e id3[Command Mode]\nid3 -- "Esc" --\x3e id2\nid2 -- " i " --\x3e id1',mdxType:"Mermaid"}),(0,r.kt)("p",null,'Vim always starts out in what is called "normal mode"; in this mode you can view a file (as well as do some advanced editing). To insert text into the file you need to press ',(0,r.kt)("inlineCode",{parentName:"p"},"i"),", at which point you can type and delete text as comfortable. Exit insert mode with ",(0,r.kt)("inlineCode",{parentName:"p"},"Esc"),"."),(0,r.kt)("p",null,"Vim also has a command mode, which is entered with the ",(0,r.kt)("inlineCode",{parentName:"p"},":")," key. Leaving the command mode happens automatically after running a command, or whenever you press ",(0,r.kt)("inlineCode",{parentName:"p"},"Esc"),". From the command mode we can do a couple of things:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},":w")," will save (write) the file."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},":q")," will quit the editor."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},":/<search term>")," will search the file for a term."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},":%s/<search term>/<replacement string>/g")," will search for a term, then replace it where it finds it with the replacement string.")),(0,r.kt)("p",null,"We are only scratching the surface of the power of the Vim text editor; these few commands should give you what you need to move around the editor and get basic work done."),(0,r.kt)("h3",{id:"regular-expressions-regex"},"Regular Expressions (RegEx)"),(0,r.kt)("p",null,"Grep and Vim both support ",(0,r.kt)("em",{parentName:"p"},"Regular Expressions")," as search terms. Regular Expressions (RegEx) are a powerful tool for making complex searches. Consider the following search terms:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[bdf]og")," will find the words ",(0,r.kt)("inlineCode",{parentName:"li"},"bog"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"dog")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"fog"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"http:\\/\\/.*\\/")," will find any piece of text that starts with ",(0,r.kt)("inlineCode",{parentName:"li"},"http://")," and ends in ",(0,r.kt)("inlineCode",{parentName:"li"},"/")," - any url.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/")," is a RegEx character which we ",(0,r.kt)("em",{parentName:"li"},"escape")," by using the ",(0,r.kt)("inlineCode",{parentName:"li"},"\\")," character."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"^[0-9]")," will find any line that starts with a number.")),(0,r.kt)("p",null,"Regular Expressions should be used anywhere you want to find something in a document that's more complex than a simple phrase."))}u.isMDXComponent=!0},1748:function(e,t,n){var i={"./locale":9234,"./locale.js":9234};function a(e){var t=r(e);return n(t)}function r(e){if(!n.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}a.keys=function(){return Object.keys(i)},a.resolve=r,e.exports=a,a.id=1748}}]);
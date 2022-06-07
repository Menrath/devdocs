"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[94865],{20126:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var o=a(83117),n=a(80102),i=(a(67294),a(3905)),r=a(13904),l=["components"],s={title:"Getting started",tags:["Core development","Processes"]},d=void 0,p={unversionedId:"development/gettingstarted",id:"development/gettingstarted",title:"Getting started",description:"- Set up your development environment",source:"@site/general/development/gettingstarted.md",sourceDirName:"development",slug:"/development/gettingstarted",permalink:"/devdocs/general/development/gettingstarted",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/development/gettingstarted.md",tags:[{label:"Core development",permalink:"/devdocs/general/tags/core-development"},{label:"Processes",permalink:"/devdocs/general/tags/processes"}],version:"current",lastUpdatedBy:"Sara Arjona",lastUpdatedAt:1654598646,formattedLastUpdatedAt:"07/06/2022",frontMatter:{title:"Getting started",tags:["Core development","Processes"]},sidebar:"coding",next:{title:"Policies",permalink:"/devdocs/general/development/policies"}},m={},c=[{value:"A quick start to Moodle development",id:"a-quick-start-to-moodle-development",level:2},{value:"Communication",id:"communication",level:2},{value:"See also",id:"see-also",level:2}],u={toc:c};function h(e){var t=e.components,a=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(r.Z,(0,o.Z)({frontMatter:s},void 0!==p?{metadata:p}:{},{mdxType:"MoodlePageBanner"})),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Ready to code?")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#a-quick-start-to-moodle-development"},"Set up your development environment")),(0,i.kt)("li",{parentName:"ul"},"See the ",(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/issues/?jql=project%20%3D%20MDL%20AND%20type%20in%20(bug)%20AND%20status%20%3D%20open%20AND%20Difficulty%20%3D%20Easy%20AND%20labels%20not%20in%20(patch)%20ORDER%20BY%20created%20DESC"},"list of relatively easy Moodle bugs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Git_for_developers#Preparing_a_patch"},"Prepare a patch")),(0,i.kt)("li",{parentName:"ul"},"Read the ",(0,i.kt)("a",{parentName:"li",href:"/general/development/policies/codingstyle"},"Coding style")," policy"),(0,i.kt)("li",{parentName:"ul"},"Send your patch to ",(0,i.kt)("a",{parentName:"li",href:"/general/development/process/peer-review"},"peer review")," and learn more about the ",(0,i.kt)("a",{parentName:"li",href:"/general/development/process"},"Moodle processes"),"."),(0,i.kt)("li",{parentName:"ul"},"Create your custom plugins looking at the information in the ",(0,i.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Plugin_contribution"},"Plugin contribution")," page.")))),(0,i.kt)("h2",{id:"a-quick-start-to-moodle-development"},"A quick start to Moodle development"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create an account on ",(0,i.kt)("a",{parentName:"p",href:"https://moodle.org/"},"Moodle.org"),". You will need this to access the ",(0,i.kt)("a",{parentName:"p",href:"https://moodle.org/mod/forum/view.php?f=33"},"Moodle General Developer forum")," and download ",(0,i.kt)("a",{parentName:"p",href:"https://moodle.org/plugins"},"Moodle plugins"),". You can also sign up to free self-paced courses in our ",(0,i.kt)("a",{parentName:"p",href:"https://learn.moodle.org/"},"Moodle Academy Developer Learning Pathway"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create an account on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/"},"GitHub")," and ",(0,i.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Git_for_developers"},"install Git on your computer"),". This is the source code version control repository tool of choice for Moodle development.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://docs.moodle.org/en/Installing_Moodle"},"Install Moodle on your machine")," or use a container environment like ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/moodlehq/moodle-docker"},"moodle-docker"),". You can also use ",(0,i.kt)("a",{parentName:"p",href:"/general/development/tools/mdk"},"Moodle Development Kit (MDK)"),"."),(0,i.kt)("div",{parentName:"li",className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"We highly recommend that you use a database administration tool such as ",(0,i.kt)("a",{parentName:"p",href:"https://www.adminer.org/"},"adminer")," to help you manage your development databases.")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Set-up Moodle for development:"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Enable the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.moodle.org/en/Debugging"},"Moodle Debugger"),"."),(0,i.kt)("div",{parentName:"li",className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"When developing in Moodle, it's recommended to turn debugging on. Only turn it off for demonstration purposes as it does have a considerable impact on the performance of your Moodle website."))),(0,i.kt)("div",{parentName:"li",className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Attention")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Always resolve all errors and warnings that show up with ",(0,i.kt)("strong",{parentName:"p"},"Moodle debugging turned on"),". Errors and warnings imply that something isn't working as it is supposed to which means your code isn't doing what you intended it to, or may be fragile and could break in the future.")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Install the ",(0,i.kt)("a",{parentName:"p",href:"/general/development/tools/phpcs"},"Moodle PHP CodeSniffer"),". This will be used to test your plugin for conformance with Moodle coding standards. Use this to develop good coding skills.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Install the Moodle ",(0,i.kt)("a",{parentName:"p",href:"https://moodle.org/plugins/local_moodlecheck"},"PHPdoc check plugin"),". This will be used to test your source code documentation. This will also help improve your coding skills."),(0,i.kt)("div",{parentName:"li",className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Advanced")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You can use Xdebug to enable step-by-step debugging in PHP. Integrations are built into many popular editors.\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Profiling_PHP#Xdebug"},"Learn more")))))),(0,i.kt)("p",null,"And finally remember these wise words from ",(0,i.kt)("a",{parentName:"p",href:"https://moodle.org/user/view.php?id=1615960&course=5"},"Michael Milette")," in the ",(0,i.kt)("a",{parentName:"p",href:"https://moodle.org/mod/forum/discuss.php?d=355789"},"General developer forum"),":"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Learning how to code in Moodle involves a lot of learning by example and reading other people's source code including Moodle core code. If you have a particular type of plugin in mind that you would like to create, it's recommended that you start by finding a plugin which provides similar functionality and use the process outlined above to clone it. Then customize it to suit your needs. You can even do this with 3rd party plugins found on the ",(0,i.kt)("a",{parentName:"p",href:"https://moodle.org/plugins"},"plugins directory"),". That's just one of the many advantages of developing with open source. Just always remember to give credit to the original author for his/her original hard work. ","[...]"),(0,i.kt)("p",{parentName:"blockquote"},"Learning all of Moodle and its database takes time - maybe even years. In fact you may never come across parts of it and that's OK. Take it one step at a time and don't be afraid to ask for help when you get stuck. The only expectation by the worldwide community is that you will have tried to figure things out on your own before asking a question. Google is your friend. Just start your query with the word \"moodle\".")),(0,i.kt)("h2",{id:"communication"},"Communication"),(0,i.kt)("p",null,"If you have any question or want to share your ideas, there are several channels you can use to communicate with other developers:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://moodle.org/course/"},"Moodle community forums"),", available in different languages."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://matrix.to/#/%23moodledev:moodle.com"},"A Matrix room")," available for real-time communication. Read the ",(0,i.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Chat"},"chat policies")," before joining."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/general/community/meetings"},"Developer meetings"),", organised periodically and open to anyone interested in Moodle development.")),(0,i.kt)("h2",{id:"see-also"},"See also"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/general/releases"},"Releases")," - versions of Moodle that have already been released"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/general/development/process"},"Process")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/apis"},"API guides")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/general/community/contribute"},"Contributing")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=355789"},"A (july 2017) forum thread")," about Getting Started with Moodle Development.")))}h.isMDXComponent=!0}}]);
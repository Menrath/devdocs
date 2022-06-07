"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[34290],{9545:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return n},metadata:function(){return d},toc:function(){return p}});var r=a(83117),o=a(80102),s=(a(67294),a(3905)),i=a(13904),l=["components"],n={title:"Moodle 2.3.4",tags:["Release notes","Moodle 2.3"],sidebar_position:4,moodleVersion:"2.3.4"},u=void 0,d={unversionedId:"releases/2.3/2.3.4",id:"releases/2.3/2.3.4",title:"Moodle 2.3.4",description:"Release date: 14 January 2013",source:"@site/general/releases/2.3/2.3.4.md",sourceDirName:"releases/2.3",slug:"/releases/2.3/2.3.4",permalink:"/devdocs/general/releases/2.3/2.3.4",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/2.3/2.3.4.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 2.3",permalink:"/devdocs/general/tags/moodle-2-3"}],version:"current",lastUpdatedBy:"Sara Arjona",lastUpdatedAt:1654598646,formattedLastUpdatedAt:"07/06/2022",sidebarPosition:4,frontMatter:{title:"Moodle 2.3.4",tags:["Release notes","Moodle 2.3"],sidebar_position:4,moodleVersion:"2.3.4"},sidebar:"releaseNotes",previous:{title:"Moodle 2.3.3",permalink:"/devdocs/general/releases/2.3/2.3.3"},next:{title:"Moodle 2.3.5",permalink:"/devdocs/general/releases/2.3/2.3.5"}},m={},p=[{value:"Highlights",id:"highlights",level:2},{value:"Functional changes",id:"functional-changes",level:2},{value:"API changes",id:"api-changes",level:2},{value:"Security issues",id:"security-issues",level:2},{value:"Fixes and improvements",id:"fixes-and-improvements",level:2},{value:"Translations",id:"translations",level:2}],c={toc:p};function h(e){var t=e.components,a=(0,o.Z)(e,l);return(0,s.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(i.Z,(0,r.Z)({frontMatter:n},void 0!==d?{metadata:d}:{},{mdxType:"MoodlePageBanner"})),(0,s.kt)("p",null,"Release date: 14 January 2013"),(0,s.kt)("p",null,"Here is ",(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%222.3.4%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true"},"the full list of fixed issues in 2.3.4"),"."),(0,s.kt)("h2",{id:"highlights"},"Highlights"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-32880"},"MDL-32880")," - Make 1.9 blocks restorable in 2.3 onwards"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-34791"},"MDL-34791")," - Activity quick title edit updates name in gradebook"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-35653"},"MDL-35653")," - Wiki module works if you activate the force format option")),(0,s.kt)("h2",{id:"functional-changes"},"Functional changes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-35422"},"MDL-35422")," - To start writing their Workshop submissions, students now click a button labelled 'Start preparing your submission' instead of 'Submit'")),(0,s.kt)("h2",{id:"api-changes"},"API changes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-30700"},"MDL-30700"),' - There is a new function "text_sorting($columnname)" for the class flexible_table which allows you to specify which columns are of type "text" so they can be sorted correctly in all databases.'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-35593"},"MDL-35593")," - core_webservice_get_site_info returns version number as PARAM_TEXT"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-30961"},"MDL-30961")," - get_course_contents web service's name value is now PARAM_RAW"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-36795"},"MDL-36795")," - In the default course settings, numsections is not limited to maxsections")),(0,s.kt)("h2",{id:"security-issues"},"Security issues"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=220157"},"MSA-13-0001")," - Security issue in Google Spellchecker in TinyMCE"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=220158"},"MSA-13-0002")," - Capability issue with Outcome editing"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=220160"},"MSA-13-0003")," - Potential server file access through backup restoration"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=220161"},"MSA-13-0004")," - Information leak through activity report"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=220162"},"MSA-13-0005")," - Potential phishing attack through URL redirects"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=220163"},"MSA-13-0006")," - Potential information leak in Assignment module"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=220164"},"MSA-13-0007")," - Potential exploit in messaging"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=220165"},"MSA-13-0008")," - Information leak through Blog RSS"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=220166"},"MSA-13-0009")," - Information leak through Blog RSS")),(0,s.kt)("h2",{id:"fixes-and-improvements"},"Fixes and improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-36680"},"MDL-36680")," - Overview report now gives correct course total by not including hidden item grades"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-35717"},"MDL-35717")," - Quiz cron not closing old attempts after quiz close date (also ",(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-36842"},"MDL-36842"),")"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-37165"},"MDL-37165")," - Assignment summary displays on Oracle"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-36668"},"MDL-36668")," - Performance issue resolved in viewing pages in Database activity"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-36760"},"MDL-36760")," - Numerical type quiz questions now work with frozen elements changes"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-36551"},"MDL-36551")," - Database presets retain advanced search template"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-33863"},"MDL-33863")," - Importing quiz questions into new course happens without error"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-36683"},"MDL-36683")," - It is now possible to duplicate a quiz when course question bank contains matching questions")),(0,s.kt)("h2",{id:"translations"},"Translations"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_2.3.4"},"Notes de mise \xe0 jour de Moodle 2.3.4"))))}h.isMDXComponent=!0}}]);
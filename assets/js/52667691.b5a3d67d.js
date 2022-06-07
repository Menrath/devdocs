"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[7276],{27245:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var r=a(83117),o=a(80102),s=(a(67294),a(3905)),l=a(13904),n=["components"],i={title:"Moodle 2.2.1",tags:["Release notes","Moodle 2.2"],sidebar_position:1,moodleVersion:"2.2.1"},d=void 0,p={unversionedId:"releases/2.2/2.2.1",id:"releases/2.2/2.2.1",title:"Moodle 2.2.1",description:"Release date: 9 January 2012",source:"@site/general/releases/2.2/2.2.1.md",sourceDirName:"releases/2.2",slug:"/releases/2.2/2.2.1",permalink:"/devdocs/general/releases/2.2/2.2.1",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/2.2/2.2.1.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 2.2",permalink:"/devdocs/general/tags/moodle-2-2"}],version:"current",lastUpdatedBy:"Sara Arjona",lastUpdatedAt:1654598646,formattedLastUpdatedAt:"07/06/2022",sidebarPosition:1,frontMatter:{title:"Moodle 2.2.1",tags:["Release notes","Moodle 2.2"],sidebar_position:1,moodleVersion:"2.2.1"},sidebar:"releaseNotes",previous:{title:"Moodle 2.2",permalink:"/devdocs/general/releases/2.2"},next:{title:"Moodle 2.2.2",permalink:"/devdocs/general/releases/2.2/2.2.2"}},m={},u=[{value:"Highlights",id:"highlights",level:2},{value:"Functional changes",id:"functional-changes",level:2},{value:"Security issues",id:"security-issues",level:2},{value:"Fixes and improvements",id:"fixes-and-improvements",level:2},{value:"Translations",id:"translations",level:2}],c={toc:u};function h(e){var t=e.components,a=(0,o.Z)(e,n);return(0,s.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(l.Z,(0,r.Z)({frontMatter:i},void 0!==p?{metadata:p}:{},{mdxType:"MoodlePageBanner"})),(0,s.kt)("p",null,"Release date: 9 January 2012"),(0,s.kt)("p",null,"Here is ",(0,s.kt)("a",{parentName:"p",href:"http://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%222.2.1%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true"},"the full list of fixed issues in 2.2.1"),"."),(0,s.kt)("h2",{id:"highlights"},"Highlights"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-26974"},"MDL-26974")," - SCORM now has logging for opening individual SCOs"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-28710"},"MDL-28710")," - CSS class names have been added for rating div/span elements enabling theming")),(0,s.kt)("h2",{id:"functional-changes"},"Functional changes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-19147"},"MDL-19147")," - Single Simple forums are no longer targets for moving (and losing) discussions"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-20245"},"MDL-20245")," - Bigger values allowed in user preferences, alleviating some problems with grader report")),(0,s.kt)("h2",{id:"security-issues"},"Security issues"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=194008"},"MSA-12-0001")," - Recaptcha transmission consistency issue"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=194011"},"MSA-12-0003")," - Added password protection"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=194012"},"MSA-12-0004")," - Added profile image security"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=194013"},"MSA-12-0005")," - Encryption enhancement"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=194014"},"MSA-12-0006")," - Additional email address validation"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=194015"},"MSA-12-0007")," - Email injection prevention"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=194016"},"MSA-12-0008")," - Unsynchronised access via tokens"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=194017"},"MSA-12-0009")," - Role access issue"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=194019"},"MSA-12-0011")," - Browser autofill password issue"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=194020"},"MSA-12-0012")," - Form validation issue")),(0,s.kt)("h2",{id:"fixes-and-improvements"},"Fixes and improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-30623"},"MDL-30623")," - Guest are no longer asked for an enrolment password when trying to enter courses"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-30569"},"MDL-30569")," - Editing the front page when defaulthomepage = mymoodle now works as expected"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-28180"},"MDL-28180")," - Duplicating an assignment that has course completion enabled no longer breaks course completion for the course"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-27314"},"MDL-27314")," - It is now possible to delete or regrade quiz attempts in separate groups mode"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-28282"},"MDL-28282")," - Groups/grouping support in SCORM 2.0 is now working")),(0,s.kt)("h2",{id:"translations"},"Translations"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_2.2.1"},"Notas de Moodle 2.2.1")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_2.2.1"},"Notes de mise \xe0 jour de Moodle 2.2.1"))))}h.isMDXComponent=!0}}]);
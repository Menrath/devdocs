"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[13686],{15116:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return n},metadata:function(){return m},toc:function(){return u}});var a=r(83117),o=r(80102),s=(r(67294),r(3905)),l=r(13904),i=["components"],n={title:"Moodle 3.11.6",tags:["Release notes","Moodle 3.11"],sidebar_position:6,moodleVersion:"3.11.6"},d=void 0,m={unversionedId:"releases/3.11/3.11.6",id:"releases/3.11/3.11.6",title:"Moodle 3.11.6",description:"Release date: 14 March 2022",source:"@site/general/releases/3.11/3.11.6.md",sourceDirName:"releases/3.11",slug:"/releases/3.11/3.11.6",permalink:"/devdocs/general/releases/3.11/3.11.6",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/3.11/3.11.6.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 3.11",permalink:"/devdocs/general/tags/moodle-3-11"}],version:"current",lastUpdatedBy:"Sara Arjona",lastUpdatedAt:1654598646,formattedLastUpdatedAt:"07/06/2022",sidebarPosition:6,frontMatter:{title:"Moodle 3.11.6",tags:["Release notes","Moodle 3.11"],sidebar_position:6,moodleVersion:"3.11.6"},sidebar:"releaseNotes",previous:{title:"Moodle 3.11.5",permalink:"/devdocs/general/releases/3.11/3.11.5"},next:{title:"Moodle 3.11.7",permalink:"/devdocs/general/releases/3.11/3.11.7"}},p={},u=[{value:"General fixes and improvements",id:"general-fixes-and-improvements",level:2},{value:"Accessibility improvements",id:"accessibility-improvements",level:2},{value:"Security improvements",id:"security-improvements",level:2},{value:"Security fixes",id:"security-fixes",level:2},{value:"Translations",id:"translations",level:2}],c={toc:u};function k(e){var t=e.components,r=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(l.Z,(0,a.Z)({frontMatter:n},void 0!==m?{metadata:m}:{},{mdxType:"MoodlePageBanner"})),(0,s.kt)("p",null,"Release date: 14 March 2022"),(0,s.kt)("p",null,"Here is ",(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%223.11.6%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true"},"the full list of fixed issues in 3.11.6"),"."),(0,s.kt)("h2",{id:"general-fixes-and-improvements"},"General fixes and improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-72762"},"MDL-72762")," - Backup fails if section name has only blank spaces"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-72246"},"MDL-72246")," - 3.11 Dashboard Loads Slowly (30 seconds)"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-72915"},"MDL-72915")," - Drag and Drop onto image: Issue moving draggable items with Unlimited option"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-73846"},"MDL-73846"),' - "Prepare submissions for annotation" task tries to process the whole queue in one go'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64770"},"MDL-64770")," - User profile fields uniqueness don't work while user importing"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-72646"},"MDL-72646")," - MIME type headers for theme fonts are deprecated"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67428"},"MDL-67428")," - Performance issues with filters applied to course/category titles in navigation"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-73824"},"MDL-73824")," - Decimal comma & PHP8.0"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-66940"},"MDL-66940")," - 'View external Criteria URL' on Badgr links to badge awarded to somebody else"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69965"},"MDL-69965")," - MoodleNet profile field is displayed even when MoodleNet is disabled"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-73915"},"MDL-73915")," - Bump NodeJS version, dependencies, and update JS build process, drop IE support"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-73827"},"MDL-73827")," - URL blocked during OBv2.1 user authentication"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69966"},"MDL-69966")," - Quiz: start attempt button should be a primary button"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-73450"},"MDL-73450")," - is_antelope_file_format_no_more_supported check should return true on Aurora MySQL 8.0+"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-73588"},"MDL-73588")," - Unexpected content in the CURLOPT_FILE output stream on redirects"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-73905"},"MDL-73905")," - Wrong coding_exception used on problems sending messages"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-73954"},"MDL-73954")," - Quiz percentage should round the percentage the same way as the other grades"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-73582"},"MDL-73582")," - Add endpoint to provide the Moodle version"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-73868"},"MDL-73868")," - Remove multiple slashes in URL image for Open Badges services"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-73636"},"MDL-73636"),' - Activity "Mark as done" buttons contain unformatted module names'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-73625"},"MDL-73625")," - Reorder and review the mobile settings for app 4.0"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-72937"},"MDL-72937")," - Saving a user profile Moodlenet field > 255 characters causes exception"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-73765"},"MDL-73765")," - Scheduled task are randomly allocated to 0 - 23 minutes range only"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-72852"},"MDL-72852")," - If there are no course badges, students shouldn't have a link to a page saying there are no badges available"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-73603"},"MDL-73603")," - Webservice token creation form throws exceptions during validation"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-73561"},"MDL-73561"),' - "Grades were set for X items" message displayed as alert-danger')),(0,s.kt)("h2",{id:"accessibility-improvements"},"Accessibility improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-73584"},"MDL-73584")," - Required ARIA children role not present: group, menuitemradio, menuitem, menuitemcheckbox"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70792"},"MDL-70792")," - CSS changes for the moremenu"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-72412"},"MDL-72412")," - aria-label attribute is invalid for informative icon fonts")),(0,s.kt)("h2",{id:"security-improvements"},"Security improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-72734"},"MDL-72734")," - Inconsistent checks used to determine whether to run task through web UI")),(0,s.kt)("h2",{id:"security-fixes"},"Security fixes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=432947"},"MSA-22-0005")," SQL injection risk in Badges criteria code"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=432948"},"MSA-22-0006")," Users with moodle/site:uploadusers but without moodle/user:delete could delete users"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=432949"},"MSA-22-0007")," Possible to reach the profile field badge criteria on a course page"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=432950"},"MSA-22-0008")," Upgrade PHPMailer to latest version (upstream)"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=432951"},"MSA-22-0009")," Upgrade CKEditor included in h5p-editor-php-library to latest version (upstream)")),(0,s.kt)("h2",{id:"translations"},"Translations"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_3.11.6"},"Notes de mise \xe0 jour de Moodle 3.11.6")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_3.11.6"},"Notas de Moodle 3.11.6"))))}k.isMDXComponent=!0}}]);
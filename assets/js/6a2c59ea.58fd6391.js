"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[67079],{47744:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return r},metadata:function(){return p},toc:function(){return c}});var i=a(83117),n=a(80102),l=(a(67294),a(3905)),s=a(13904),o=["components"],r={title:"File API internals",tags:["Architecture","File API","Files","Internals"]},d=void 0,p={unversionedId:"apis/subsystems/files/internals",id:"apis/subsystems/files/internals",title:"File API internals",description:"The goals of the File API are to:",source:"@site/docs/apis/subsystems/files/internals.md",sourceDirName:"apis/subsystems/files",slug:"/apis/subsystems/files/internals",permalink:"/devdocs/docs/apis/subsystems/files/internals",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/docs/apis/subsystems/files/internals.md",tags:[{label:"Architecture",permalink:"/devdocs/docs/tags/architecture"},{label:"File API",permalink:"/devdocs/docs/tags/file-api"},{label:"Files",permalink:"/devdocs/docs/tags/files"},{label:"Internals",permalink:"/devdocs/docs/tags/internals"}],version:"current",lastUpdatedBy:"Sara Arjona",lastUpdatedAt:1654598646,formattedLastUpdatedAt:"07/06/2022",frontMatter:{title:"File API internals",tags:["Architecture","File API","Files","Internals"]},sidebar:"docs",previous:{title:"File Browser API",permalink:"/devdocs/docs/apis/subsystems/files/browsing"},next:{title:"Groups API",permalink:"/devdocs/docs/apis/subsystems/groups"}},m={},c=[{value:"Overview",id:"overview",level:2},{value:"File API internals",id:"file-api-internals",level:2},{value:"File System",id:"file-system",level:3},{value:"File Storage",id:"file-storage",level:3},{value:"Files table",id:"files-table",level:3},{value:"Implementation of basic operations",id:"implementation-of-basic-operations",level:2},{value:"File serving",id:"file-serving",level:2},{value:"File related user interfaces",id:"file-related-user-interfaces",level:2},{value:"Form fields",id:"form-fields",level:3},{value:"Integration with the HTML editor",id:"integration-with-the-html-editor",level:3},{value:"Other issues",id:"other-issues",level:2},{value:"Unicode support in zip format",id:"unicode-support-in-zip-format",level:3},{value:"Client software",id:"client-software",level:4},{value:"PHP extraction",id:"php-extraction",level:4},{value:"Large file support",id:"large-file-support",level:4},{value:"Tar Alternative",id:"tar-alternative",level:4},{value:"Summary",id:"summary",level:4},{value:"Tar packer",id:"tar-packer",level:3},{value:"See also",id:"see-also",level:2}],u={toc:c};function f(e){var t=e.components,a=(0,n.Z)(e,o);return(0,l.kt)("wrapper",(0,i.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(s.Z,(0,i.Z)({frontMatter:r},void 0!==p?{metadata:p}:{},{mdxType:"MoodlePageBanner"})),(0,l.kt)("p",null,"The goals of the File API are to:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"allow files to be stored within Moodle, as part of the content"),(0,l.kt)("li",{parentName:"ul"},"use a consistent and flexible approach for all file handling throughout Moodle"),(0,l.kt)("li",{parentName:"ul"},"give components control over which users can access a file, using capabilities and other local rules"),(0,l.kt)("li",{parentName:"ul"},"make it easy to determine which parts of Moodle use which files, to simplify operations like backup and restore"),(0,l.kt)("li",{parentName:"ul"},"track where files originally came from"),(0,l.kt)("li",{parentName:"ul"},"avoid redundant storage, when the same file is used twice"),(0,l.kt)("li",{parentName:"ul"},"fully support Unicode file names, irrespective of the capabilities of the underlying file system"),(0,l.kt)("li",{parentName:"ul"},"support alternative file systems, including cloud-based APIs")),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,"The File API is a set of core interfaces to allow the rest of Moodle to store, serve, and manage files. It applies to all files that are part of the Moodle site's content. It is not used for internal files, such as those in the following subdirectories:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"dataroot")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"temp")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"lang")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"cache")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"environment")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"filter")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"search")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"sessions")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"upgradelogs"))),(0,l.kt)("p",null,"See the ",(0,l.kt)("a",{parentName:"p",href:"/devdocs/docs/apis/subsystems/files/"},"File API")," documentation for information on using the File API."),(0,l.kt)("p",null,"The API can be subdivided into the following parts:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#file-system"},(0,l.kt)("em",{parentName:"a"},"File system"))," - Low level storage of file content, without access control"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#file-storage"},(0,l.kt)("em",{parentName:"a"},"File storage"))," - Storage of file metadata"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#file-serving"},(0,l.kt)("em",{parentName:"a"},"File serving"))," - Handle the retrieval and serving of files from the File storage API, including:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"serving the files on request"),(0,l.kt)("li",{parentName:"ul"},"performing appropriate access checks"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"File related user interfaces")," - Provides the interface for uploading files, including:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Form elements allowing users to select a file using the file picker, and have it stored within Moodle."),(0,l.kt)("li",{parentName:"ul"},"UI for users to manage their files, replacing the old course files UI"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"File browsing API")," - Allow code to browse and optionally manipulate the file areas, including:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"find information about available files in each area"),(0,l.kt)("li",{parentName:"ul"},"print links to files"),(0,l.kt)("li",{parentName:"ul"},"optionally move, rename, copy, delete, and perform other user-facing operations.")))),(0,l.kt)("h2",{id:"file-api-internals"},"File API internals"),(0,l.kt)("h3",{id:"file-system"},"File System"),(0,l.kt)("p",null,"The File System API allows for files to be stored in alternative underlying file systems, for example in an cloud-based API such as ",(0,l.kt)("a",{parentName:"p",href:"https://aws.amazon.com/s3"},"Amazon S3"),". Each file is stored and retrieved using a ",(0,l.kt)("inlineCode",{parentName:"p"},"contenthash"),"."),(0,l.kt)("p",null,"The file content hash is calculated by taking a SHA1 hash of the content of the file. This should be unique enough so as to allow any number of files to be uploaded to the File API without any natural collisions occurring, and allows the File system to store a single copy of a file, no matter how many times that file content is used within user-generated content."),(0,l.kt)("p",null,"This means Moodle can not store two files with ",(0,l.kt)("em",{parentName:"p"},"different")," content and the ",(0,l.kt)("em",{parentName:"p"},"same")," SHA1 hash, luckily it is extremely unlikely that this would ever happen. Technically it is also possible to implement reliable collision tests (with some performance cost), though Moodle currently checks for this case using a simple file length check in addition to SHA1 hash."),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"The default file system shipped with Moodle stores all files on disk within the ",(0,l.kt)("inlineCode",{parentName:"p"},"moodledata")," sub-directory of ",(0,l.kt)("inlineCode",{parentName:"p"},"$CFG->dataroot"),"."),(0,l.kt)("p",{parentName:"div"},"Suppose a file has a content hash of ",(0,l.kt)("inlineCode",{parentName:"p"},"081371cb102fa559e81993fddc230c79205232ce"),", then it will be stored in on disk as ",(0,l.kt)("inlineCode",{parentName:"p"},"moodledata/filedir/08/13/081371cb102fa559e81993fddc230c79205232ce"),"."))),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Validation of files")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"As files in the standard disk-based file storage API are named using their SHA1 hash, there is a simple way of validating files have not become corrupted using the 'sha1sum' command available in most GNU/Linux distributions."),(0,l.kt)("p",{parentName:"div"},"Where a file is correct then the filename will match the ",(0,l.kt)("inlineCode",{parentName:"p"},"sha1sum")," of the file. for example:"),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-console"},"  $ cd /moodlepath/moodledata/filedir/1d/df/\n  $ sha1sum 1ddf5b375fcb74929cdd7efda4f47efc61414edf\n  1ddf5b375fcb74929cdd7efda4f47efc61414edf  1ddf5b375fcb74929cdd7efda4f47efc61414edf\n")),(0,l.kt)("p",{parentName:"div"},"Where a file has become corrupted, these will differ:"),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-console"},"  $ cd /moodlepath/moodledata/filedir/42/32/\n  $ sha1sum 42327aac8ce5741f51f42be298fa63686fe81b7a\n  9442188152c02f65267103d78167d122c87002cd  42327aac8ce5741f51f42be298fa63686fe81b7a\n")))),(0,l.kt)("h3",{id:"file-storage"},"File Storage"),(0,l.kt)("p",null,"The File Storage API is provided by the ",(0,l.kt)("inlineCode",{parentName:"p"},"\\file_storage")," class, and stores all metadata relating to a file. It interacts with the File System API and the ",(0,l.kt)("inlineCode",{parentName:"p"},"\\stored_file")," class to provide all low-level storage functionality."),(0,l.kt)("h3",{id:"files-table"},"Files table"),(0,l.kt)("p",null,"The File system API stores all file records in the ",(0,l.kt)("inlineCode",{parentName:"p"},"files")," database table. This table contains one entry for each usage of a file. Enough information is kept here so that the file can be fully identified and retrieved again if necessary."),(0,l.kt)("p",null,"If, for example, the same image is used in a user's profile, and a forum post, then there will be two rows in this table, one for each use of the file, and Moodle will treat the two as separate files, even though the file is only stored once on disc."),(0,l.kt)("p",null,"Entries with a file name of ",(0,l.kt)("inlineCode",{parentName:"p"},"."),"represent directories. Directory entries like this are created automatically when a file is added within them."),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"The name ",(0,l.kt)("inlineCode",{parentName:"p"},"files")," is used in the plural form, even though it goes against the ",(0,l.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Database"},"coding guidelines")," because ",(0,l.kt)("inlineCode",{parentName:"p"},"file")," is a reserved word in some SQL dialects."))),(0,l.kt)("h2",{id:"implementation-of-basic-operations"},"Implementation of basic operations"),(0,l.kt)("p",null,"The low level access API is defined in the ",(0,l.kt)("inlineCode",{parentName:"p"},"\\file_storage")," class, which can be obtained using the ",(0,l.kt)("inlineCode",{parentName:"p"},"get_file_storage()")," function, for example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"$fs = get_file_storage();\n")),(0,l.kt)("p",null,"Details of common operations are documented in the ",(0,l.kt)("a",{parentName:"p",href:"/devdocs/docs/apis/subsystems/files/"},"File System API")," documentation"),(0,l.kt)("h2",{id:"file-serving"},"File serving"),(0,l.kt)("p",null,"The File serving component of the File API deals with serving files to the user. This is typically in the form of browser requests. Moodle has several main files to handle serving of files. These include:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"draftfile.php")," - the script used to serve files in a user's ",(0,l.kt)("inlineCode",{parentName:"li"},"draft")," file area."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"pluginfile.php")," - the script typically used by a plugin to access content."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"tokenpluginfile.php")," - the script typically used by a plugin to access content when a user is not logged in. This is usually in situations where a file is referred to in an e-mail or other similar scenario.")),(0,l.kt)("p",null,"It is the plugins responsibility to handle:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"access control"),(0,l.kt)("li",{parentName:"ul"},"optional XSS protection - student submitted files must not be served with normal headers, we have to force download instead; ideally there should be second wwwroot for serving of untrusted files"),(0,l.kt)("li",{parentName:"ul"},"links to these files are constructed on the fly from the relative links stored in database (see ",(0,l.kt)("a",{parentName:"li",href:"/devdocs/docs/apis/subsystems/files/#generating-a-url-to-your-files"},"Generating a URL to your files")," for further information).")),(0,l.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Each plugin should only ever use the File Storage API to access its ",(0,l.kt)("strong",{parentName:"p"},"own files"),"."))),(0,l.kt)("h2",{id:"file-related-user-interfaces"},"File related user interfaces"),(0,l.kt)("p",null,"Files are typically selected by users and uploaded to Moodle using the File manager, and the file picker."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("strong",{parentName:"li"},"file manager")," is an interface used to view, and delete existing files, and to add new files."),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("strong",{parentName:"li"},"file picker")," is an interface, often accessed using the ",(0,l.kt)("em",{parentName:"li"},"file manager"),", to select files for upload to Moodle. The file picker makes use of ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Repository_API"},"file repositories"),".")),(0,l.kt)("h3",{id:"form-fields"},"Form fields"),(0,l.kt)("p",null,"Moodle defines two form field types as part of the ",(0,l.kt)("inlineCode",{parentName:"p"},"formslib")," integration, these are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"filepicker"),"; and"),(0,l.kt)("li",{parentName:"ul"},"the ",(0,l.kt)("inlineCode",{parentName:"li"},"filemanager"),".")),(0,l.kt)("h3",{id:"integration-with-the-html-editor"},"Integration with the HTML editor"),(0,l.kt)("p",null,"Each instance of an HTML editor can be told to store related files in a particular file area."),(0,l.kt)("p",null,"During editing, files are stored in a draft files area in the ",(0,l.kt)("inlineCode",{parentName:"p"},"user")," component. Then when the form is submitted they are moved into the real file area."),(0,l.kt)("h2",{id:"other-issues"},"Other issues"),(0,l.kt)("h3",{id:"unicode-support-in-zip-format"},"Unicode support in zip format"),(0,l.kt)("p",null,"Zip format is an old standard for compressing files. It was created long before Unicode existed, and Unicode support was only recently added. There are several ways used for encoding of non-ASCII characters in path names, but unfortunately it is not very standardised. Most Windows packers use DOS encoding."),(0,l.kt)("h4",{id:"client-software"},"Client software"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Windows built-in compression - bundled with Windows, non-standard DOS encoding only"),(0,l.kt)("li",{parentName:"ul"},"WinZip - shareware, Unicode option (since v11.2)"),(0,l.kt)("li",{parentName:"ul"},"TotalCommander - shareware, single byte(DOS) encoding only"),(0,l.kt)("li",{parentName:"ul"},"7-Zip - free, Unicode or DOS encoding depending on characters used in file name (since v4.58beta)"),(0,l.kt)("li",{parentName:"ul"},"Info-ZIP - free, uses some weird character set conversions")),(0,l.kt)("h4",{id:"php-extraction"},"PHP extraction"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Info-ZIP binary execution - no Unicode support at all, mangles character sets in file names (depends on OS, see docs), files must be copied to temp directory before compression and after extraction"),(0,l.kt)("li",{parentName:"ul"},"PclZip PHP library - reads single byte encoded names only, problems with random problems and higher memory usage."),(0,l.kt)("li",{parentName:"ul"},"Zip PHP extension - kind of works in latest PHP versions")),(0,l.kt)("h4",{id:"large-file-support"},"Large file support"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"PHP running under 32bit operating systems does not support files >2GB. This might be a potential problem for larger backups.")),(0,l.kt)("h4",{id:"tar-alternative"},"Tar Alternative"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"tar with gzip compression - easy to implement in PHP + zlib extension (PclTar, Tar from PEAR or custom code)"),(0,l.kt)("li",{parentName:"ul"},"no problem with unicode in *nix, Windows again expects DOS encoding :-("),(0,l.kt)("li",{parentName:"ul"},"seems suitable for backup/restore - yay!")),(0,l.kt)("h4",{id:"summary"},"Summary"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"added zip processing class that fully hides the underlying library"),(0,l.kt)("li",{parentName:"ol"},'using single byte encoding "garbage in/garbage out" approach for encoding of files in zip archives; add new ',(0,l.kt)("inlineCode",{parentName:"li"},"zipencoding")," string into lang packs (for example ",(0,l.kt)("inlineCode",{parentName:"li"},"cp852")," DOS charset for Czech locale) and use it during extraction (we might support true unicode later when PHP Zip extension does that)")),(0,l.kt)("h3",{id:"tar-packer"},"Tar packer"),(0,l.kt)("p",null,"In addition to the zip packer, a tar packer is also available. This creates\narchives in a compressed tar format (similar to the file created by ",(0,l.kt)("inlineCode",{parentName:"p"},"tar -czf example.tar.gz mycontent"),")."),(0,l.kt)("p",null,"The packer is currently limited to ASCII filenames and individual files are limited to 8GB each, but unlike zip there is no limit on the total filesize. It uses the old POSIX format and is compatible with GNU tar using default options."),(0,l.kt)("h2",{id:"see-also"},"See also"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Repository_API"},"Repository API")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Portfolio_API"},"Portfolio API")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Resource_module_file_API_migration"},"Resource module file API migration")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-14589"},"MDL-14589")," - File API Meta issue")))}f.isMDXComponent=!0}}]);
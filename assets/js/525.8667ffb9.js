(window.webpackJsonp=window.webpackJsonp||[]).push([[525],{1873:function(e,t,r){"use strict";r.r(t);var a=r(26),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"glossary"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#glossary"}},[e._v("#")]),e._v(" Glossary")]),e._v(" "),r("h2",{attrs:{id:"env-file"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#env-file"}},[e._v("#")]),e._v(" .env File")]),e._v(" "),r("p",[e._v("A special file which contains configuration information in the form of "),r("a",{attrs:{href:"#environment-variables"}},[e._v("environment variables")]),e._v(".")]),e._v(" "),r("p",[e._v("n8n uses the .env file to control how n8n works. You can set items such as username and password for the editor or your timezone using this file. See the "),r("RouterLink",{attrs:{to:"/reference/server-setup.html#_6-create-env-file"}},[e._v("n8n docs")]),e._v(" for more details.")],1),e._v(" "),r("p",[e._v("To learn more about the "),r("em",[e._v(".env")]),e._v(" file, read "),r("a",{attrs:{href:"https://itnext.io/manage-environment-variables-in-your-nodejs-application-with-dotenv-520914a9254b",target:"_blank",rel:"noopener noreferrer"}},[e._v("Manage Environment Variables in your NodeJS Application with dotenv"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"account"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#account"}},[e._v("#")]),e._v(" Account")]),e._v(" "),r("p",[e._v("Service which allows a user to connect to a product. User's identity is confirmed through shared "),r("a",{attrs:{href:"#Credentials"}},[e._v("credentials")]),e._v(". Also known as a "),r("em",[e._v("user account")]),e._v(".")]),e._v(" "),r("p",[e._v("Many of the "),r("a",{attrs:{href:"#Node"}},[e._v("nodes")]),e._v(" in n8n require you to have an account with the service for which the node was built. For example, Typeform.")]),e._v(" "),r("h2",{attrs:{id:"api"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[e._v("#")]),e._v(" API")]),e._v(" "),r("p",[e._v("An acronym for "),r("em",[e._v("Application Programming Interface")]),e._v(", it is a framework for sharing text information by providing a specifically formatted "),r("a",{attrs:{href:"#URL"}},[e._v("URL")]),e._v(" to retrieve desired information.")]),e._v(" "),r("p",[e._v("APIs are a critical part of many n8n "),r("a",{attrs:{href:"#Node"}},[e._v("nodes")]),e._v(" and "),r("a",{attrs:{href:"#Workflow"}},[e._v("workflows")]),e._v(". The nodes talk to the API that is provided by a service on the internet. n8n "),r("a",{attrs:{href:"#Workflow"}},[e._v("workflows")]),e._v(" allow these APIs to talk to each other.")]),e._v(" "),r("p",[e._v("For a more detailed understanding of APIs, see "),r("a",{attrs:{href:"https://www.altexsoft.com/blog/engineering/what-is-api-definition-types-specifications-documentation/",target:"_blank",rel:"noopener noreferrer"}},[e._v("What is API: Definition, Types, Specifications, Documentation"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[r("strong",[e._v("See also:")])]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#Header"}},[e._v("Header")])])]),e._v(" "),r("h2",{attrs:{id:"certificate"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#certificate"}},[e._v("#")]),e._v(" Certificate")]),e._v(" "),r("p",[e._v("A file or character string that is used to encrypt and decrypt information between two entities (e.g. computers, applications, users, etc.). It is used to ensure that anyone who intercepts the information between the two entities will not be able to read the information.")]),e._v(" "),r("p",[e._v("n8n uses certificates to keep user information safe when working in the "),r("a",{attrs:{href:"#editor-ui"}},[e._v("Editor UI")]),e._v(". You can also "),r("RouterLink",{attrs:{to:"/reference/configuration.html"}},[e._v("customize the cetificate")]),e._v(" that you use in n8n.")],1),e._v(" "),r("p",[e._v("For further information, see "),r("a",{attrs:{href:"https://www.youtube.com/watch?v=LRMBZhdFjDI",target:"_blank",rel:"noopener noreferrer"}},[e._v("What are certificates?"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[r("strong",[e._v("See also:")])]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#Encryption-Key"}},[e._v("Encryption Key")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#SSL"}},[e._v("SSL")])])]),e._v(" "),r("h2",{attrs:{id:"cli"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cli"}},[e._v("#")]),e._v(" CLI")]),e._v(" "),r("p",[e._v("An acronym for "),r("em",[e._v("Command Line Interface")]),e._v(", it is a text-based form of processing computer commands.")]),e._v(" "),r("p",[e._v("It is possible to "),r("RouterLink",{attrs:{to:"/reference/start-workflows-via-cli.html"}},[e._v("start a workflow or change its status")]),e._v(" using the CLI in n8n.")],1),e._v(" "),r("p",[e._v("To learn more, see "),r("a",{attrs:{href:"https://www.w3schools.com/whatis/whatis_cli.asp",target:"_blank",rel:"noopener noreferrer"}},[e._v("What is Command Line Interface (CLI)?"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"connection"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#connection"}},[e._v("#")]),e._v(" Connection")]),e._v(" "),r("p",[e._v("A link between two or more "),r("a",{attrs:{href:"#Node"}},[e._v("nodes")]),e._v(" that allows data to flow from one node to another.")]),e._v(" "),r("p",[e._v("This is a "),r("RouterLink",{attrs:{to:"/getting-started/key-components.html#connection"}},[e._v("core concept")]),e._v(" in n8n.")],1),e._v(" "),r("h2",{attrs:{id:"credentials"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#credentials"}},[e._v("#")]),e._v(" Credentials")]),e._v(" "),r("p",[e._v("Unique pieces of information that identifies a user or a service. A common form of credentials is a "),r("a",{attrs:{href:"#Username"}},[e._v("username")]),e._v(" and "),r("a",{attrs:{href:"#Password"}},[e._v("password")]),e._v(" pair.")]),e._v(" "),r("p",[e._v("n8n "),r("RouterLink",{attrs:{to:"/nodes/credentials/"}},[e._v("stores encrypted credentials")]),e._v(" so that it can automate tasks that require this information to run properly.")],1),e._v(" "),r("p",[e._v("For more information, see "),r("a",{attrs:{href:"https://www.techopedia.com/definition/10259/credentials",target:"_blank",rel:"noopener noreferrer"}},[e._v("Credentials"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[r("strong",[e._v("See also:")])]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#Token"}},[e._v("Token")])])]),e._v(" "),r("h2",{attrs:{id:"docker"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[e._v("#")]),e._v(" Docker")]),e._v(" "),r("p",[e._v("A system to build, run and share applications with all of the services bundled to support the application in one package.")]),e._v(" "),r("p",[e._v("n8n has created a "),r("RouterLink",{attrs:{to:"/reference/docker.html"}},[e._v("docker image")]),e._v(" so that users who have a docker environment can quickly install and run n8n.")],1),e._v(" "),r("p",[e._v("For more information, read "),r("a",{attrs:{href:"https://docs.docker.com/get-started/overview/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker overview"),r("OutboundLink")],1),e._v(" and "),r("a",{attrs:{href:"https://docker-curriculum.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("A Docker Tutorial for Beginners"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"editor-ui"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#editor-ui"}},[e._v("#")]),e._v(" Editor UI")]),e._v(" "),r("p",[e._v("In n8n, this is the web interface used to create "),r("a",{attrs:{href:"#Workflow"}},[e._v("workflows")]),e._v(". It is accessed through a web browser at a designated website address.")]),e._v(" "),r("p",[e._v("To learn more about user interfaces, see "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/User_interface",target:"_blank",rel:"noopener noreferrer"}},[e._v("User interface"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"encryption-key"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#encryption-key"}},[e._v("#")]),e._v(" Encryption Key")]),e._v(" "),r("p",[e._v("A piece of data, either string or binary, which is used to encode information so that it cannot be easily read. Encryption keys are often long string of seemingly random characters.")]),e._v(" "),r("p",[e._v("n8n will sometimes use encryption keys for accessing "),r("a",{attrs:{href:"#API"}},[e._v("APIs")]),e._v(" when required. It also uses a "),r("RouterLink",{attrs:{to:"/nodes/node-basics.html#credentials"}},[e._v("personal encryption key")]),e._v(" to secure credentials.")],1),e._v(" "),r("p",[e._v("For more information, see "),r("a",{attrs:{href:"https://medium.com/codeclan/what-are-encryption-keys-and-how-do-they-work-cc48c3053bd6",target:"_blank",rel:"noopener noreferrer"}},[e._v("What are encryption keys and how do they work? 🔐"),r("OutboundLink")],1)]),e._v(" "),r("p",[r("strong",[e._v("See also:")])]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#SSL"}},[e._v("SSL")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#Certificate"}},[e._v("Certificate")])])]),e._v(" "),r("h2",{attrs:{id:"environment-variables"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#environment-variables"}},[e._v("#")]),e._v(" Environment Variables")]),e._v(" "),r("p",[e._v("Environment variables are predetermined values that typically get used to provide the ability to configure your program from outside of your application. An environment variable consists of a key-value pair. For example, "),r("code",[e._v("N8N_BASIC_AUTH_USER=user")]),e._v(". Here, "),r("code",[e._v("N8N_BASIC_AUTH_USER")]),e._v(" is the key and "),r("code",[e._v("user")]),e._v(" is the value.")]),e._v(" "),r("p",[e._v("n8n uses environment variables that help you configure your self-hosted n8n instance. You can use environment variables to set "),r("a",{attrs:{href:"#username"}},[e._v("username")]),e._v(" and "),r("a",{attrs:{href:"#password"}},[e._v("password")]),e._v(" for your n8n instance, configure the timezone, and a lot more. Refer to the "),r("a",{attrs:{href:"https://docs.n8n.io/reference/configuration.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("configuration"),r("OutboundLink")],1),e._v(" page to learn more about the environment variables used in n8n.")]),e._v(" "),r("h2",{attrs:{id:"execution"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#execution"}},[e._v("#")]),e._v(" Execution")]),e._v(" "),r("p",[e._v("A completed run of a "),r("a",{attrs:{href:"#Workflow"}},[e._v("workflow")]),e._v(" from start to finish.")]),e._v(" "),r("p",[e._v("n8n logs workflow executions and allows the user to see if the workflow completed successfully or not.")]),e._v(" "),r("p",[e._v("n8n also has the ability to execute one workflow from another workflow.")]),e._v(" "),r("p",[e._v("To learn more, see "),r("a",{attrs:{href:"https://windowsreport.com/execution-computing/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Execution (computing)"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"expression"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#expression"}},[e._v("#")]),e._v(" Expression")]),e._v(" "),r("p",[e._v("A string of characters and symbols in a programming language that represents a value depending upon its input.")]),e._v(" "),r("p",[e._v("n8n uses "),r("RouterLink",{attrs:{to:"/nodes/expressions.html"}},[e._v("expressions")]),e._v(" extensively when a "),r("a",{attrs:{href:"#Node"}},[e._v("node")]),e._v(" is referring to another node for input.")],1),e._v(" "),r("p",[e._v("Find out more about "),r("em",[e._v("expressions")]),e._v(" by reading "),r("a",{attrs:{href:"https://www.techopedia.com/definition/1808/expression-computer-science",target:"_blank",rel:"noopener noreferrer"}},[e._v("Expression"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"fair-code"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#fair-code"}},[e._v("#")]),e._v(" Fair-code")]),e._v(" "),r("p",[e._v("A software model very similar to open source which allows developers to receive remuneration for use in a for profit product.")]),e._v(" "),r("p",[e._v("n8n is licensed under the fair-code model. See "),r("a",{attrs:{href:"https://faircode.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("faircode.io"),r("OutboundLink")],1),e._v(" for more details.")]),e._v(" "),r("h2",{attrs:{id:"function"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#function"}},[e._v("#")]),e._v(" Function")]),e._v(" "),r("p",[e._v("In programming, a set of reusable commands designed to be run together and launched by other commands in the code. It may or may not receive input from the command that launches it.")]),e._v(" "),r("p",[e._v("Many of the nodes in n8n behave like functions, receiving specific input to generate a specific output.")]),e._v(" "),r("p",[e._v("To learn more about "),r("em",[e._v("functions")]),e._v(", see "),r("a",{attrs:{href:"https://www.tutorialspoint.com/computer_programming/computer_programming_functions.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("Computer Programming - Functions"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"ip-address"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ip-address"}},[e._v("#")]),e._v(" IP Address")]),e._v(" "),r("p",[e._v("A string of numbers and letters which represents the location of an electronic device on a TCP/IP network.")]),e._v(" "),r("p",[e._v("n8n will often refer to "),r("RouterLink",{attrs:{to:"/reference/configuration.html"}},[e._v("IP addresses")]),e._v(" when accessing information on a system other than itself. This is more common when the service is on the local network rather than on the internet.")],1),e._v(" "),r("p",[e._v("If you want to learn more about "),r("em",[e._v("IP addresses")]),e._v(", see "),r("a",{attrs:{href:"https://computer.howstuffworks.com/internet/basics/what-is-an-ip-address.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("What Is an IP Address?"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"javascript"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#javascript"}},[e._v("#")]),e._v(" JavaScript")]),e._v(" "),r("p",[e._v("A modern programming language popular with web platforms used to create interactive web interfaces.")]),e._v(" "),r("p",[e._v("While n8n is written in TypeScript, the final code generated is JavaScript and the "),r("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Function/"}},[e._v("Function node")]),e._v(" uses JavaScript to create customized "),r("a",{attrs:{href:"#Node"}},[e._v("nodes")]),e._v(". "),r("RouterLink",{attrs:{to:"/reference/javascript-code-snippets.html"}},[e._v("JavaScript")]),e._v(" is used in the n8n's Function nodes.")],1),e._v(" "),r("p",[e._v("To learn more about Javascript, visit "),r("a",{attrs:{href:"https://www.w3schools.com/js/DEFAULT.asp",target:"_blank",rel:"noopener noreferrer"}},[e._v("Javascript Tutorial"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"json"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#json"}},[e._v("#")]),e._v(" JSON")]),e._v(" "),r("p",[e._v("An open standard file and data format commonly used with "),r("a",{attrs:{href:"#JavaScript"}},[e._v("JavaScript")]),e._v(". It is easy for humans to read and for computers to parse.")]),e._v(" "),r("p",[e._v("The majority of data that is transferred from one "),r("a",{attrs:{href:"#Node"}},[e._v("node")]),e._v(" to another in n8n is most likely in the JSON format.")]),e._v(" "),r("p",[e._v("For further reading, please see "),r("a",{attrs:{href:"https://www.json.org/json-en.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Introducing JSON"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"header"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#header"}},[e._v("#")]),e._v(" Header")]),e._v(" "),r("p",[e._v("Section of an HTTP request message that defines allows extra information to be passed between the transmitter and receiver.")]),e._v(" "),r("p",[e._v("n8n has the ability to send custom header information to many "),r("a",{attrs:{href:"#API"}},[e._v("APIs")]),e._v(", specifically in the "),r("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/HTTPRequest/"}},[e._v("HTTP Request node")]),e._v(".")],1),e._v(" "),r("p",[e._v("For further information, see "),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Glossary/Request_header",target:"_blank",rel:"noopener noreferrer"}},[e._v("Request header"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"node"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#node"}},[e._v("#")]),e._v(" Node")]),e._v(" "),r("p",[e._v("The basic building block for n8n. Each "),r("a",{attrs:{href:"#Node"}},[e._v("node")]),e._v(" is designed with a specific purpose of receiving, processing or outputting data.")]),e._v(" "),r("p",[e._v("For more information, see "),r("RouterLink",{attrs:{to:"/nodes/node-basics.html"}},[e._v("Node Basics")]),e._v(".")],1),e._v(" "),r("h2",{attrs:{id:"nodejs"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#nodejs"}},[e._v("#")]),e._v(" NodeJS")]),e._v(" "),r("p",[e._v("A package of "),r("a",{attrs:{href:"#JavaScript"}},[e._v("JavaScript")]),e._v(" file used to provide everything needed to run JavaScript code without a web browser.")]),e._v(" "),r("p",[e._v("n8n runs on top of NodeJS and uses its libraries extensively.")]),e._v(" "),r("p",[e._v("Read more at "),r("a",{attrs:{href:"https://nodejs.org/en/about/",target:"_blank",rel:"noopener noreferrer"}},[e._v("About Node.js"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[r("strong",[e._v("See also:")])]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#TypeScript"}},[e._v("TypeScript")])])]),e._v(" "),r("h2",{attrs:{id:"npm"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#npm"}},[e._v("#")]),e._v(" npm")]),e._v(" "),r("p",[e._v("A program that installs, updates and removes "),r("a",{attrs:{href:"#JavaScript"}},[e._v("JavaScript")]),e._v(" "),r("a",{attrs:{href:"#Package"}},[e._v("Packages")]),e._v(".")]),e._v(" "),r("p",[e._v("n8n is "),r("RouterLink",{attrs:{to:"/getting-started/quickstart.html#install-with-npm"}},[e._v("installed")]),e._v(" and updated using npm.")],1),e._v(" "),r("p",[e._v("Find out more at "),r("a",{attrs:{href:"https://docs.npmjs.com/about-npm",target:"_blank",rel:"noopener noreferrer"}},[e._v("About npm"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[r("strong",[e._v("See also:")])]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#npx"}},[e._v("npx")])])]),e._v(" "),r("h2",{attrs:{id:"npx"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#npx"}},[e._v("#")]),e._v(" npx")]),e._v(" "),r("p",[e._v("A program that will download, run, then delete a "),r("a",{attrs:{href:"#JavaScript"}},[e._v("JavaScript")]),e._v(" "),r("a",{attrs:{href:"#Package"}},[e._v("Packages")]),e._v(". Often used for quickly testing what a package will do without completely installing it.")]),e._v(" "),r("p",[e._v("You can "),r("RouterLink",{attrs:{to:"/getting-started/quickstart.html#give-n8n-a-spin"}},[e._v("try out n8n without installing it")]),e._v(" to your system using npx.")],1),e._v(" "),r("p",[e._v("For more information about "),r("em",[e._v("npx")]),e._v(", see "),r("a",{attrs:{href:"https://docs.npmjs.com/cli/v7/commands/npx",target:"_blank",rel:"noopener noreferrer"}},[e._v("npx documentation"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[r("strong",[e._v("See also:")])]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#npm"}},[e._v("npm")])])]),e._v(" "),r("h2",{attrs:{id:"package"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#package"}},[e._v("#")]),e._v(" Package")]),e._v(" "),r("p",[e._v("A group of "),r("a",{attrs:{href:"#JavaScript"}},[e._v("JavaScript")]),e._v(" files which are designed to work together for a specific purpose.")]),e._v(" "),r("p",[e._v("n8n is also distributed as an "),r("a",{attrs:{href:"#npm"}},[e._v("npm")]),e._v(" package.")]),e._v(" "),r("p",[e._v("For more information, see "),r("a",{attrs:{href:"https://www.techopedia.com/definition/4360/software-package",target:"_blank",rel:"noopener noreferrer"}},[e._v("software package"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[r("strong",[e._v("See also:")])]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#npx"}},[e._v("npx")])])]),e._v(" "),r("h2",{attrs:{id:"parameter"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#parameter"}},[e._v("#")]),e._v(" Parameter")]),e._v(" "),r("p",[e._v("Data that is passed to a program or script which is used for processing and directly effects the output or results generated.")]),e._v(" "),r("p",[e._v("Many n8n "),r("a",{attrs:{href:"#Node"}},[e._v("nodes")]),e._v(" accept parameters to customize their output.")]),e._v(" "),r("p",[e._v("The n8n "),r("a",{attrs:{href:"#CLI"}},[e._v("CLI")]),e._v(" also accepts parameters so that it knows how to properly execute.")]),e._v(" "),r("p",[e._v("For more information, see "),r("a",{attrs:{href:"https://www.bbc.co.uk/bitesize/guides/z9hykqt/revision/4",target:"_blank",rel:"noopener noreferrer"}},[e._v("Functions, procedures nad modules"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"password"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#password"}},[e._v("#")]),e._v(" Password")]),e._v(" "),r("p",[e._v("A secret string of characters provided to prove one's identity. Often used to gain access to restricted applications and systems.")]),e._v(" "),r("p",[e._v("The n8n "),r("a",{attrs:{href:"#editor-ui"}},[e._v("Editor UI")]),e._v(" can be password protected so that only authorized users can access the interface.")]),e._v(" "),r("p",[e._v("n8n also stores passwords as a part of "),r("a",{attrs:{href:"#Credentials"}},[e._v("credentials")]),e._v(" for some services.")]),e._v(" "),r("p",[e._v("To read more about "),r("em",[e._v("passwords")]),e._v(", see "),r("a",{attrs:{href:"https://it.uottawa.ca/security/identity-authentication-theft",target:"_blank",rel:"noopener noreferrer"}},[e._v("The Importance of passwords"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[r("strong",[e._v("See also:")])]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#Username"}},[e._v("Username")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#Token"}},[e._v("Token")])])]),e._v(" "),r("h2",{attrs:{id:"rest-api"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rest-api"}},[e._v("#")]),e._v(" REST API")]),e._v(" "),r("p",[e._v("See "),r("em",[r("a",{attrs:{href:"#API"}},[e._v("API")])])]),e._v(" "),r("h2",{attrs:{id:"root-user"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#root-user"}},[e._v("#")]),e._v(" Root User")]),e._v(" "),r("p",[e._v("In *NIX operating system, the user "),r("a",{attrs:{href:"#Account"}},[e._v("account")]),e._v(" that has no restrictions placed upon it within the system. The root user is typically only used for performing maintenance and upgrade tasks as improperly run applications using the root user account can cause significant damage to the system.")]),e._v(" "),r("p",[e._v("For the protection of the system, it is generally not recommended that n8n be run by the root user.")]),e._v(" "),r("p",[e._v("For more information about "),r("em",[e._v("root")]),e._v(", see "),r("a",{attrs:{href:"http://www.linfo.org/root.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("root Definition"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"ssl"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ssl"}},[e._v("#")]),e._v(" SSL")]),e._v(" "),r("p",[e._v("An acronym for "),r("em",[e._v("Secure Socket Layer")]),e._v(", it is the primary way that web based services are secured. A SSL "),r("a",{attrs:{href:"#Certificate"}},[e._v("certificate")]),e._v(" is often used on websites to encrypt the information that is travelling between a web server and a web page.")]),e._v(" "),r("p",[e._v("n8n uses SSL certificates to secure the n8n "),r("a",{attrs:{href:"#UI"}},[e._v("UI")]),e._v(" so that any information that is passed between the n8n server and the user's web browser is encrypted and cannot be spied upon when it is travelling between the two. It is possible to "),r("RouterLink",{attrs:{to:"/reference/configuration.html"}},[e._v("customize")]),e._v(" the SSL installation.")],1),e._v(" "),r("p",[e._v("For further reading, see "),r("a",{attrs:{href:"http://www.steves-internet-guide.com/ssl-certificates-explained/",target:"_blank",rel:"noopener noreferrer"}},[e._v("SSL and SSL Certificates Explained For Beginners"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"token"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#token"}},[e._v("#")]),e._v(" Token")]),e._v(" "),r("p",[e._v("A unique identifier, typically a long string of characters, used to increase the security of systems that request or transmit data. It is usually a shared secret between the sender and the receiver to allow either system to determine if they should be requesting/transmitting data. Tokens can also sometimes be used as "),r("a",{attrs:{href:"#encryption-key"}},[e._v("encryption keys")]),e._v(" to make the data which is transmitted illegible to thoses without the token.")]),e._v(" "),r("p",[e._v("n8n uses tokens often when requesting or sending data using "),r("a",{attrs:{href:"#API"}},[e._v("APIs")]),e._v(" or "),r("a",{attrs:{href:"#Webhook"}},[e._v("webhooks")]),e._v(".")]),e._v(" "),r("p",[e._v("For more information, see "),r("a",{attrs:{href:"https://whatis.techtarget.com/definition/token",target:"_blank",rel:"noopener noreferrer"}},[e._v("token"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"trigger"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#trigger"}},[e._v("#")]),e._v(" Trigger")]),e._v(" "),r("p",[e._v("A specific type of "),r("a",{attrs:{href:"#Node"}},[e._v("node")]),e._v(" that starts a "),r("a",{attrs:{href:"#Workflow"}},[e._v("workflow")]),e._v(" when it receives data from a source outside of the workflow itself.")]),e._v(" "),r("p",[e._v("A good example of a "),r("a",{attrs:{href:"https://docs.n8n.io/nodes/node-basics.html#trigger-nodes",target:"_blank",rel:"noopener noreferrer"}},[e._v("trigger node"),r("OutboundLink")],1),e._v(" in n8n is a "),r("a",{attrs:{href:"#Webhook"}},[e._v("webhook")]),e._v(". It listens for data coming into it and then starts a "),r("a",{attrs:{href:"#Workflow"}},[e._v("workflow")]),e._v(" when it sees data.")]),e._v(" "),r("p",[e._v("For more information about "),r("em",[e._v("triggers")]),e._v(", see "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Event-driven_programming",target:"_blank",rel:"noopener noreferrer"}},[e._v("Event Driven Programming"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"tunnel"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tunnel"}},[e._v("#")]),e._v(" Tunnel")]),e._v(" "),r("p",[e._v("An encrypted session between two systems used to secure data transmission.")]),e._v(" "),r("p",[e._v("n8n "),r("RouterLink",{attrs:{to:"/getting-started/quickstart.html#starting-n8n-with-tunnel"}},[e._v("uses a tunnel")]),e._v(" to allow external users to access n8n installations that are behind firewalls, typically for triggering "),r("a",{attrs:{href:"#Webhook"}},[e._v("webhooks")]),e._v(". This setup is recommended for testing use only.")],1),e._v(" "),r("p",[e._v("For further reading, see "),r("a",{attrs:{href:"https://www.techradar.com/vpn/vpn-tunnels-explained-how-to-keep-your-internet-data-secure",target:"_blank",rel:"noopener noreferrer"}},[e._v("VPN Tunnels explained: what are they and how can they keep your internet data secure"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"typescript"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#typescript"}},[e._v("#")]),e._v(" TypeScript")]),e._v(" "),r("p",[e._v("An open source programming language that extends the "),r("a",{attrs:{href:"#JavaScript"}},[e._v("JavaScript")]),e._v(" programming language.")]),e._v(" "),r("p",[e._v("n8n is written in TypeScript.")]),e._v(" "),r("p",[e._v("Read more at "),r("a",{attrs:{href:"https://www.typescriptlang.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Typescript"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"ui"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ui"}},[e._v("#")]),e._v(" UI")]),e._v(" "),r("p",[e._v("An acronym for "),r("em",[e._v("User Interface")]),e._v(", it is the method or tool a person uses to interact with a computer system and its software.")]),e._v(" "),r("p",[e._v("n8n has a web based UI, meaning that you program and interact with n8n using a web browser.")]),e._v(" "),r("p",[e._v("Learn more at "),r("a",{attrs:{href:"https://searchapparchitecture.techtarget.com/definition/user-interface-UI",target:"_blank",rel:"noopener noreferrer"}},[e._v("user interface (UI)"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"url"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#url"}},[e._v("#")]),e._v(" URL")]),e._v(" "),r("p",[e._v("An acronym for "),r("em",[e._v("Universal Resource Locator")]),e._v(", it is a string of characters that represents a network location. Most people's experience with URLs is in the form of a website address (e.g. https://n8n.io)")]),e._v(" "),r("p",[e._v("n8n's "),r("a",{attrs:{href:"#editor-ui"}},[e._v("Editor UI")]),e._v(" is accessed via an URL entered into a web browser (often https://localhost:5678).")]),e._v(" "),r("p",[e._v("Some "),r("a",{attrs:{href:"#Node"}},[e._v("nodes")]),e._v(" in n8n access resources on the internet using an URL.")]),e._v(" "),r("p",[e._v("Read more at "),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL",target:"_blank",rel:"noopener noreferrer"}},[e._v("What is a URL?"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"username"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#username"}},[e._v("#")]),e._v(" Username")]),e._v(" "),r("p",[e._v("A character string representing an "),r("a",{attrs:{href:"#Account"}},[e._v("account")]),e._v(" on a computer system. It is often paired with a "),r("a",{attrs:{href:"#Password"}},[e._v("password")]),e._v(" to allow a person to access information and services that the person has permissions to use.")]),e._v(" "),r("p",[e._v("n8n also stores usernames as a part of "),r("a",{attrs:{href:"#Credentials"}},[e._v("credentials")]),e._v(" for some services.")]),e._v(" "),r("p",[e._v("Read more at "),r("a",{attrs:{href:"https://techterms.com/definition/username",target:"_blank",rel:"noopener noreferrer"}},[e._v("Username"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[r("strong",[e._v("See also:")])]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#Token"}},[e._v("Token")])])]),e._v(" "),r("h2",{attrs:{id:"variable"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#variable"}},[e._v("#")]),e._v(" Variable")]),e._v(" "),r("p",[e._v("In computer programming, a variable represents a piece of data that can be changed or manipulated by the computer code. Variables are used to temporarily store information for processing.")]),e._v(" "),r("p",[e._v("n8n uses variables extensively throughout its programming and nodes.")]),e._v(" "),r("p",[e._v("Read more at "),r("a",{attrs:{href:"https://www.tutorialspoint.com/computer_programming/computer_programming_variables.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("Computer Programming - Variables"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[r("strong",[e._v("See also:")])]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#.env"}},[e._v(".env")])])]),e._v(" "),r("h2",{attrs:{id:"webhook"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#webhook"}},[e._v("#")]),e._v(" Webhook")]),e._v(" "),r("p",[e._v("A service that listens for data input from an external source used to trigger an action in a system. Webhooks allow external systems to provide real-time alerts and updates to the system that does not limit the updates to regular polling intervals. Webhooks are often referenced by push notifications.")]),e._v(" "),r("p",[e._v("n8n has the ability to create "),r("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Webhook/"}},[e._v("webhooks")]),e._v(" that can be used to start workflows and receive data from systems outside of the n8n system itself.")],1),e._v(" "),r("p",[e._v("To learn more about "),r("em",[e._v("webhooks")]),e._v(", see "),r("a",{attrs:{href:"https://sendgrid.com/blog/whats-webhook/",target:"_blank",rel:"noopener noreferrer"}},[e._v("What's a Webhook?"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"workflow"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#workflow"}},[e._v("#")]),e._v(" Workflow")]),e._v(" "),r("p",[e._v("A collection of "),r("a",{attrs:{href:"#Node"}},[e._v("nodes")]),e._v(" connected together to produce a specific outcome.")]),e._v(" "),r("p",[e._v("n8n's primary form of programming uses a "),r("RouterLink",{attrs:{to:"/reference/workflow.html"}},[e._v("workflow model")]),e._v(" to represent both code and data flow.")],1),e._v(" "),r("p",[e._v("For more information, see "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Workflow_application",target:"_blank",rel:"noopener noreferrer"}},[e._v("Workflow application"),r("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=o.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{1054:function(e,t,o){e.exports=o.p+"assets/img/workflow.13eab506.png"},1055:function(e,t,o){e.exports=o.p+"assets/img/QuestDB_node.ca3a9bbc.png"},1056:function(e,t,o){e.exports=o.p+"assets/img/Set_node.435c2e1e.png"},1057:function(e,t,o){e.exports=o.p+"assets/img/QuestDB1_node.0e864c5f.png"},1745:function(e,t,o){"use strict";o.r(t);var a=o(26),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"questdb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#questdb"}},[e._v("#")]),e._v(" QuestDB")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://questdb.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("QuestDB"),a("OutboundLink")],1),e._v(" is an open-source NewSQL relational database designed to process time-series data, faster. QuestDB’s stack is engineered from scratch, zero-GC Java and dependency-free. It supports a a Java API, SQL via HTTP and the PostgreSQL wire protocol.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),a("p",[e._v("You can find authentication information for this node "),a("RouterLink",{attrs:{to:"/nodes/credentials/QuestDB/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),a("h2",{attrs:{id:"basic-operations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),a("Resource",{attrs:{node:"n8n-nodes-base.questDb"}}),e._v(" "),a("h2",{attrs:{id:"example-usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),a("p",[e._v("This workflow allows you to create a table and insert data into it in QuestDB. You can also find the "),a("a",{attrs:{href:"https://n8n.io/workflows/592",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),a("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow would use the following nodes.")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Set/"}},[e._v("Set")])],1),e._v(" "),a("li",[a("a",{attrs:{href:""}},[e._v("QuestDB")])])]),e._v(" "),a("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(1054),alt:"A workflow with the QuestDB node"}})]),e._v(" "),a("h3",{attrs:{id:"_1-start-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),a("p",[e._v("The start node exists by default when you create a new workflow.")]),e._v(" "),a("h3",{attrs:{id:"_2-questdb-node-execute-query"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-questdb-node-execute-query"}},[e._v("#")]),e._v(" 2. QuestDB node (Execute Query)")]),e._v(" "),a("ol",[a("li",[e._v("First of all, you'll have to enter credentials for the QuestDB node. You can find out how to do that "),a("RouterLink",{attrs:{to:"/nodes/credentials/QuestDB/"}},[e._v("here")]),e._v(".")],1),e._v(" "),a("li",[e._v("Select 'Execute Query' from the "),a("em",[a("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),a("li",[e._v("Enter the following SQL query in the "),a("em",[a("strong",[e._v("Query")])]),e._v(" field: "),a("code",[e._v("CREATE TABLE test (id INT, name STRING);")]),e._v(".")]),e._v(" "),a("li",[e._v("Click on the "),a("em",[a("strong",[e._v("Node")])]),e._v(" tab and toggle "),a("em",[a("strong",[e._v("Always Output Data")])]),e._v(" to true.")]),e._v(" "),a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),a("p",[a("img",{attrs:{src:o(1055),alt:"Using the QuestDB node to create a table"}})]),e._v(" "),a("h3",{attrs:{id:"_3-set-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-set-node"}},[e._v("#")]),e._v(" 3. Set node")]),e._v(" "),a("ol",[a("li",[e._v("Click on the "),a("em",[a("strong",[e._v("Add Value")])]),e._v(" button and select 'Number' from the dropdown list.")]),e._v(" "),a("li",[e._v("Enter "),a("code",[e._v("id")]),e._v(" in the "),a("em",[a("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),a("li",[e._v("Click on the "),a("em",[a("strong",[e._v("Add Value")])]),e._v(" button and select 'String' from the dropdown list.")]),e._v(" "),a("li",[e._v("Enter "),a("code",[e._v("name")]),e._v(" in the "),a("em",[a("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),a("li",[e._v("Enter the value for the name in the "),a("em",[a("strong",[e._v("Value")])]),e._v(" field.")]),e._v(" "),a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),a("p",[a("img",{attrs:{src:o(1056),alt:"Using the Set node to set data to be inserted by the QuestDB node"}})]),e._v(" "),a("h3",{attrs:{id:"_4-questdb1-node-insert"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-questdb1-node-insert"}},[e._v("#")]),e._v(" 4. QuestDB1 node (Insert)")]),e._v(" "),a("ol",[a("li",[e._v("Select the credentials that you entered in the previous QuestDB node.")]),e._v(" "),a("li",[e._v("Enter "),a("code",[e._v("test")]),e._v(" in the "),a("em",[a("strong",[e._v("Table")])]),e._v(" field.")]),e._v(" "),a("li",[e._v("Enter "),a("code",[e._v("id, name")]),e._v(" in the "),a("em",[a("strong",[e._v("Columns")])]),e._v(" field.")]),e._v(" "),a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),a("p",[a("img",{attrs:{src:o(1057),alt:"Using the QuestDB node to insert data into a table"}})]),e._v(" "),a("h2",{attrs:{id:"faqs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#faqs"}},[e._v("#")]),e._v(" FAQs")]),e._v(" "),a("h3",{attrs:{id:"how-to-specify-the-data-type-of-a-column"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-specify-the-data-type-of-a-column"}},[e._v("#")]),e._v(" How to specify the data type of a column?")]),e._v(" "),a("p",[e._v("To specify the data type of a column, append the column name with "),a("code",[e._v(":type")]),e._v(", where "),a("code",[e._v("type")]),e._v(" is the data type of that column. For example, if you want to specify the type "),a("code",[e._v("int")]),e._v(" for the column "),a("em",[e._v("id")]),e._v(" and type "),a("code",[e._v("text")]),e._v(" for the column "),a("em",[e._v("name")]),e._v(", you can use the following snippet in the "),a("em",[a("strong",[e._v("Columns")])]),e._v(" field: "),a("code",[e._v("id:init,name:text")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"further-reading"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#further-reading"}},[e._v("#")]),e._v(" Further Reading")]),e._v(" "),a("FurtherReadingBlog")],1)}),[],!1,null,null,null);t.default=s.exports}}]);
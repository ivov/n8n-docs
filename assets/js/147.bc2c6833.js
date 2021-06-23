(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{1107:function(e,t,n){e.exports=n.p+"assets/img/workflow.dd888f60.png"},1108:function(e,t,n){e.exports=n.p+"assets/img/Sendy_node.af60d47c.png"},1109:function(e,t,n){e.exports=n.p+"assets/img/Sendy1_node.7847d52b.png"},1762:function(e,t,n){"use strict";n.r(t);var s=n(26),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"sendy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sendy"}},[e._v("#")]),e._v(" Sendy")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://sendy.co",target:"_blank",rel:"noopener noreferrer"}},[e._v("Sendy"),s("OutboundLink")],1),e._v(" is a self-hosted email newsletter application that lets you send trackable emails via AWS SES.")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),s("p",[e._v("You can find authentication information for this node "),s("RouterLink",{attrs:{to:"/nodes/credentials/Sendy/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),s("h2",{attrs:{id:"basic-operations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),s("Resource",{attrs:{node:"n8n-nodes-base.sendy"}}),e._v(" "),s("h2",{attrs:{id:"example-usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),s("p",[e._v("This workflow allows you to add a subscriber to a list and create and send a campaign using the Sendy node. You can also find the "),s("a",{attrs:{href:"https://n8n.io/workflows/727",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),s("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow uses the following nodes.")]),e._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),s("li",[s("a",{attrs:{href:""}},[e._v("Sendy")])])]),e._v(" "),s("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),s("p",[s("img",{attrs:{src:n(1107),alt:"A workflow with the Sendy node"}})]),e._v(" "),s("h3",{attrs:{id:"_1-start-node"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),s("p",[e._v("The Start node exists by default when you create a new workflow.")]),e._v(" "),s("h3",{attrs:{id:"_2-sendy-node-add-subscriber"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-sendy-node-add-subscriber"}},[e._v("#")]),e._v(" 2. Sendy node (add: subscriber)")]),e._v(" "),s("p",[e._v("This node will add a subscriber to a list in Sendy. If you don't already have a list in Sendy, make sure to create one.")]),e._v(" "),s("ol",[s("li",[e._v("First of all, you'll have to enter credentials for the Sendy node. You can find out how to do that "),s("RouterLink",{attrs:{to:"/nodes/credentials/Sendy/"}},[e._v("here")]),e._v(".")],1),e._v(" "),s("li",[e._v("Enter the subscriber's email address in the "),s("em",[s("strong",[e._v("Email")])]),e._v(" field.")]),e._v(" "),s("li",[e._v("In your Sendy dashboard, click on 'View all lists' and copy the ID of the list to which you want to add the subscriber. Paste this list ID in the List ID field in n8n.")]),e._v(" "),s("li",[e._v("Click on the "),s("em",[s("strong",[e._v("Add Field")])]),e._v(" button and select 'Name'.")]),e._v(" "),s("li",[e._v("Enter the name of the subscriber in the "),s("em",[s("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),s("li",[e._v("Click on "),s("em",[s("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),s("p",[e._v("In the screenshot below, you will notice that the node adds a subscriber with their name to the list that we specify.")]),e._v(" "),s("p",[s("img",{attrs:{src:n(1108),alt:"Using the Sendy node to add a subscriber to a list"}})]),e._v(" "),s("h3",{attrs:{id:"_3-sendy1-node-create-campaign"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-sendy1-node-create-campaign"}},[e._v("#")]),e._v(" 3. Sendy1 node (create: campaign)")]),e._v(" "),s("p",[e._v("This node will create a campaign with the title 'Welcome to n8n' and send it to the subscribers of the list that we specify.")]),e._v(" "),s("div",{pre:!0},[s("ol",[s("li",[e._v("Select the credentials that you entered in the previous node.")]),e._v(" "),s("li",[e._v("Select 'Campaign' from the "),s("em",[s("strong",[e._v("Resource")])]),e._v(" dropdown list.")]),e._v(" "),s("li",[e._v("Enter the name of the sender in the "),s("em",[s("strong",[e._v("From Name")])]),e._v(" field.")]),e._v(" "),s("li",[e._v("Enter the email address of the sender in the "),s("em",[s("strong",[e._v("From Email")])]),e._v(" field.")]),e._v(" "),s("li",[e._v("Enter the email address where the subscribers can reply to in the "),s("em",[s("strong",[e._v("Reply To")])]),e._v(" field.")]),e._v(" "),s("li",[e._v("Enter the title of the campaign in the "),s("em",[s("strong",[e._v("Title")])]),e._v(" field.")]),e._v(" "),s("li",[e._v("Enter the subject of the email in the "),s("em",[s("strong",[e._v("Subject")])]),e._v(" field.")]),e._v(" "),s("li",[e._v("Enter the HTML snippet of the email campaign in the "),s("em",[s("strong",[e._v("HTML Text")])]),e._v(" field.")]),e._v(" "),s("li",[e._v("Toggle "),s("em",[s("strong",[e._v("Send Campaign")])]),e._v(" to true.")]),e._v(" "),s("li",[e._v("Click on the "),s("em",[s("strong",[e._v("Add Field")])]),e._v(" button and select 'List IDs'.")]),e._v(" "),s("li",[e._v("Click on the gears icon next to the "),s("em",[s("strong",[e._v("List IDs")])]),e._v(" field and click on "),s("em",[s("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),s("li",[e._v("Select the following in the "),s("em",[s("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Sendy > Parameters > listId. You can also add the following expression: "),s("code",[e._v('{{$node["Sendy"].parameter["listId"]}}')]),e._v(".")]),e._v(" "),s("li",[e._v("Click on "),s("em",[s("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),s("p",[e._v("In the screenshot below, you will notice that the node creates the campaign with the title "),s("code",[e._v("Welcome to n8n")]),e._v(" and sends it to the list that we specify.")]),e._v(" "),s("p",[s("img",{attrs:{src:n(1109),alt:"Using the Sendy node to create and send a campaign to a list"}})])],1)}),[],!1,null,null,null);t.default=a.exports}}]);
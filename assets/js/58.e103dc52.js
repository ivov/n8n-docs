(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{1309:function(e,t,o){e.exports=o.p+"assets/img/workflow.42402d2e.png"},1310:function(e,t,o){e.exports=o.p+"assets/img/RabbitMQTrigger_node.ec580507.png"},1311:function(e,t,o){e.exports=o.p+"assets/img/IF_node.2c335f20.png"},1312:function(e,t,o){e.exports=o.p+"assets/img/Vonage_node.df804c00.png"},1313:function(e,t,o){e.exports=o.p+"assets/img/NoOp_node.441ed09c.png"},1849:function(e,t,o){"use strict";o.r(t);var n=o(26),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"rabbitmq-trigger"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#rabbitmq-trigger"}},[e._v("#")]),e._v(" RabbitMQ Trigger")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://www.rabbitmq.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("RabbitMQ"),n("OutboundLink")],1),e._v(" is an open-source message broker that accepts and forwards messages.")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),n("p",[e._v("You can find authentication information for this node "),n("RouterLink",{attrs:{to:"/nodes/credentials/RabbitMQ/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),n("h2",{attrs:{id:"example-usage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),n("p",[e._v("This workflow allows you to receive messages from a queue and send an SMS if the value of the temperature is greater than 50. You can also find the "),n("a",{attrs:{href:"https://n8n.io/workflows/845",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),n("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow would use the following nodes.")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:""}},[e._v("RabbitMQ Trigger")])]),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/If/"}},[e._v("IF")])],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/Vonage/"}},[e._v("Vonage")])],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/NoOperationDoNothing/"}},[e._v("No Operation, do nothing")])],1)]),e._v(" "),n("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1309),alt:"A workflow with the RabbitMQ Trigger node"}})]),e._v(" "),n("h3",{attrs:{id:"_1-rabbitmq-trigger-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-rabbitmq-trigger-node"}},[e._v("#")]),e._v(" 1. RabbitMQ Trigger node")]),e._v(" "),n("p",[e._v("This node will trigger the workflow when a new message is sent to the queue "),n("code",[e._v("temp")]),e._v(". If you're using a different queue, use that instead. We are sending the message "),n("code",[e._v('{ "id": 1, "temp": 100 }')]),e._v(" to "),n("code",[e._v("temp")]),e._v(".")]),e._v(" "),n("ol",[n("li",[e._v("First of all, you'll have to enter credentials for the RabbitMQ Trigger node. You can find out how to do that "),n("RouterLink",{attrs:{to:"/nodes/credentials/RabbitMQ/"}},[e._v("here")]),e._v(".")],1),e._v(" "),n("li",[e._v("Enter the name of the queue or topic in the "),n("em",[n("strong",[e._v("Queue / Topic")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Add Option")])]),e._v(" and select 'JSON Parse Body'.")]),e._v(" "),n("li",[e._v("Toggle "),n("em",[n("strong",[e._v("JSON Parse Body")])]),e._v(" to "),n("code",[e._v("true")]),e._v(". By setting this value to true, the node returns the body as JSON instead of a string.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Add Option")])]),e._v(" and select 'Only Content'.")]),e._v(" "),n("li",[e._v("Toggle "),n("em",[n("strong",[e._v("Only Content")])]),e._v(" to "),n("code",[e._v("true")]),e._v(". By setting this to true, the node only returns the message.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),n("p",[e._v("In the screenshot below, you will notice that the node gets triggered when a new message is sent to the "),n("code",[e._v("temp")]),e._v(" queue in RabbitMQ.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1310),alt:"Using the RabbitMQ Trigger node to get a message from a queue"}})]),e._v(" "),n("h3",{attrs:{id:"_2-if-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-if-node"}},[e._v("#")]),e._v(" 2. IF node")]),e._v(" "),n("p",[e._v("This node will compare the value of "),n("code",[e._v("temp")]),e._v(" that we received in the message from the previous node. If the value is greater than 50, it will return true otherwise false.")]),e._v(" "),n("div",{pre:!0},[n("ol",[n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Add Condition")])]),e._v(" and select 'Number' from the dropdown list.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Value 1")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > RabbitMQ > Output Data > JSON > temp. You can also add the following expression: "),n("code",[e._v('{{$node["RabbitMQ"].json["temp"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Select 'Larger' from the "),n("em",[n("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Set "),n("em",[n("strong",[e._v("Value 2")])]),e._v(" to 50.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),n("p",[e._v("In the screenshot below, you will notice that the node returns output for "),n("strong",[e._v("true")]),e._v(" when the temperature is greater than 50.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1311),alt:"Using the IF node to check if the temp is larger than 50"}})]),e._v(" "),n("h3",{attrs:{id:"_3-vonage-node-send-sms"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-vonage-node-send-sms"}},[e._v("#")]),e._v(" 3. Vonage node (send: sms)")]),e._v(" "),n("p",[e._v("This node sends an SMS to the specified phone number when the value of "),n("code",[e._v("temp")]),e._v(" is greater than "),n("code",[e._v("50")]),e._v(".")]),e._v(" "),n("ol",[n("li",[e._v("Create a Vonage node connected to the 'true' output of the IF node.")]),e._v(" "),n("li",[e._v("You'll have to enter credentials for the Vonage node. You can find out how to do that "),n("RouterLink",{attrs:{to:"/nodes/credentials/Vonage/"}},[e._v("here")]),e._v(".")],1),e._v(" "),n("li",[e._v("Enter the name of the sender in the "),n("em",[n("strong",[e._v("From")])]),e._v(" field. If you're using a number, enter the number instead.")]),e._v(" "),n("li",[e._v("Enter the receiver's phone number in the "),n("em",[n("strong",[e._v("To")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Message")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")])]),e._v(" "),n("div",{pre:!0},[n("ol",{pre:!0,attrs:{start:"6"}},[n("li",[e._v("Enter the following in the "),n("em",[n("strong",[e._v("Expression")])]),e._v(" field.")])]),e._v(" "),n("div",{pre:!0,attrs:{class:"language- extra-class"}},[n("pre",{pre:!0,attrs:{"v-pre":"",class:"language-text"}},[n("code",[e._v('Alert!\nThe value of temp is {{$node["RabbitMQ"].json["temp"]}}.\n')])])]),n("ol",{pre:!0,attrs:{start:"7"}},[n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),n("p",[e._v("In the screenshot below, you will notice that the node sends an SMS with the value of "),n("code",[e._v("temp")]),e._v(" that we received from the RabbitMQ Trigger node.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1312),alt:"Using the Vonage node to send an SMS"}})]),e._v(" "),n("h3",{attrs:{id:"_4-noop-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-noop-node"}},[e._v("#")]),e._v(" 4. NoOp node")]),e._v(" "),n("p",[e._v("Adding this node here is optional, as the absence of this node won't make a difference to the functioning of the workflow.")]),e._v(" "),n("ol",[n("li",[e._v("Create a "),n("em",[n("strong",[e._v("NoOp")])]),e._v(" node connected to the 'false' output of the IF node.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),n("p",[n("img",{attrs:{src:o(1313),alt:"Using the NoOp node"}})]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("💡 Activate workflow for production")]),e._v(" "),n("p",[e._v("You'll need to save the workflow and then click on the Activate toggle on the top right of the screen to activate the workflow. Your workflow will then be triggered as specified by the settings in the RabbitMQ Trigger node.")])])])}),[],!1,null,null,null);t.default=r.exports}}]);
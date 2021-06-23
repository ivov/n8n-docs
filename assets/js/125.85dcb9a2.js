(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{1317:function(e,t,o){e.exports=o.p+"assets/img/workflow.0358792b.png"},1318:function(e,t,o){e.exports=o.p+"assets/img/TelegramTrigger_node.bb6be1e3.png"},1319:function(e,t,o){e.exports=o.p+"assets/img/HTTPRequest_node.21727086.png"},1320:function(e,t,o){e.exports=o.p+"assets/img/Telegram_node.1874eac0.png"},1853:function(e,t,o){"use strict";o.r(t);var n=o(26),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"telegram-trigger"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#telegram-trigger"}},[e._v("#")]),e._v(" Telegram Trigger")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://telegram.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Telegram"),n("OutboundLink")],1),e._v(" is a cloud-based instant messaging and voice over IP service. Users can send messages and exchange photos, videos, stickers, audio, and files of any type.")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),n("p",[e._v("You can find authentication information for this node "),n("RouterLink",{attrs:{to:"/nodes/credentials/Telegram/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),n("h2",{attrs:{id:"updates"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#updates"}},[e._v("#")]),e._v(" Updates")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("*")]),e._v(": All updates")]),e._v(" "),n("li",[n("em",[n("strong",[e._v("message")])]),e._v(": Trigger on a new incoming message of any kind- text, photo, sticker, etc")]),e._v(" "),n("li",[n("em",[n("strong",[e._v("edited_message")])]),e._v(": Trigger on a new version of a channel post that is known to the bot and was edited")]),e._v(" "),n("li",[n("em",[n("strong",[e._v("channel_post")])]),e._v(": Trigger on a new incoming channel post of any kind - text, photo, sticker, etc")]),e._v(" "),n("li",[n("em",[n("strong",[e._v("edited_channel_post")])]),e._v(": Trigger on a new version of a channel post that is known to the bot and was edited")]),e._v(" "),n("li",[n("em",[n("strong",[e._v("inline_query")])]),e._v(": Trigger on a new incoming inline query")]),e._v(" "),n("li",[n("em",[n("strong",[e._v("callback_query")])]),e._v(": Trigger on a new incoming callback query")]),e._v(" "),n("li",[n("em",[n("strong",[e._v("shipping_query")])]),e._v(": Trigger on a new incoming shipping query. Only for invoices with flexible price")]),e._v(" "),n("li",[n("em",[n("strong",[e._v("pre_checkout_query")])]),e._v(": Trigger on a new incoming pre-checkout query. Contains full information about checkout")]),e._v(" "),n("li",[n("em",[n("strong",[e._v("poll")])]),e._v(": Trigger on a new poll state. Bots receive only updates about stopped polls and polls which are sent by the bot")])]),e._v(" "),n("h2",{attrs:{id:"example-usage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),n("p",[e._v("This workflow allows you to receive messages using the Telegram Trigger node and send an image of a cocktail when a message is received. You can also find the "),n("a",{attrs:{href:"https://n8n.io/workflows/782",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),n("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow would use the following nodes.")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:""}},[e._v("Telegram Trigger")])]),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/HTTPRequest/"}},[e._v("HTTP Request")])],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/Telegram/"}},[e._v("Telegram")])],1)]),e._v(" "),n("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1317),alt:"A workflow with the Telegram Trigger node"}})]),e._v(" "),n("h3",{attrs:{id:"_1-telegram-trigger-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-telegram-trigger-node"}},[e._v("#")]),e._v(" 1. Telegram Trigger node")]),e._v(" "),n("p",[e._v("This node will trigger the workflow when a user sends a new message.")]),e._v(" "),n("ol",[n("li",[e._v("First of all, you'll have to enter credentials for the Telegram Trigger node. You can find out how to do that "),n("RouterLink",{attrs:{to:"/nodes/credentials/Telegram/"}},[e._v("here")]),e._v(".")],1),e._v(" "),n("li",[e._v("Select 'message' from the "),n("em",[n("strong",[e._v("Updates")])]),e._v(" dropdown list. This will trigger the workflow when a user sends a message.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),n("p",[e._v("In the screenshot below, you will notice that the node triggers the workflow when a user sends a new message.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1318),alt:"Using the Telegram Trigger node to trigger the workflow"}})]),e._v(" "),n("h3",{attrs:{id:"_2-http-request-node-get"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-http-request-node-get"}},[e._v("#")]),e._v(" 2. HTTP Request node (GET)")]),e._v(" "),n("p",[e._v("This node will make a GET request to the API "),n("code",[e._v("https://www.thecocktaildb.com/api/json/v1/1/random.php")]),e._v(" to fetch a random cocktail. This information gets passed on to the next node in the workflow.")]),e._v(" "),n("ol",[n("li",[e._v("Enter "),n("code",[e._v("https://www.thecocktaildb.com/api/json/v1/1/random.php")]),e._v(" in the "),n("em",[n("strong",[e._v("URL")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),n("p",[e._v("In the screenshot below, you will notice that the node makes a GET request to the API and returns information about a random cocktail.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1319),alt:"Using the HTTP Request node to get the information about a random cocktail"}})]),e._v(" "),n("h3",{attrs:{id:"_3-telegram-node-sendphoto-message"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-telegram-node-sendphoto-message"}},[e._v("#")]),e._v(" 3. Telegram node (sendPhoto: message)")]),e._v(" "),n("p",[e._v("This node will send a reply to the message with the name and image of the cocktail that we got from the previous node.")]),e._v(" "),n("div",{pre:!0},[n("ol",[n("li",[e._v("Select the credentials that you entered in the Telegram Trigger node.")]),e._v(" "),n("li",[e._v("Select 'Send Photo' from the "),n("em",[n("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Chat ID")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Telegram Trigger > Output Data > JSON > message > chat > id. You can also add the following expression: "),n("code",[e._v('{{$node["Telegram Trigger"].json["message"]["chat"]["id"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Photo")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > HTTP Request > Output Data > JSON > drinks > [item: 0] > strDrinkThumb. You can also add the following expression: "),n("code",[e._v('{{$node["HTTP Request"].json["drinks"][0]["strDrinkThumb"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Add Field")])]),e._v(" and select 'Caption' from the dropdown list.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Caption")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > HTTP Request > Output Data > JSON > drinks > [item: 0] > strDrink. You can also add the following expression: "),n("code",[e._v('{{$node["HTTP Request"].json["drinks"][0]["strDrink"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Add Field")])]),e._v(" and select 'Reply To Message ID' from the dropdown list.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Reply To Message ID")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Telegram Trigger > Output Data > JSON > message > message_id. You can also add the following expression: "),n("code",[e._v('{{$node["Telegram Trigger"].json["message"]["message_id"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),n("p",[e._v("In the screenshot below, you will notice that the node sends a reply to the message with the name and image of the cocktail that we got from the previous node.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1320),alt:"Using the Telegram node to send a message with an image and instruction of a cocktail"}})]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("💡 Activate workflow for production")]),e._v(" "),n("p",[e._v("You'll need to save the workflow and then click on the Activate toggle on the top right of the screen to activate the workflow. Your workflow will then be triggered as specified by the settings in the Telegram Trigger node.")])]),e._v(" "),n("h2",{attrs:{id:"further-reading"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#further-reading"}},[e._v("#")]),e._v(" Further Reading")]),e._v(" "),n("FurtherReadingBlog")],1)}),[],!1,null,null,null);t.default=s.exports}}]);
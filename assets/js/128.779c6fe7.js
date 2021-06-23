(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{1575:function(e,t,o){"use strict";o.r(t);var i=o(26),a=Object(i.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"edit-image"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#edit-image"}},[e._v("#")]),e._v(" Edit Image")]),e._v(" "),i("p",[e._v("The Edit Image node is used to manipulate and edit images.")]),e._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[e._v("💡 Keep in mind")]),e._v(" "),i("ol",[i("li",[e._v("If you are not running n8n on Docker, you'll need to install "),i("a",{attrs:{href:"http://www.graphicsmagick.org/README.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("GraphicsMagick"),i("OutboundLink")],1),e._v(".")]),e._v(" "),i("li",[e._v("You will need to use an additional node such as the "),i("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/ReadBinaryFile/"}},[e._v("Read Binary File")]),e._v(" node or the "),i("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/HTTPRequest/"}},[e._v("HTTP Request")]),e._v(" node to pass the image file as a data property to the Edit Image node.")],1)])]),e._v(" "),i("h2",{attrs:{id:"node-reference"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#node-reference"}},[e._v("#")]),e._v(" Node Reference")]),e._v(" "),i("ul",[i("li",[e._v("Operations\n"),i("ul",[i("li",[e._v("Add a blur to the image to reduce sharpness")]),e._v(" "),i("li",[e._v("Add a border to the image")]),e._v(" "),i("li",[e._v("Create a new image")]),e._v(" "),i("li",[e._v("Crop the image")]),e._v(" "),i("li",[e._v("Composite an image on top of another image")]),e._v(" "),i("li",[e._v("Draw on an image")]),e._v(" "),i("li",[e._v("Get information about the image")]),e._v(" "),i("li",[e._v("Rotate the image")]),e._v(" "),i("li",[e._v("Change the size of the image")]),e._v(" "),i("li",[e._v("Shear image along the X or Y axis")]),e._v(" "),i("li",[e._v("Add text to the image")])])])]),e._v(" "),i("p",[e._v("You can also specify a file format using the "),i("em",[e._v("Format")]),e._v(" field in the "),i("em",[e._v("Add Option")]),e._v(" dropdown list.")]),e._v(" "),i("ul",[i("li",[e._v("Options\n"),i("ul",[i("li",[i("em",[i("strong",[e._v("File Name")])]),e._v(" field: Allows you to specify the filename of the output file.")]),e._v(" "),i("li",[i("em",[i("strong",[e._v("Format")])]),e._v(" field: Allows you to specify the image format of the output file:\n"),i("ul",[i("li",[e._v("BMP")]),e._v(" "),i("li",[e._v("GIF")]),e._v(" "),i("li",[e._v("JPEG")]),e._v(" "),i("li",[e._v("PNG")]),e._v(" "),i("li",[e._v("TIFF")])])])])])]),e._v(" "),i("h2",{attrs:{id:"example-usage"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),i("p",[e._v("This workflow allows you to add text to an image downloaded from the internet using the Edit Image node. You can also find the "),i("a",{attrs:{href:"https://n8n.io/workflows/591",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),i("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow would use the following nodes.")]),e._v(" "),i("ul",[i("li",[i("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),i("li",[i("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/HTTPRequest/"}},[e._v("HTTP Request")])],1),e._v(" "),i("li",[i("a",{attrs:{href:""}},[e._v("Edit Image")])])]),e._v(" "),i("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),i("p",[i("img",{attrs:{src:o(580),alt:"A workflow with the Edit Image node"}})]),e._v(" "),i("h3",{attrs:{id:"_1-start-node"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),i("p",[e._v("The start node exists by default when you create a new workflow.")]),e._v(" "),i("h3",{attrs:{id:"_2-http-request-node"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_2-http-request-node"}},[e._v("#")]),e._v(" 2. HTTP Request node")]),e._v(" "),i("ol",[i("li",[e._v("Enter "),i("code",[e._v("https://docs.n8n.io/assets/img/final-workflow.f380b957.png")]),e._v(" in the "),i("em",[i("strong",[e._v("URL")])]),e._v(" field.")]),e._v(" "),i("li",[e._v("Select 'File' from the "),i("em",[i("strong",[e._v("Response Format")])]),e._v(" dropdown list.")]),e._v(" "),i("li",[e._v("Click on "),i("em",[e._v("Execute Node")]),e._v(" to run the node.")])]),e._v(" "),i("p",[i("img",{attrs:{src:o(581),alt:"Using the HTTP Request node to get an image"}})]),e._v(" "),i("h3",{attrs:{id:"_3-edit-image-node"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_3-edit-image-node"}},[e._v("#")]),e._v(" 3. Edit Image node")]),e._v(" "),i("ol",[i("li",[e._v("Select 'Text' from the "),i("em",[i("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),i("li",[e._v("Enter "),i("code",[e._v("This is n8n")]),e._v("in the "),i("em",[i("strong",[e._v("Text")])]),e._v(" field.")]),e._v(" "),i("li",[e._v("Enter 100 in the "),i("em",[i("strong",[e._v("Font Size")])]),e._v(" field.")]),e._v(" "),i("li",[e._v("Enter 300 in the "),i("em",[i("strong",[e._v("Position X")])]),e._v(" field.")]),e._v(" "),i("li",[e._v("Enter 500 in the "),i("em",[i("strong",[e._v("Position Y")])]),e._v(" field.")]),e._v(" "),i("li",[e._v("Click on "),i("em",[e._v("Execute Node")]),e._v(" to run the node.")])]),e._v(" "),i("p",[i("img",{attrs:{src:o(582),alt:"Using the Edit Image node to add text to an image"}})])])}),[],!1,null,null,null);t.default=a.exports},580:function(e,t,o){e.exports=o.p+"assets/img/workflow.564f3e7e.png"},581:function(e,t,o){e.exports=o.p+"assets/img/HTTPRequest_node.52dc48e7.png"},582:function(e,t,o){e.exports=o.p+"assets/img/EditImage_node.bd7d763c.png"}}]);
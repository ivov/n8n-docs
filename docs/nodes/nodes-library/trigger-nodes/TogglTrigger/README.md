---
permalink: /nodes/n8n-nodes-base.togglTrigger
description: Learn how to use the Toggl Trigger node in n8n
---

# Toggl Trigger

[Toggl](https://toggl.com/) is a time tracking app that offers online time tracking and reporting services through their website along with mobile and desktop applications.

::: tip 🔑 Credentials
You can find authentication information for this node [here](../../../credentials/Toggl/README.md).
:::


## Example Usage

This workflow allows you to get new time entries from Toggl. You can also find the [workflow](https://n8n.io/workflows/517) on the website. This example usage workflow would use the following node.
- [Toggl Trigger]()

The final workflow should look like the following image.

![A workflow with the Toggl Trigger node](REDACTED)


### 1. Toggl Trigger node

1. First of all, you'll have to enter credentials for the Toggl Trigger node. You can find out how to do that [here](../../../credentials/Toggl/README.md).
2. Click on *Execute Node* to run the workflow.

**Note:** This node uses polling to get new time entries. You'll have to use the *Add Poll Time* button if you want this Trigger node to run regularly to retrieve new time entries.

::: tip 💡 Activate workflow for production
You'll need to save the workflow and then click on the Activate toggle on the top right of the screen to activate the workflow. Your workflow will then be triggered as specified by the settings in the Toggl Trigger node.
:::

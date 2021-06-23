---
permalink: /nodes/n8n-nodes-base.eventbriteTrigger
description: Learn how to use the Eventbrite Trigger node in n8n
---

# Eventbrite Trigger

[Eventbrite](https://www.eventbrite.com/) is an event management and ticketing website. The service allows users to browse, create, and promote local events.

::: tip 🔑 Credentials
You can find authentication information for this node [here](../../../credentials/Eventbrite/README.md).
:::


## Example Usage

This workflow allows you to get updates for an Eventbrite event. You can also find the [workflow](https://n8n.io/workflows/538) on the website. This example usage workflow would use the following node.
- [Eventbrite Trigger]()

The final workflow should look like the following image.

![A workflow with the Eventbrite Trigger node](REDACTED)


### 1. Eventbrite Trigger node

1. First of all, you'll have to enter credentials for the Eventbrite Trigger node. You can find out how to do that [here](../../../credentials/Eventbrite/README.md).
2. Select the profile that contains your event from the *Organization* dropdown list.
3. Select the event you want to receive updates for from the *Event* dropdown list.
4. Select the actions that you want to receive updates for from the *Actions* dropdown list.
5. Click on *Execute Node* to run the workflow.

::: tip 💡 Activate workflow for production
You'll need to save the workflow and then click on the Activate toggle on the top right of the screen to activate the workflow. Your workflow will then be triggered as specified by the settings in the Eventbrite Trigger node.
:::

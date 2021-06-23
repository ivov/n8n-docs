---
permalink: /nodes/n8n-nodes-base.cockpit
description: Learn how to use the Cockpit node in n8n
---

# Cockpit

[Cockpit](https://getcockpit.com/) is a headless CMS with an API-first approach that puts content first. It is designed to simplify the process of publication by separating content management from content consumption on the client side.

::: tip 🔑 Credentials
You can find authentication information for this node [here](../../../credentials/Cockpit/README.md).
:::

## Basic Operations

<Resource node="n8n-nodes-base.cockpit" />

## Example Usage

This workflow allows you to get entries from a collection in Cockpit. You can also find the [workflow](https://n8n.io/workflows/518) on the website. This example usage workflow would use the following two nodes.
- [Start](../../core-nodes/Start/README.md)
- [Cockpit]()

The final workflow should look like the following image.

![A workflow with the Cockpit node](REDACTED)

### 1. Start node

The start node exists by default when you create a new workflow.

### 2. Cockpit node

1. First of all, you'll have to enter credentials for the Cockpit node. You can find out how to do that [here](../../../credentials/Cockpit/README.md).
2. Select your collection from the *Collection* dropdown list.
3. Click on *Execute Node* to run the workflow.

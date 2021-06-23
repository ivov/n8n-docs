---
permalink: /nodes/n8n-nodes-base.salesmate
description: Learn how to use the Salesmate node in n8n
---

# Salesmate

[Salesmate](https://www.salesmate.io/) is a cloud-based CRM solution that caters to small and midsize businesses across various industries. Key features include contact management, sales pipeline management, email marketing and internal chat and phone integration.

::: tip 🔑 Credentials
You can find authentication information for this node [here](../../../credentials/Salesmate/README.md).
:::

## Basic Operations

<Resource node="n8n-nodes-base.salesmate" />

## Example Usage

This workflow allows you to create a company in Salesmate. You can also find the [workflow](https://n8n.io/workflows/500) on the website. This example usage workflow would use the following two nodes.
- [Start](../../core-nodes/Start/README.md)
- [Salesmate]()

The final workflow should look like the following image.

![A workflow with the Salesmate node](REDACTED)

### 1. Start node

The start node exists by default when you create a new workflow.

### 2. Salesmate node

1. First of all, you'll have to enter credentials for the Salesmate node. You can find out how to do that [here](../../../credentials/Salesmate/README.md).
2. Select the 'Company' option from the *Resource* dropdown list.
3. Enter the name of the company in the *Name* field.
4. Select the owner from the *Owner* dropdown list.
5. Click on *Execute Node* to run the workflow.

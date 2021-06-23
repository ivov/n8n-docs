---
permalink: /nodes/n8n-nodes-base.hunter
description: Learn how to use the Hunter node in n8n
---

# Hunter

[Hunter](https://hunter.io/) is a company that produces a platform that helps find and verify professional email addresses.

::: tip 🔑 Credentials
You can find authentication information for this node [here](../../../credentials/Hunter/README.md).
:::

## Basic Operations

<Resource node="n8n-nodes-base.hunter" />


## Example Usage

This workflow allows you to verify the deliverability of an email address using Hunter. You can also find the [workflow](https://n8n.io/workflows/519) on the website. This example usage workflow would use the following two nodes.
- [Start](../../core-nodes/Start/README.md)
- [Hunter]()

The final workflow should look like the following image.

![A workflow with the Hunter node](REDACTED)

### 1. Start node

The start node exists by default when you create a new workflow.

### 2. Hunter node

1. First of all, you'll have to enter credentials for the Hunter node. You can find out how to do that [here](../../../credentials/Hunter/README.md).
2. Select 'Email Verifier' from the *Operation* dropdown list.
3. Enter the email in the *Email* field.
4. Click on *Execute Node* to run the workflow.

---
permalink: /nodes/n8n-nodes-base.discourse
description: Learn how to use the Discourse node in n8n
---

# Discourse

[Discourse](https://www.discourse.org/) is an open-source discussion platform that can be used as a mailing list, discussion forum, long-form chat room, and more.

::: tip 🔑 Credentials
You can find authentication information for this node [here](../../../credentials/Discourse/README.md).
:::


## Basic Operations

<Resource node="n8n-nodes-base.discourse" />

## Example Usage

This workflow allows you to create, update, and get a post using the Discourse node. You can also find the [workflow](https://n8n.io/workflows/930) on n8n.io. This example usage workflow would use the following nodes.
- [Start](../../core-nodes/Start/README.md)
- [Discourse]()

The final workflow should look like the following image.

![A workflow with the Discourse node](REDACTED)

### 1. Start node

The start node exists by default when you create a new workflow.

### 2. Discourse node (create: post)

This node will create a post under the `Lounge` category. If you want to create a post under a different category, select that category instead.

1. First of all, you'll have to enter credentials for the Discourse node. You can find out how to do that [here](../../../credentials/Discourse/README.md).
2. Enter a title for the post in the ***Title*** field.
3. Enter the content of the post in the ***Content*** field.
4. Click on ***Add Field*** and select 'Category ID' from the dropdown list.
5. Select 'Lounge' from the ***Category ID*** dropdown list.
6. Click on ***Execute Node*** to run the node.

In the screenshot below, you will notice that the node creates a new topic under the category `Lounge`.

![Using the Discourse node to create a topic](REDACTED)

### 3. Discourse1 node (update: post)

This node will update the content of the post that we created in the previous node.
::: v-pre
1. Select the credentials that you entered in the previous node.
2. Select 'Update' from the ***Operations*** dropdown list.
3. Click on the gears icon next to the ***Post ID*** field and click on ***Add Expression***.
4. Select the following in the ***Variable Selector*** section: Current Node > Input Data > JSON > id. You can also add the following expression: `{{$json["id"]}}`.
5. Enter the updated content in the ***Content*** field.
6. Click on ***Execute Node*** to run the node.
:::
In the screenshot below, you will notice that the node updates the content of the post that we created in the previous node.

![Using the Discourse node to update a post](REDACTED)

### 4. Discourse2 node (get: post)

This node will retrieve the post that we updated previously.
::: v-pre
1. Select the credentials that you entered in the previous node.
2. Select 'Get' from the ***Operation*** dropdown list.
3. Click on the gears icon next to the ***Post ID*** field and click on ***Add Expression***.
4. Select the following in the ***Variable Selector*** section: Current Node > Input Data > JSON > id. You can also add the following expression: `{{$json["id"]}}`.
5. Click on ***Execute Node*** to run the node.
:::
In the screenshot below, you notice that the node retrieves the post that we created earlier.

![Using the Discourse node to get a post](REDACTED)

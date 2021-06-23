---
permalink: /nodes/n8n-nodes-base.salesforce
description: Learn how to use the Salesforce node in n8n
---

# Salesforce

[Salesforce](https://www.salesforce.com/) is a cloud-based software company. It provides customer relationship management service and also sells a complementary suite of enterprise applications focused on customer service, marketing automation, analytics, and application development.

::: tip 🔑 Credentials
You can find authentication information for this node [here](../../../credentials/Salesforce/README.md).
:::

## Basic Operations
<Resource node="n8n-nodes-base.salesforce" />

## Example Usage

This workflow allows you to create, update, and add a note to a lead in Salesforce. You can also find the [workflow](https://n8n.io/workflows/664) on n8n.io. This example usage workflow would use the following nodes.
- [Start](../../core-nodes/Start/README.md)
- [Salesforce]()

The final workflow should look like the following image.

![A workflow with the Salesforce node](REDACTED)

### 1. Start node

The start node exists by default when you create a new workflow.

### 2. Salesforce node (create: lead)

1. First of all, you'll have to enter credentials for the Salesforce node. You can find out how to do that [here](../../../credentials/Salesforce/README.md).
2. Enter the name of the company in the ***Company*** field.
3. Enter the last name of the contact person in the ***Last Name*** field.
4. Click on ***Execute Node*** to run the node.

![Create a lead with the Salesforce node](REDACTED)

::: v-pre
### 3. Salesforce1 node (update: lead)

1. Select the credentials that you entered in the previous node.
2. Select 'Update' from the ***Operation*** dropdown list.
3. Click on the gears icon next to the ***Lead ID*** field and click on ***Add Expression***.
4. Select the following in the ***Variable Selector*** section: Nodes > Salesforce > Output Data > JSON > id. You can also add the following expression: `{{$node["Salesforce"].json["id"]}}`
5. Click on the ***Add Field*** button and select 'City' from the dropdown list.
6. Enter a city name in the ***City*** field.
7. Click on ***Execute Node*** to run the node.

![Update a lead with the Salesforce node](REDACTED)
:::

::: v-pre
### 4. Salesforce2 node (addNote: lead)

1. Select the credentials that you entered in the previous node.
2. Select ***Add Note*** from the ***Operation*** dropdown list.
3. Click on the gears icon next to the ***Lead ID*** field and click on ***Add Expression***.
4. Select the following in the ***Variable Selector*** section: Nodes > Salesforce > Output Data > JSON > id. You can also add the following expression: `{{$node["Salesforce"].json["id"]}}`
5. Enter the note in the ***Title*** field.
6. Click on ***Execute Node*** to run the node.

![Add a note to a lead with the Salesforce node](REDACTED)
:::

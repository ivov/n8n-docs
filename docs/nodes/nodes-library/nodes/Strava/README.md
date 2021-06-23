---
permalink: /nodes/n8n-nodes-base.strava
description: Learn how to use the Strava node in n8n
---

# Strava

[Strava](https://www.strava.com/) is an internet service for tracking human exercise which incorporates social network features.

::: tip 🔑 Credentials
You can find authentication information for this node [here](../../../credentials/Strava/README.md).
:::

## Basic Operations

<Resource node="n8n-nodes-base.strava" />

## Example Usage

This workflow allows you to create, update, and get an activity in Strava. You can also find the [workflow](https://n8n.io/workflows/744) on n8n.io. This example usage workflow would use the following nodes.
- [Start](../../core-nodes/Start/README.md)
- [Strava]()

The final workflow should look like the following image.

![A workflow with the Strava node](REDACTED)

### 1. Start node

The start node exists by default when you create a new workflow.

### 2. Strava node (create: activity)

This node will create an activity with the name `Morning Run` in Strava. To create an activity with a different name, you can enter the name of your activity instead.

1. First of all, you'll have to enter credentials for the Strava node. You can find out how to do that [here](../../../credentials/Strava/README.md).
2. Enter `Morning Run` in the ***Name*** field.
3. Enter `Run` in the ***Type*** field.
4. Select the date and time in the ***Start Date*** field.
5. Set ***Elapsed Time (Seconds)*** to `3600`.
6. Click on the ***Add Field*** button and select 'Distance' from the dropdown list.
7. Set ***Distance*** to `1000`. Strava measures distance in meters.
8. Click on ***Execute Node*** to run the node.

In the screenshot below, you will notice that the node creates an activity with the name `Morning Run` and type `Run`.

![Using the Strava node to create an activity](REDACTED)


::: v-pre
### 3. Strava1 node (update: activity)

This node will update the activity that we created in the previous node.

1. Select the credentials that you entered in the previous node.
2. Select 'Update' from the ***Operation*** dropdown list.
3. Click on the gears icon next to the ***Activity ID*** field and click on ***Add Expression***.
4. Select the following in the ***Variable Selector*** section: Nodes > Strava > Output Data > JSON > id. You can also add the following expression: `{{$node["Strava"].json["id"]}}`.
5. Click on the ***Add Field*** button and select 'Description' from the dropdown list.
6. Enter the description of the activity in the ***Description*** field.
7. Click on ***Execute Node*** to run the node.
:::

In the screenshot below, you will notice that the node adds a description to the activity that we created using the Strava node.

![Using the Strava node to update an activity](REDACTED)


::: v-pre
### 4. Strava2 node (get: activity)

This node returns the information of the activity that we created using the Strava node.

1. Select the credentials that you entered in the previous node.
2. Select 'Get' from the ***Operation*** dropdown list.
3. Click on the gears icon next to the ***Activity ID*** field and click on ***Add Expression***.
4. Select the following in the ***Variable Selector*** section: Nodes > Strava > Output Data > JSON > id. You can also add the following expression: `{{$node["Strava"].json["id"]}}`.
5. Click on ***Execute Node*** to run the node.
:::

In the screenshot below, you will notice that the node returns the information of the activity that we specified in this node.

![Using the Strava node to get an issue](REDACTED)

## Further Reading

<FurtherReadingBlog />

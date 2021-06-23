---
permalink: /nodes/n8n-nodes-base.youTube
description: Learn how to use the YouTube node in n8n
---

# YouTube

[YouTube](https://www.youtube.com) is an online video-sharing platform. YouTube allows users to upload, view, rate, share, add to playlists, report, comment on videos, and subscribe to other users.

::: tip 🔑 Credentials
You can find authentication information for this node [here](../../../credentials/Google/README.md).
:::

## Basic Operations

<Resource node="n8n-nodes-base.youTube" />

## Example Usage

This workflow allows you to upload a video, create a playlist, and add the video to the playlist in YouTube. You can also find the [workflow](https://n8n.io/workflows/638) on n8n.io. This example usage workflow would use the following nodes.
- [Start](../../core-nodes/Start/README.md)
- [Read Binary File](../../core-nodes/ReadBinaryFile/README.md)
- [YouTube]()

The final workflow should look like the following image.

![A workflow with the Gmail node](REDACTED)

### 1. Start node

The start node exists by default when you create a new workflow.

### 2. Read Binary File node

1. Enter the path to the video file you want to upload in the ***File Path*** field.
2. Click on ***Execute Node*** to run the node.

![Using the Read Binary File node to get the video](REDACTED)


::: v-pre
### 3. YouTube node (upload: video)

1. First of all, you'll have to enter credentials for the YouTube node. You can find out how to do that [here](../../../credentials/Google/README.md).
2. Select 'Video' from the ***Resource*** dropdown list.
3. Select 'Upload' from the ***Operation*** dropdown list.
4. Enter the title of the video in the ***Title*** field.
5. Select the region code from ***Region Code*** dropdown list.
6. Select the video category from the ***Category ID*** dropdown list.
7. Click on ***Execute Node*** to run the node.
:::

![Using the YouTube node to upload a video](REDACTED)


::: v-pre
### 4. YouTube1 node (create: playlist)

1. Select the credentials that you entered in the previous YouTube node.
2. Select 'Playlist' from the ***Resource*** dropdown list.
3. Select 'Create' from the ***Operation*** dropdown list.
4. Enter the title of the playlist in the ***Title*** field.
5. Click on ***Execute Node*** to run the node.
:::

![Using the YouTube node to create a playlist](REDACTED)


::: v-pre
### 5. YouTube2 node (add: playlistItem)

1. Select the credentials that you entered in the previous YouTube node.
2. Select 'Playlist Item' from the ***Resource*** dropdown list.
3. Select the playlist from the ***Playlist ID*** dropdown list.
4. Click on the gears icon next to the ***Video ID*** field and click on ***Add Expression***.
5. Select the following in the ***Variable Selector*** section: Nodes > YouTube > Output Data > JSON > id. You can also add the following expression: `{{$node["YouTube"].json["id"]}}`.
6. Click on ***Execute Node*** to run the node.
:::

![Using the YouTube node to add the video to the playlist](REDACTED)

## Further Reading

<FurtherReadingBlog />

---
permalink: /nodes/n8n-nodes-base.spotify
description: Learn how to use the Spotify node in n8n
---

# Spotify

[Spotify](https://www.spotify.com/) is a music streaming service containing millions of music tracks and podcasts. Spotify allows users to create and manage their own playlists, explore new music through recommendation services, and listen to songs on demand.

::: tip 🔑 Credentials
You can find authentication information for this node [here](../../../credentials/Spotify/README.md).
:::

## Basic Operations

<Resource node="n8n-nodes-base.spotify" />

## Example Usage

This workflow allows you to add a song to your queue in Spotify. You can also find the [workflow](https://n8n.io/workflows/440) on the website. This example usage workflow would use the following two nodes.
- [Start](../../core-nodes/Start/README.md)
- [Spotify]()

The final workflow should look like the following image.

![A workflow with the Spotify node](REDACTED)

### 1. Start node

The start node exists by default when you create a new workflow.

### 2. Spotify node

1. First of all, you'll have to enter credentials for the Spotify node. You can find out how to do that [here](../../../credentials/Spotify/README.md).
2. Enter the song's URI (or ID) to the *Track ID* field. The following GIF shows you how to find the Track ID on Spotify's UI.
3. Click on *Execute Node* to run the workflow.

![Spotify URI](REDACTED)

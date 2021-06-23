---
permalink: /credentials/facebookGraphApp
description: Learn to configure credentials for the Facebook Trigger node in n8n
---

# Facebook App

You can use these credentials to authenticate the following nodes with Facebook.
- [Facebook Trigger](../../nodes-library/trigger-nodes/FacebookTrigger/README.md)

**Note:** If you want to create credentials for the [Facebook Graph API](../../nodes-library/nodes/FacebookGraphAPI/README.md) node, follow the instructions mentioned in the [Facebook Graph API](../FacebookGraphAPI/README.md) credentials documentation.

## Prerequisites

Create a [Facebook](https://www.facebook.com/) account.

## Using App Access Token

1. Access the [Facebook for Developers portal](https://developers.facebook.com/).
2. Click on ***My Apps*** on the top right corner.
3. Access your app. Create an app if you don't already have one.
4. Add the ***Webhooks*** product from the ***Add a Product*** section on the dashboard.
5. Click on ***Settings*** in the left sidebar and select 'Basic'.
6. Click on the ***Show*** button and login with your Facebook account.
7. Copy the App Secret displayed on the page.
8. Access the [Facebook Graph API Explorer](https://developers.facebook.com/tools/explorer/).
9. Select your app from the ***Facebook App*** dropdown list on the right sidebar.
10. Select 'Get App Token' from the ***User or Page*** dropdown list on the right sidebar.
11. Use the app secret and the generated access token with your Facebook node credentials in n8n.

![Getting Facebook App credentials](REDACTED)

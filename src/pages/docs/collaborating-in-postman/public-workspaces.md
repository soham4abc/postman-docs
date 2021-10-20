---
title: "Public workspaces"
order: 76
page_id: "public_workspaces"
warning: false
contextual_links:
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Creating workspaces"
    url: "/docs/collaborating-in-postman/using-workspaces/creating-workspaces/"
  - type: link
    name: "Public Workspaces: Why We Created Them and What You Can Do with Them"
    url: "https://blog.postman.com/public-workspaces-why-we-created-them-what-you-can-do/"
  - type: link
    name: "Increasing Adoption of an API with a Public Workspace"
    url: "https://blog.postman.com/increasing-adoption-of-an-api-with-a-public-workspace/"
  - type: link
    name: "LGBTQ+ Pride Public Workspace: An Invitation for the API Community to Celebrate Pride"
    url: "https://blog.postman.com/lgbtq-pride-public-workspace-api-community/"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Public Workspaces | The Exploratory"
    url: "https://youtu.be/DjGbMdqnY64"
  - type: link
    name: "Add Summaries and Categories on the Public API Network | Postman Level Up"
    url: "https://youtu.be/4ulU2FZMPjQ"
---

[Public workspaces](https://blog.postman.com/public-workspaces-why-we-created-them-what-you-can-do/) enable you to collaborate on entities with anyone across the world. Before you create a public workspace, navigate to your [team profile settings](https://go.postman.co/settings/team/general) and enable your public team profile. This will ensure your team's profile will show up on the [Public API Network](https://www.postman.com/explore).

<img alt="Enable team profile" src="https://assets.postman.com/postman-docs/enable-public-profile-url.jpg"/>

## Contents

* [Creating a public workspace](#creating-a-public-workspace)
* [Accessing a public workspace](#accessing-a-public-workspace)
* [Sharing a public workspace](#sharing-a-public-workspace)
* [Adding elements to a public workspace](#adding-elements-to-a-public-workspace)
* [Removing elements from a public workspace](#removing-elements-from-a-public-workspace)
* [Deleting a public workspace](#deleting-a-public-workspace)
* [Managing public workspace members](#managing-public-workspace-members)
* [Collaborating in a public workspace](#collaborating-in-a-public-workspace)
* [Adding categories and summaries](#adding-categories-and-summaries)
* [Next steps](#next-steps)

## Creating a public workspace

> You must be a [__workspace admin__](/docs/collaborating-in-postman/roles-and-permissions/#workspace-roles) to change the visibility of a workspace to public.

There are four types of workspaces: personal, team, private, and public workspaces. When you open a workspace, Postman will provide an overview of its contents, activity, and members in a new tab.

Open the workspace menu, then click **Create Workspace**.

<img alt="Workspace menu" src="https://assets.postman.com/postman-docs/workspace-switcher-v9.1.jpg" width="400px"/>

Specify a workspace name and summary. Under **Visibility**, select **Public**.

<img alt="Create public workspace" src="https://assets.postman.com/postman-docs/create-public-wkspc-v9.1.jpg" width="400px"/>

You can also convert an existing workspace to a public workspace. Open the workspace in Postman. In the **Overview** tab, select **Workspace Settings** in the upper right. Under **Visibility**, select **Public** from the dropdown list, then **Request to Change Visibility**.

<img alt="Visibility" src="https://assets.postman.com/postman-docs/workspace-settings-request-visibility-change-v9.1.0.jpg" width="400px"/>

If you are on a Postman Business or Enterprise plan, you need a community manager's approval to change a workspace's visibility to __Public__.

When you make a workspace public, a notification is sent to all workspace members. Select the notification bell in the top right corner to view notifications.

<img alt="In app notification" src="https://assets.postman.com/postman-docs/visibility-app-notification.jpg" width="500px"/>

In addition to this, all users will receive an email with the workspace information regarding who has made the change and which workspace was affected. The email will also provide a direct link to the workspace.

<img alt="Email notification" src="https://assets.postman.com/postman-docs/email-notification-public-workspace-v2.jpg" width="500px"/>

Once you make a workspace public, all entities within that workspace become publicly accessible through the workspace.

> Within a team, you cannot have two public workspaces with the same name.

## Accessing a public workspace

You can access public workspaces via the [**Workspaces** category in the API Network](https://www.postman.com/explore/workspaces). You can also access personal, team, and private workspaces using the workspace selector at the top of Postman.

[![Access Public Workspaces](https://assets.postman.com/postman-docs/accessing-public-workspaces.gif)](https://assets.postman.com/postman-docs/accessing-public-workspaces.gif)

To view and edit your public workspace's name and summary, navigate to the workspace in Postman. In the **Overview** tab, hover over the workspace name or summary and select to edit. Changes will be saved automatically.

<img alt="Create public workspace dropdown" src="https://assets.postman.com/postman-docs/workspace-edit-name-details-overview-tab-v9.1.jpg"/>

## Sharing a public workspace

You can share a public workspace by sharing its **public profile URL** directly. To access the public profile URL, navigate to your **Team**, then click **Team Settings**.

<img alt="View team settings" src="https://assets.postman.com/postman-docs/view-team-settings-for-public-profile.jpg" height="400px"/>

Copy the **Public profile URL** and paste it in your browser to access your workspace.

<img alt="Enable public profile url" src="https://assets.postman.com/postman-docs/enable-public-profile-url.jpg"/>

## Adding elements to a public workspace

You can add existing collections and environments to another public workspace by sharing them.

To share a collection to a public workspace, open it via Collections on the left-hand side, click **...** > **Share collection**.

<img alt="Adding an collection to public workspace" src="https://assets.postman.com/postman-docs/share-collection-public-workspace.jpg" height="500px"/>

To share an environment, open it via Environments on the left-hand side, click **...** > **Share environment**.

<img alt="Adding an environment to public workspace" src="https://assets.postman.com/postman-docs/share-environment-public-workspace.jpg" height="400px"/>

Select the public workspace you want to share to, and choose whether you also want to remove the element from its current workspace. Click **Share and Continue**.

<img alt="Share element to public workspace" src="https://assets.postman.com/postman-docs/share-element-to-public-workspace.jpg" height="400px"/>

## Removing elements from a public workspace

When you remove an element from a public workspace, it is no longer visible in that particular workspace. The element is still available in any other workspace where it has been added.

From Postman, you can remove a collection from the sidebar. Click **...** to open the collection menu. Select **Remove from workspace** and confirm that you would like to remove the collection from the current workspace. The collection will no longer be visible in the workspace.

<img alt="Removing a collection to public workspace" src="https://assets.postman.com/postman-docs/remove-collection-public-workspace.jpg" height="500px"/>

To remove an environment from the sidebar, click **...** next to the environment menu or click **...** next to the Share button in the Environment tab. Select **Remove from workspace** and confirm that you would like to remove the environment from the current workspace. The environment will no longer be visible in the workspace.

<img alt="Removing an environment to public workspace" src="https://assets.postman.com/postman-docs/remove-environment-public-workspace.jpg"/>

> Note that deleting an element is different to removing it. When you delete an element it is no longer available in any workspace. When you remove an element from a specific workspace, it will still be available in any other workspaces it was in.

## Deleting a public workspace

Public workspaces must have their visibility reverted in order to be deleted. If you try to delete a public workspace by clicking **...** on the right corner of the workspace overview, the option to delete will be greyed out.

<img alt="Deleting a public workspace" src="https://assets.postman.com/postman-docs/delete-option-greyed-public-workspace.jpg"/>

To change the visibility of a public workspace, change the visibility dropdown to **Team**, then **Save Changes**. After changing the visibility, you will be able to delete the workspace. Click **...** > **Delete workspace**.

## Managing public workspace members

If you're a team administrator you can add or remove any member from your public workspace via the **Members** tab. To add members to a public workspace, see [Inviting to team workspaces](/docs/administration/managing-your-team/managing-your-team/#inviting-to-team-workspaces).

Another way to add workspace members is to click **Manage Team** and select **Invite Users**.

<img alt="add workspace members public workspace (2)" src="https://assets.postman.com/postman-docs/manage-team-v8.jpg"/>

Enter an email address, click **Add** to the team, select the roles you would like to assign to them, then select **Send Invitations**. You can also generate a link and invite people to your team by sharing the link with them.

<img alt="Edit members for a public workspace" src="https://assets.postman.com/postman-docs/edit-member-public-workspace.jpg"/>

> Team members will receive an email and in-app notification when added to a public workspace.

To remove any team member, click the trash icon next to the individual you want to remove from the workspace, and select **Remove User From Team**.

<img alt="Remove team members for a public workspace" src="https://assets.postman.com/postman-docs/remove-member-public-workspace.jpg"/>

Click **X** next to the team member you want to remove from the public workspace, and click **Save**.

<img alt="Remove members for a public workspace from overview" src="https://assets.postman.com/postman-docs/remove-team-member-workspace-overview.jpg" width="400px"/>

## Collaborating in a public workspace

To collaborate on entities within a public workspace, open the workspace menu and select the workspace.

For collections and environments, [create a fork](/docs/collaborating-in-postman/version-control-for-collections/#forking-a-collection) and request to merge changes via a [pull request](/docs/collaborating-in-postman/version-control-for-collections/#creating-pull-requests).

For APIs, navigate to the API and version. Select **Definition** > **Request Access** to request an editor role.

## Adding categories and summaries

Add categories and summaries to improve the visibility of your collections, APIs, and workspaces on the Public API Network.

1. Select **Team > Team Settings**, and then open your team's Public profile URL.
1. Select the **Collections**, **APIs**, or **Workspaces** tab.
1. Hover over an item and select **Edit listing**.
1. Enter a brief **Summary** that describes your collection, API, or workspace.
1. Select up to three categories.
1. Select **Save**.

![Adding categories and summaries](https://assets.postman.com/postman-docs/workspace-add-categories-v9.jpg)

## Next steps

To add an API to the network, see [Adding your API](/docs/collaborating-in-postman/adding-private-network/#adding-your-apis).

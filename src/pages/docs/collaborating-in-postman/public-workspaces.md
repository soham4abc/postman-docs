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

---

[Public workspaces](https://blog.postman.com/public-workspaces-why-we-created-them-what-you-can-do/) enable you to browse and collaborate on entities with anyone across the world. Before you create a public workspace, navigate to team profile settings and enable your public team profile. This will ensure your team's profile will show up on the Public API Network.

<img alt="Enable team profile" src="https://assets.postman.com/postman-docs/enable-team-profile.jpg" height="500px"/>

## Contents

* [Creating a public workspace](#creating-a-public-workspace)
* [Accessing a public workspace](#accessing-a-public-workspace)
* [Sharing a public workspace](#commenting-on-a-folder)
* [Joining a public workspace](#joining-a-public-workspace)
* [Leaving a public workspace](#leaving-a-public-workspace)
* [Adding elements to a public workspace](#adding-elements-to-a-public-workspace)
* [Removing elements from a public workspace](#removing-elements-from-a-public-workspace)
* [Deleting a public workspace](#deleting-a-public-workspace)
* [Managing public workspace members](#managing-public-workspace-members)
* [Next steps](#next-steps)

## Creating a public workspace

There are four types of workspaces - personal, team, private and public workspaces. When you open a workspace, Postman will provide an overview of its contents, activity, and members in a new tab.

Open the workspace menu, then click **+ New Workspace**.

[![New workspace](https://assets.postman.com/postman-docs/create-new-workspace-v8.jpg)](https://assets.postman.com/postman-docs/create-new-workspace-v8.jpg)

Specify a workspace name and summary. For __Free__ and __Team__ users, to create a public workspace change the workspace visibility to __Public__. Add collaborators by entering their email addresses, then define their [workspace roles](/docs/collaborating-in-postman/roles-and-permissions/#workspace-roles).

[![Public workspace](https://assets.postman.com/postman-docs/create-public-workspace-v8.jpg)](https://assets.postman.com/postman-docs/create-public-workspace-v8.jpg)

You can also create a public workspace by selecting the team workspace and changing the team's visibility dropdown to __Public__ and clicking __Request to Change Visibility__.

[![Overview team workspace](https://assets.postman.com/postman-docs/overview-team-workspace.jpg)](https://assets.postman.com/postman-docs/overview-team-workspace.jpg)

For __Business__ and __Enterprise__ users, you need a community manager's approval to change the workspace visibility to __Public__.

<img alt="Visibility" src="https://assets.postman.com/postman-docs/visibility-options-v8.jpg" width="400px"/>

Once you make a workspace public, the notification is sent to workspace members. Click the notification bell in the top right corner to view notifications.

[![In app notification](https://assets.postman.com/postman-docs/visibility-app-notification.jpg)](https://assets.postman.com/postman-docs/visibility-app-notification.jpg)

In addition to this, you will receive an email with the workspace information regarding who has made the change and which workspace was affected with the sharing link for the workspace.

[![Email notification](https://assets.postman.com/postman-docs/email-notification-public-workspace-v2.jpg)](https://assets.postman.com/postman-docs/email-notification-public-workspace-v2.jpg)

Once you make a workspace public, all entities within that workspace become publicly accessible through the workspace. You need to be a [__workspace admin__](/docs/collaborating-in-postman/roles-and-permissions/#workspace-roles) to change the visibility of a workspace to public. Within a team, you cannot have two public workspaces with the same name.

> You can convert a private workspace directly to public.

## Accessing a public workspace

You can access public workspaces via the [**Workspaces** category in the API Network](https://www.postman.com/explore/workspaces). You can also access personal, team, and private workspaces using the workspace selector at the top of Postman.

To view and edit your public workspace details (e.g. name, description), navigate to the workspace selector and hover over a workspace. Then, click ... and select View Details.

[![Access Public Workspaces](https://assets.postman.com/postman-docs/access_public_workspaces.gif)](https://assets.postman.com/postman-docs/access_public_workspaces.gif)

## Sharing a public workspace

You can share a Public workspace by sharing its URL directly. To access the public profile URL, navigate to Your Team, then click View Team Settings.

<img alt="Sharing a public workspace" src=""/>

## Joining a public workspace

If you are part of a team in Postman, you can find public workspaces to join. Open the workspaces drop-down from the control at the top of Postman in the left. Search for a public workspace and select the workspace you want to join.

<img alt="Joining a public workspace overview" src=""/>

Select the public workspace, then click **Join Workspace** at the top right.

<img alt="Join public workspace" src=""/>

Once you join the workspace, you can start creating collections, sending requests, visualizing your responses and even much more.

## Leaving a public workspace

To leave a public workspace, select the ... on the right corner of the workspace overview and Leave workspace. Click Leave to finalize leaving the workspace.

<img alt="Leave public workspace" src=""/>

## Adding elements to a public workspace

You can add existing collections and environments to another public workspace by sharing them.

To share a collection to a public workspace, open it via Collections on the left-hand side, click ... and choose Share Collection.

<img alt="Adding an collection to public workspace" src=""/>

To share an environment, open it via Environments on the left-hand side, click ... and choose Share environment.

<img alt="Adding an environment to public workspace" src=""/>

## Removing elements from a public workspace

When you remove an element from a public workspace, it is no longer visible in that particular workspace. The element is still available in any other workspace where it has been added.

From Postman, you can remove a collection from the sidebar. Click ... to open the collection menu. Select Remove from Workspace and confirm that you would like to remove the collection from the current workspace. The collection will no longer be visible in the workspace.

<img alt="Removing a collection to public workspace" src=""/>

Also, you can remove an environment from the sidebar. Click ... next to the environment menu. You can also click ... next to the Share button in the Environment tab. Select Remove from workspace and confirm that you would like to remove the environment from the current workspace. The environment will no longer be visible in the workspace.

<img alt="Removing an environment to public workspace" src=""/>

> Note that deleting an element is different to removing it. When you delete an element it is no longer available in any workspace. When you remove an element from a specific workspace, it will still be available in any other workspaces it was in.

## Deleting a public workspace

Public workspaces must have their visibility reverted in order to be deleted. If you try to delete a public workspace by clicking ... on the right corner of the workspace overview, the option to delete will be greyed out.

<img alt="Deleting a public workspace" src=""/>

## Managing public workspace members

If you're a team administrator you can manage the members of your public workspace, via the Members tab. You have the permission to add and remove any member from a public workspace. To add members to a public workspace, navigate to the Members section, enter an email address, click Add to the team, then Save.

<img alt="add members for public workspace (1)" src=""/>

Another way to add workspace members is to click Manage Team and select Invite Users.

<img alt="add workspace members public workspace (2)" src=""/>

Enter an email address, click Add to the team, then select Send Invitations. You can also generate a link and invite people to your team by sharing the link with them.

<img alt="edit members for a public workspace" src=""/>

To remove any team member, click the trash icon near the person you want to remove, and select Remove User From Team.

<img alt="remove members for a public workspace" src=""/>

## Next steps

Learn more about [collaborating in workspaces](/docs/collaborating-in-postman/collaboration-intro/) in Postman.

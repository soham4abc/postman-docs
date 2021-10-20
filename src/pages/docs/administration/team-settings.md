---
title: "Configuring team settings"
order: 125
page_id: "team_settings"
warning: false
contextual_links:
  - type: section
    name: "Next Steps"
  - type: link
    name: "Working with your team"
    url: "/docs/collaborating-in-postman/collaboration-intro/"
  - type: link
    name: "Managing your team"
    url: "/docs/administration/managing-your-team/managing-your-team/"

---

Your [Team Settings](https://go.postman.co/settings/team/general) allow you to manage items such as your team's profile, discoverability, custom domains, billing details, authentication, and active invite links.

## Contents

* [Accessing team settings](#accessing-team-settings)
* [Editing your team profile](#editing-your-team-profile)
* [Making your team discoverable](#making-your-team-discoverable)
* [Adding custom domains](#adding-custom-domains)
* [Updating billing details](#updating-billing-details)
* [Editing authentication methods](#editing-authentication-methods)
* [Understanding roles and permissions](#understanding-roles-and-permissions)
* [Managing invite links](#managing-invite-links)

## Accessing team settings

You can access team settings by navigating to the **Team** dropdown menu in the upper right corner and selecting **Team Settings**.

<img alt="Team menu with Team Settings selected" src="https://assets.postman.com/postman-docs/team-settings-menu-selected.jpg" width="350px"/>

## Editing your team profile

When you select **Team Settings**, you will be automatically directed to **Edit Profile**. Here, you can edit your team's logo, cover photo, URL, name, and favicon.

<img alt="Edit team profile" src="https://assets.postman.com/postman-docs/edit-team-profile-settings.jpg"/>

**Customize your team's look.** Keep in mind the following when uploading a logo, cover photo, or favicon:

* Logos and cover photos must be 500 KB or less in size and must be in **.jpg**, **.jpeg**, or **.png** format.
* Logos must have a 1:1 aspect ratio (height:width), and cover photos must have a 1:7.5 aspect ratio. If your image has a different aspect ratio, Postman prompts you to select a portion of your image to display.
* Favicons must be in **.ico** format, no larger than 32x32 pixels, and 500 KB or less in size. Your favicon is displayed on the browser tab of your team's published documentation site.

**Make your team discoverable.** If you enable your team's public profile, your team will be visible on Postman's [API Network](/docs/collaborating-in-postman/adding-private-network/), along with any [APIs](/docs/collaborating-in-postman/adding-private-network/#adding-your-apis), [collections](/docs/publishing-your-api/publishing-your-docs/), and [workspaces](/docs/collaborating-in-postman/public-workspaces/) your team has published. You can also add an **About your team** section, a link to your website, and links to social media accounts to your team's public profile.

## Making your team discoverable

You can select **Team Discovery** from the left-hand menu to view your options for making your team discoverable to other Postman users with email addresses from your team's domain.

See [Team Discovery](/docs/collaborating-in-postman/collaboration-intro/#team-discovery) for more information on this feature and the admin and user experience it provides.

<img alt="Edit team profile" src="https://assets.postman.com/postman-docs/team-discovery-enable-v9.1.0.jpg"/>

## Adding custom domains

Select **Custom Domains** from the left-hand menu to add, update, or remove custom domains for your API documentation.

Visit [Using custom domains](/docs/publishing-your-api/custom-doc-domains/) for information on adding, verifying, troubleshooting, and publishing to custom domains.

<img alt="Adding custom domains" src="https://assets.postman.com/postman-docs/ts-custom-domains.jpg"/>

## Updating billing details

Select **Billing Details** from the left-hand menu to add to or update your team's billing information including email, address, and VAT ID (if applicable).

View [Adding custom information to invoices](/docs/administration/billing/#adding-custom-information-to-invoices) for information on modifying new and existing invoices.

<img alt="Updating billing details" src="https://assets.postman.com/postman-docs/ts-billing-details.jpg" width="500px"/>

## Editing authentication methods

> SSO is available on Postman Business and Enterprise plans.

Select **Authentication** from the left-hand menu to configure or reconfigure your team's authentication methods.

See [Configuring SSO for a team](/docs/administration/sso/admin-sso/) for details on how to configure your team's custom SSO setup and manage user accounts.

<img alt="Editing authentication methods" src="https://assets.postman.com/postman-docs/ts-authentication.jpg"/>

## Understanding roles and permissions

Select **Roles and Permissions** from the left-hand menu to view a complete list of permissions for team members' roles at a team, collection, workspace, API, and mock server level.

View [Defining roles](/docs/collaborating-in-postman/roles-and-permissions/) for more information on roles you can assign to members of your team and [Managing your team](/docs/administration/managing-your-team/managing-your-team/) for an overview of managing roles and users within your Postman team.

<img alt="Roles and permissions descriptions" src="https://assets.postman.com/postman-docs/ts-roles-and-permissions.jpg"/>

## Managing invite links

You can select [**Manage Invite Links**](https://go.postman.co/settings/team/manage-invite-links) from the left-hand menu to view a list of invitation links your team has generated. Here, you can review which users generated links, when they were generated, their expiry date, and their URL.

<img alt="Managing invite links" src="https://assets.postman.com/postman-docs/team-manage-invite-links-v9.1.0.jpg"/>

You can hover over a row and select the **Copy Link** icon on the right-hand side to copy the corresponding invite URL. To delete a link, hover over the row and select the **Delete Link** trash can icon on the right-hand side.

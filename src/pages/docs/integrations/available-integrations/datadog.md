---
title: "Datadog"
order: 166
page_id: "datadog"
warning: false
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Grouping requests in collections"
    url: "/docs/sending-requests/intro-to-collections/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Postman Is Now a Datadog Technology Partner: More Integration Features"
    url: "https://blog.postman.com/postman-datadog-technology-partner-more-integration-features/"

---

Datadog is a monitoring service for cloud-scale applications. It combines data from servers, databases, tools, and services to present a unified view of an entire stack. This integration allows you to configure your Postman Monitors to send metrics to Datadog where you can visualize and compare them with other metrics.

Setting up a Datadog integration requires you to get an API key from Datadog and configure your Postman Monitors. After you set up the integration, you can view real-time alerts based on the results of your monitors.

## Retrieving your Datadog API Key

1. Log in to [Datadog](https://app.datadoghq.com/) and select **Integrations** in the header toolbar.

1. An `API Key` is created for you automatically under the **APIs** tab. If you want, you can also create a key by specifying a name for it.

1. Save the API Key to use later.

    ![get datadog integrations API key](https://assets.postman.com/postman-docs/datadog-get-api-key-bb.jpg)

## Configuring Postman Monitors

1. From the **[Home](https://go.postman.co/home)** page select **[Integrations](https://go.postman.co/integrations)**.

    ![home page and integrations](https://assets.postman.com/postman-docs/home-integrations.jpg)

1. Search and select **Datadog**.

    [![datadog integrations page](https://assets.postman.com/postman-docs/datadog-all-search.jpg)](https://assets.postman.com/postman-docs/datadog-all-search.jpg)

1. You can select **View All** to see all integrations already created by your team.

   [![datadog integrations page](https://assets.postman.com/postman-docs/datadog-details.jpg)](https://assets.postman.com/postman-docs/datadog-details.jpg)

1. Select **Add Integration** to start the configuration process.

   <img alt="Add integration datadog" src="https://assets.postman.com/postman-docs/datadog-save-add-integration.jpg" width="300px"/>

1. To send your monitor metrics and events to Datadog:

   * Name your new integration.
   * Select the workspace and monitor whose data you would like to send to Datadog.
   * Enter your [Datadog API key](https://docs.datadoghq.com/account_management/api-app-keys/).
   * Select the Datadog region you would like to use.
   * Optionally indicate if you want to send events for completed runs or send metrics for each run.

1. Select the **Add Integration** button.

## Viewing data in Datadog

As soon as your monitor runs, the data will start flowing into Datadog.

[![view in datadog](https://assets.postman.com/postman-docs/datadog-monitor-alerts.jpg)](https://assets.postman.com/postman-docs/datadog-monitor-alerts.jpg)

Once the data is present in Datadog, you can filter it based on the monitor name/uid, collection name/uid, user name/id, and environment name/uid (if present). You can also combine different metrics to create a dashboard.

[![datadog filters](https://assets.postman.com/postman-docs/58831776.png)](https://assets.postman.com/postman-docs/58831776.png)

## Metrics renaming

Postman is able to forward a wide array of metrics for the specified monitors. With the latest release, Postman has adopted a new nomenclature for the metrics that are sent to Datadog.
This adheres to the standard naming convention that is followed across many Application Performance Monitoring (APM) tools. The current name and previous name are shown in the first column below.

| **Metrics Name (previous name)**          |       **Type**         | **Description**         | **Level**         |
| ------------- | ------------- | ------------- | ------------- |
| postman.monitor.run.errors (PostmanMonitors\_errors) |GAUGE   | The total number of errors across all requests in a monitoring run | Run
| postman.monitor.run.failed\_tests (PostmanMonitors\_failedTests)  | GAUGE  | The total number of failed tests across all requests in a monitoring run | Run
| postman.monitor.run.passed\_tests (PostmanMonitors\_passedTests) | GAUGE  | Total number of passed tests across all requests in a monitoring run | Run
| postman.monitor.run.request\_count (PostmanMonitors\_requestCount) | GAUGE  | Total number of requests in a monitoring run | Run
| postman.monitor.run.total\_latency (PostmanMonitors\_totalLatencys)  | GAUGE  | The total latency time for all requests in a monitoring run | Run
| postman.monitor.run.http\_status\_2xx (PostmanMonitor\_run\_httpStatus2XX) | GAUGE  | Total number of requests in a monitoring run that return an HTTP status code in the 200 range  | Run  |
| postman.monitor.run.http\_status\_4xx (PostmanMonitor\_run\_httpStatus4XX)  | GAUGE  | Total number of requests in a monitoring run that return an HTTP status code in the 400 range  | Run  |
| postman.monitor.run.http\_status\_5xx (PostmanMonitor\_run\_httpStatus5XX)  | GAUGE  | Total number of requests in a monitoring run that return an HTTP status code in the 500 range  | Run  |
| postman.monitor.request.latency (PostmanMonitor\_request\_latency)  | GAUGE  | The latency for each request in a monitoring run  | Request  |
| postman.monitor.request.failed\_tests (PostmanMonitor\_request\_failedTests) | GAUGE  | Number of failed tests for each request in a monitoring run  | Request  |
| postman.monitor.request.passed\_tests (PostmanMonitor\_request\_passedTests) | GAUGE  | Number of passed tests for each request in a monitoring run  | Request  |
| postman.monitor.request.bytes (PostmanMonitor\_request\_bytes) | GAUGE  | Total bytes sent and received for each request in a monitoring run  | Request |

<br />

## Metrics tags

Postman sends tags to Datadog along with each metric and event. Tags enable you to filter the metric based on various parameters such as monitor name or collection name. The following tags are sent by Postman to Datadog:

| **Tag**          | **Description**
| ------------- | -------------
| Region | The region from where the monitor is run
| Triggers | What triggered the monitor run: Manual, Webhook, or Scheduled
| Run results | Successful, Failure, Error, or Abort
| Level | The level the metric is captured for: Run or Request
| Status Code | HTTP response code for the request run
| Job ID | Monitor's Job ID
| Request ID | The request identifier

## Updating old integrations

Postman is now a Datadog Technology Partner. Postman’s Integration is listed on Datadog’s Integrations page. To enable the partnership, the metrics being emitted by Postman have been renamed as described above.

If you have previously created any integrations, you must update them to take the advantage of the integration listing on Datadog. To update the old integrations to the new format:

1. Go to the [Post monitoring results](https://go.postman.co/integrations/service/datadog/monitor_run_datadog) page.

1. Click the integration you want to upgrade.

1. Click **Update Now**, then click **Update Integration** on the confirmation box to upgrade the Integration.
  [![Datadog upgrade integration](https://assets.postman.com/postman-docs/datadog-integration-upgrade.jpg)](https://assets.postman.com/postman-docs/datadog-integration-upgrade.jpg)
1. Click **Confirm**.

The updated Integration has the following benefits:

* The Postman metrics for the new Integration are no longer treated as [Custom Metrics](https://docs.datadoghq.com/metrics/) in Datadog and hence are free. (Custom metrics on Datadog are [charged](https://docs.datadoghq.com/account_management/billing/custom_metrics/?tab=countrategauge).)
* A default Dashboard is provided on Datadog that can be used to observe the Monitor. Change the `monitor_name` variable to the Monitor for which you want to observe the Dashboard.
  [![Datadog dashboard](https://assets.postman.com/postman-docs/datadog-dashboard.jpg)](https://assets.postman.com/postman-docs/datadog-dashboard.jpg)

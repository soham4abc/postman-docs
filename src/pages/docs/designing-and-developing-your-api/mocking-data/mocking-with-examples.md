---
title: "Mocking with examples"
order: 85
page_id: "mocking_with_examples"
search_keyword: "x-mock-response-code"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Sending requests"
    url: "/docs/sending-requests/requests/"
  - type: link
    name: "Grouping requests in collections"
    url: "/docs/sending-requests/intro-to-collections/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Fake APIs for Real Developers"
    url: "https://www.youtube.com/watch?v=fgtDZPOPzLU"
  - type: subtitle
    name: "Related Blog Posts"
  - type: link
    name: "Mock responses in Postman by using Examples"
    url: "https://blog.postman.com/mock-responses-in-postman-by-using-examples/"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Test scripts"
    url: "/docs/writing-scripts/test-scripts/"

warning: false
---

Let's deep dive into how [mock servers](/docs/designing-and-developing-your-api/mocking-data/setting-up-mock/) and [examples](/docs/sending-requests/examples/) work together, and how you can integrate them into your workflow for an enhanced API experience with Postman.

1. Sending a request (R1)
2. Saving the request (R1) to a collection (C1)
3. Saving the request R1's response as an example (P1)
4. Creating a mock (M1) for the collection (C1)
5. Sending a request using the mock server (M1)
6. Using query params to match

## Setting up some basics

Before you get into the details of mocking, let’s start with setting up some basics required for mocks to work:

### Step 1: Sending a request (R1)

From Postman, send a `GET` request to the URL `https://postman-echo.com/get?test=123`. This request hits the [Postman Echo](https://docs.postman-echo.com/#078883ea-ac9e-842e-8f41-784b59a33722) service which you can use to test out your REST/SOAP clients and make sample API calls.

The resulting response can be seen on the right, and a record of this request will now be visible in your [history](/docs/getting-started/navigating-postman/#history) on the left.

[![sending request](https://assets.postman.com/postman-docs/WS-anuhyaMock1.png)](https://assets.postman.com/postman-docs/WS-anuhyaMock1.png)

### Step 2: Saving the request (R1) to a collection (C1)

Hit the **Save** button to open the **SAVE REQUEST** modal. [Collections](/docs/sending-requests/intro-to-collections/) are groups of requests that can be connected together to create APIs and workflows.

[![save request button](https://assets.postman.com/postman-docs/WS-anuhyaMock2-1.png)](https://assets.postman.com/postman-docs/WS-anuhyaMock2-1.png)

You can save a request to an existing collection, or save it to a new collection.  Create a new collection called `C1`.

[![save request modal](https://assets.postman.com/postman-docs/WS-anuhyaMock3.png)](https://assets.postman.com/postman-docs/WS-anuhyaMock3.png)

Collection `C1` will now be accessible in the **Collections** tab in the application. You can do all sorts of things within the collection details view: [viewing API documentation](/docs/publishing-your-api/viewing-documentation/), [mocking a collection](/docs/designing-and-developing-your-api/mocking-data/setting-up-mock/), [monitoring a collection](/docs/monitoring-your-api/setting-up-monitor/), or [running the collection](/docs/running-collections/intro-to-collection-runs/).

[![collection tab](https://assets.postman.com/postman-docs/WS-anuhyaMock4.png)](https://assets.postman.com/postman-docs/WS-anuhyaMock4.png)

### Step 3: Saving the request R1's response as an example (P1)

Now, let's save an example response from the request just sent by hitting the **Save Response** button.

[![save response button](https://assets.postman.com/postman-docs/WS-anuhyaMock5.png)](https://assets.postman.com/postman-docs/WS-anuhyaMock5.png)

This takes us to the **Examples** screen which can be used to save the request response as an example. Let's call this example `P1`.

[![examples screen](https://assets.postman.com/postman-docs/WS-anuhyaMock6.png)](https://assets.postman.com/postman-docs/WS-anuhyaMock6.png)

Enter a name for this example.  The request method, URL, and status code are crucial in determining which responses will be returned by the mock you will create. Verify these elements are all as desired, and hit the **Save Example** button. Hit the back arrow in the top left to return to the request builder, and you can now see the example created in the top right, added to the request.

[![see example](https://assets.postman.com/postman-docs/WS-anuhyaMock7.png)](https://assets.postman.com/postman-docs/WS-anuhyaMock7.png)

## Mocking with examples

In the previous steps, you prepared the collection, request, and example response necessary for us to get started with mocking. So let’s continue with the next steps.

### Step 4: Creating a mock (M1) for the collection (C1)

There are two ways to create a mock for a collection: 1) using the Postman app and 2) [using the Postman API](/docs/designing-and-developing-your-api/mocking-data/mock-with-api/). In this example, you will mock a collection using Postman.

Click on the arrow (&#9656;) next to the collection you wish to mock to expand the collection details view.

[![mock in collection details view](https://assets.postman.com/postman-docs/WS-anuhyaMock10.png)](https://assets.postman.com/postman-docs/WS-anuhyaMock10.png)

Under the **Mocks** tab, click the **Add a mock** link to open the **MOCK COLLECTION** modal. Here, you can choose a corresponding environment to include in your mock.

The single saved example (P1) does not use environment variables, so you can create a mock with `No Environment` chosen. It’s important to note that if your saved example has an environment variable in the URL, for example, `{{base_url}}/my/path` and you do not provide the corresponding environment when creating the mock, trying to mock that particular request will not work.

Mocks are accessible to public by default. If you check the box making the mock server private, you can share the underlying collection with the team or specific team members, and provide permissions to edit or view.

[![mock collection modal](https://assets.postman.com/postman-docs/WS-anuhyaMock9.png)](https://assets.postman.com/postman-docs/WS-anuhyaMock9.png)

Once you mock the collection, it will be visible under the `Mocks` tab of the collection details view. You can also see the mock URL you will need for the next step.

### Step 5: Sending a request using the mock server (M1)

Now that you have created the mock `M1`, let's try sending a request to this mock endpoint. Copy the mock URL from the mock you created in the previous step, and paste it into a new request, with an undefined path in this case `https://b75a340e-4268-4b20-8f5f-3cfc8f37cec6.mock.pstmn.io`.

[![send a request to mock server](https://assets.postman.com/postman-docs/WS-anuhyaMock8-1.png)](https://assets.postman.com/postman-docs/WS-anuhyaMock8-1.png)

Sending a request to this mock endpoint with an undefined path returns an error. As you can see, there is no matching saved example with the path `''` and the request method `GET`. Responses returned by the mock service are entirely dependent on your saved examples and the included URL and request method type.

[![mock request not found error](https://assets.postman.com/postman-docs/WS-anuhyaMock11.png)](https://assets.postman.com/postman-docs/WS-anuhyaMock11.png)

You do, however, have a saved example with the path `/get` and the request method `GET`. So sending a `GET` request to the URL `https://b75a340e-4268-4b20-8f5f-3cfc8f37cec6.mock.pstmn.io/get` will return a proper response you are looking for.

[![mock response](https://assets.postman.com/postman-docs/WS-anuhyaMock12.png)](https://assets.postman.com/postman-docs/WS-anuhyaMock12.png)

### Adding more examples

To further illustrate how responses from the mock service are entirely dependent on your saved examples, let's try adding another example to this collection. We'll repeat steps 1 to 3 of saving the request to a collection and saving the response as an example, with a new URL `https://postman-echo.com/test`.

[![second example](https://assets.postman.com/postman-docs/WS-anuhyaMock13.png)](https://assets.postman.com/postman-docs/WS-anuhyaMock13.png)

Sending a `GET` request to `https://postman-echo.com/test` returns a 404 error which you will then save as another example. The collection `C1` now has two requests and two saved examples:

* `GET` > `/get`
* `GET` > `/test/`

Mocking the `/test` mock path also gives us the expected 404 response.

[![404 example](https://assets.postman.com/postman-docs/WS-anuhyaMock14.png)](https://assets.postman.com/postman-docs/WS-anuhyaMock14.png)

Your examples might vary depending on the URL endpoint, request method type, or status code. If you have multiple examples saved to the same mock, you can choose to save each example under a unique URL endpoint like you saw in this example with `/get` and `/test`. Alternatively, if you have saved examples with different response status codes, you can send an authenticated request to the mock endpoint along with the `x-mock-response-code` header specifying which integer response code your returned response should match.

### Using random data dynamic variables

You can use random data dynamic variables in your Mock Server's Example Response Body. These dynamic variables are resolved as part of the Mock Server response and are replaced with the dynamic data for the variable used. These are very useful to generate random data in your API mocks. You can then use for exploratory testing and writing rich, data-driven tests.

For example, your `Example Response`'s `Body` can contain a data like:

```json
{
    "name": "{{$randomFullName}}",
    "userName": "{{$randomUserName}}",
    "location": "{{$randomCity}}",
    "company": "{{$randomCompanyName}}",
    "jobTitle": "{{$randomJobTitle}}",
    "updatedAt": "{{$timestamp}}"
}
```

When you call that Mock Server endpoint, you will see the response change to something like this:

```json
{
    "name": "Cielo McClure",
    "userName": "Aurelie.Lockman",
    "location": "Kubhaven",
    "company": "Runolfsdottir, Bernhard and Hodkiewicz",
    "jobTitle": "Direct Branding Liaison",
    "updatedAt": "1565088856"
}
```

See the Postman Sandbox page for full list of available [random data dynamic variables](/docs/writing-scripts/script-references/variables-list/).

## Using query params

Postman's Mock server functionality is enhanced to return different responses based on matching request query params. Postman's Mock server looks at the query params while matching requests to the examples. Which means if you have examples that differ only in query params and want to mock different responses for different query params on the same request path, Postman's mock server will return the exact response matching that request path and the corresponding query params.

Let's look at an example how this works:

This example includes a collection by name **Query Param Demo** that has one request **Request1** with two examples in it - Example1 and Example2.

Example 1 has the following values and params:

[![query param1](https://assets.postman.com/postman-docs/query_param_1.png)](https://assets.postman.com/postman-docs/query_param_1.png)

As illustrated, you can see the query params (highlighted in red circle) passing '1'.

Example 2 has the following values and params:

[![query param2](https://assets.postman.com/postman-docs/query_param_2.png)](https://assets.postman.com/postman-docs/query_param_2.png)

As you can see Example1 and Example2 are passing 1 and 5 respectively. When you copy the mock url path and pass on these different query params to it, Postman returns the exact response matching that path and its query params. This is illustrated in the below screen:

[![query param3](https://assets.postman.com/postman-docs/query_param.gif)](https://assets.postman.com/postman-docs/query_param.gif)

**Note:** If there is no exact match found, Postman will return the best matching response based on its algorithm.

Learn more about the [matching algorithm](/docs/designing-and-developing-your-api/mocking-data/matching-algorithm/) for mocks.

## Mocking GraphQL queries

Postman enables you to mock your GraphQL queries easily. To mock your GraphQL queries, you make a request to the mock server using the request path and request body saved in the examples when creating a mock server on the collection.

Ensure you set the *Content-type* header to *application/json* in the example you create. You then need to ensure to pass the *x-mock-match-request-body* header with a value set to *true* in the request header while hitting the mock URL. The following screen illustrates this process:

[![mock graphql](https://assets.postman.com/postman-docs/Mock-Graphql2.gif)](https://assets.postman.com/postman-docs/Mock-Graphql2.gif)

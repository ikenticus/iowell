# iowell

### Assignment
Write a long-lived service in JavaScript/NodeJS, that:
1. Listens on port 9000 for incoming HTTP connections (use any library you'd like) in non-blocking fashion. It must accept and handle concurrent connections with acceptable connections/second.
1. The service must implement a handler that expects a string-bodied submission to the 'POST /input' route. It will remember every single string submitted this way. See below.
1. The service must implement a handler at the 'GET /query' route with query parameter 'key'. It will check to see if it has ever seen this exact key from previous input submissions. If it hasn’t seen the key before, it will return 0 (i.e. “0”). If it has seen the key before, it will return the number of times it has seen the key (e.g. “3”) in the response body.

### Guidelines
* Don’t feel you have to over-engineer the assignment. Do what feels right and sufficient for you to showcase your practical skills in both Javascript/Node.js and programming. This assignment was designed to be brief and to the point.
* Don’t feel you have to write tests for testing’s sake. Write them if you feel they’re needed to ensure correct operation.
* If you have any questions or need clarification on anything, just reach out to us.
* It’s best to create a stand-alone repo on Github/Gitlab/Bitbucket and share it privately with us, or alternatively send code as a packaged folder. We must be able to build it relatively easily on our end.

### Install
* Clone from this repository:
```
git clone https://github.com/ikenticus/iowell
cd iowell
```
* Install dependencies: `npm install`
* Start webserver: `npm start`

### Verify

With the server running you can access the Swagger interface: http://localhost:9000/help

In general, Postman can be used to GET or POST amongst other methods. However this repository also includes options to verify the endpoints via the following methods
* input:
    * CLI: `curl -X POST "http://localhost:9000/input" -H "Content-Type: text/plain" -d "key"`
    * Swagger: http://localhost:9000/help/index.html#/default/post_input
* query:
    * Browser: `http://localhost:9000/query?key=key`
    * CLI: `curl "http://localhost:9000/query?key=key"`
    * Swagger: http://localhost:9000/help/index.html#/default/get_query

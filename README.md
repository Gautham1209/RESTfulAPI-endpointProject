Simple an API endpoint which has GET, POST and DELETE method. Using NodeJs and PostManto test our API.

This are the steps to run.

Step 1: Ensure Your API Server Is Running
node app.js

Step 2: Open Postman

Step 3: Test the GET Method

-> Create a new request by clicking the "New" or "+" button in the top menu.
-> Set the request type to "GET."
-> Enter the URL for your GET endpoint in the address bar: http://localhost:3000/api/data.
-> Click the "Send" button to make the GET request.

Result -> You should see a response in the body of Postman containing the data stored on your server, which will be initially empty.

Step 4: Test the POST Method

-> Create a new request by clicking the "New" or "+" button in the top menu.
-> Set the request type to "POST."
-> Enter the URL for your POST endpoint in the address bar: http://localhost:3000/api/data.
-> In the request body section, select "raw" and choose "JSON" as the data type.
-> Enter the data you want to add in JSON format. For example:

{
  "State": "Karnataka",
  "Districts": 31
}

-> Click the "Send" button to make the POST request.

Result -> You should receive a response that includes the data you just added.

NOW AGAIN GO TO "GET" AND SEE DATA WILL BE ADDED.

Step 5: Test the DELETE Method

-> Create a new request by clicking the "New" or "+" button in the top menu.
-> Set the request type to "DELETE."
-> Enter the URL for your DELETE endpoint in the address bar, specifying the ID you want to delete. For example, to delete the data at index 0:
http://localhost:3000/api/data/0
-> Click the "Send" button to make the DELETE request.

Result -> You should receive a response confirming that the data with the specified ID has been deleted.

NOW AGAIN GO TO "GET" AND SEE DATA WILL BE DELETED.

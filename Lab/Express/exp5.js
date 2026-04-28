/*
node js is a run-time environment that let's you run the js code outside the 
browser. 
- Built on chrome's v8 js engine
- Used to create fast, scalable web apps

Express js - 
- express is a minimal and flexible web framework for node js
- it helps to handle routes, middleware and "http requests" easily
- makes backend development fast and simple
- why we use express js-->
    - simplifies server creation in node js
    - it offers powerful features like - routing, middleware, static file serving, error handling

----NPM----
node package manager
- tool to install packages or libraries from node js ecosystem
npm init - ask question about packages
npm init -y - no questions, creates project directly

we do not write port number in main file in companies, we write it on .env 

---ACTIVITY---
what is package.json?
diff between package.json & package-lock.json
dev dependency and dependancy
http requests - get,put,post,delete,patch with rel-time ex.
steps to create express project
*/

const express = require('express')
const app = express()
const port = 3002

app.get('/time', (req, res) => {

    let t1 = new Date();

res.json({
    message: "hello world",
    time: t1
})
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})

/*

----ACTIVITY ANSWERS----
1. What is package.json?

It is the main configuration file of a Node.js project.

It contains-
Project name and version
Description
Scripts (start, test, etc.)
Dependencies and devDependencies
It helps to manage project packages.

It is created using-
npm init.Without this file, npm cannot manage packages properly.

2. Difference between package.json and package-lock.json

--- package.json
Created by developer.
Contains project details.
Lists required packages.
Shows version range (example: ^4.2.0).
Can be edited manually.

--- package-lock.json
Automatically created by npm.
Locks exact installed versions.
Ensures same installation for all users.
Should not be edited manually.

Simple difference-
package.json = What we want to install.
package-lock.json = What exactly got installed.

3. Dependency vs Dev Dependency

--- Dependency
Required to run the application.
Installed using - npm install package-name

--- Dev Dependency
Required only during development.
Not needed in production.
Installed using- npm install package-name --save-dev


4. HTTP Requests 

---GET
Used to fetch data from server.
Does not change data.
Example: Viewing products on Amazon.

---POST
Used to send new data to server.
Creates new resource.
Example: Creating a new account.

---PUT
Used to update full data.
Replaces entire resource.
Example: Updating complete user profile.

---PATCH
Used to update partial data.
Modifies only selected fields.
Example: Changing only email.

---DELETE
Used to remove data.
Example: Deleting product from cart.


5. Steps to Create an Express Project

Install Node.js.

Create a new folder

Initialize npm- npm init -y

Install Express- npm install express

Create index.js file.

Write basic Express server code.
Run project- node index.js

Open browser and go to- http://localhost:3000

*/
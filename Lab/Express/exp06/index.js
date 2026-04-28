/* 
middleware is a fun that runs befor sending a response. it can check data,log info,
authenticate user

1. What is Middleware?
-Middleware is a function that runs in between request and response.
-When a user sends a request → it goes through middleware → then reaches your main code → then response is sent.
-Think of it like a security guard or checkpoint

2. Why is Middleware used?
-Because we don’t want to write the same code again and again.

Middleware helps to:
- Log requests (who accessed, when)
- Check authentication (is user logged in?)
- Validate data (is input correct?)
- Handle errors
- Modify request/response

3. Use in company level- 
Security checks (authentication and authorization)
Logging and monitoring user activity
Blocking spam or excessive requests
Validating user input
Handling errors centrally
Adding/modifying request data
Improving performance (caching)
Reusing common logic across the app

syntax-
app.use((req,res,next)=>{
    console.log("data received", new Date())
    next()
    })

next - pass control to the next fun., without next() request will hang
*/
const express = require('express');
const app = express();
const port = 3000;

app.use((req,res,next)=>{
    console.log("data received", new Date())
    next()
})

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
    
})

app.get('/',(req,res)=>{
    res.send("Hello there");
})

app.get('/about',(req,res)=>{
    res.send("Welcome to About page");
})

app.get('/contact',(req,res)=>{
    res.send("Contact page");
})
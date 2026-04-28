// async and await in JavaScript (Simple Explanation)

const { log } = require("console");

// async and await are used to handle asynchronous operations (like API calls, timers, file loading) in a clean and readable way instead of using .then().

// In simple words:
// async/await = easier way to work with Promises

// async Keyword

// When you write async before a function:

// The function always returns a Promise

// You can use await inside it



async function hello() {
    return "Hello World";
}

hello().then(result => console.log(result));

// await Keyword

// await pauses the execution of the function until the Promise is resolved.

// await can only be used inside async function

async function loadData() {
    try {
        let res = await fetch("wrong_url");
        let data = await res.json();
        console.log(data);
    } catch (error) {
        console.log("Error:", error);
    }
}

console.log("start")
setTimeout(() => {
    console.log("Inside set time out");
    
},2000)
console.log("end");

// we can declare 2 types of obects- 1. object literals, 2. object singleton

//1. obj literals
let user = {
            name:"saniya", 
            age:21, 
            email:"saniya@12", 
            city:"Pune", 
            isLogin:true, 
            lastLoginDay:['M','T','Th'],
            "full name ": "saniya"
        };

    console.log(user);
    console.log(user.email);
    console.log(user.lastLoginDay);
    console.log(user["full name "]); //imp que. If the key is in - " "
    
    user.email = "sp@123"
    console.log(user.email);
    
    //Object.freeze(user) // used when the data cannot be changed
    user.greeting = function()
    {
        console.log("hello.js");

    }
    console.log(user.greeting());
    
user.greeting2 = function()
{
    console.log(`Hello ${this.email}`);
    
}
console.log(user.greeting2());


    user.email = "asama@30"
    console.log(user.email);
    
    // Symbol example- IMP - create one symbol and add it to obj and print symbol
    let mySymbol = Symbol("abc")
    let myObj = {
        [mySymbol]:"sum"
    }
    console.log(myObj[mySymbol]);
    console.log(mySymbol);
    
    //
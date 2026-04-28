
//Symbol
let a = Symbol("123");
console.log(a);

let id = 123;
console.log(id==a); //false - the datatype is changed to number


/* Non-primitive 

*/

//array
const alex = [1,2,3,4,5]
console.log(alex);

//object 
const myObj = {
    name : "Saniya",
    age : 20
};
console.log(myObj.age); //used myObj.age to print just age from that object

//function
/*
- A function is a block of code designed to perform a specific task.
- Functions help in code reusability.
- A function executes only when it is called.
- Functions make programs organized and easy to understand.
*/
/* ---ACTIVITY-function defination,declaration,call--- */
function displayName() {           // Function Declaration
    console.log("Poorva");         // Function Definition
}
displayName();                     // Function Calling

function addNumbers(x, y) {
    return x + y;                  // returning result
}

let result = addNumbers(10, 20);   // passing arguments
console.log("Addition is:", result);


function fruit(){
    console.log("Apple");
}
console.log(fruit());

//function declaration with variable
let num = function MyFun(){
    console.log("Hello");
    
}
console.log(num);

//---MEMORY---
/*
stack - primitive use whatever you can declare variable , it gives copy.
and heap- non primitive gives referance original value.

primitive datatype stored in stack when we assign one variable to another,a copy is made 
so, changing one does not affect the other.

non-primitive datatypes stored in heap memory. when we assign one object to another variable,referance is
copied not the values. so if we change one, both varibles are changed.
*/
let myYtname = "slayypoint"
let newYtname = myYtname

newYtname = "Urmila"

console.log(myYtname);
console.log(newYtname); 

//heap example-
let UserOne = {email:"sap@123", fname:"saniya", id:"23uam114"}
let UserTwo = UserOne
UserTwo.email = "aap@345"
console.log(UserOne.email);
console.log(UserTwo.email); 

/*Difference between var,let,const-
var has a function scope means it can be accessed 
outside the block where it was created.

let has a block scope that means it has a scope only in
that particular block, not outside of it.

const means constat, which value cannot be changed. 

*/

const a = 10;
a = 20;
console.log(a);


let x = 10;
var y = 20;
{
    let x = 200;
    var y = 300;
    console.log(x,y); 
}

console.log(x,y);

//variable declaration
let studentId = 10; //num
let name = "saniya"; //string
let email; //undefined
let bool = true; //boolean
let city = ""; //null

console.log("Student Id is = ",(typeof(studentId)));
console.log("Name is = ", (typeof(name)));
console.log("Email = ",(typeof(email)));
console.log("City = ",(typeof(city))); 
console.log(bool); 

/* Difference between null and undefined-
null means we intentionally keep value empty.
undefined means we declare a varible but we don't assign a 
value to it.
*/
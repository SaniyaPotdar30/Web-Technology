// IMP - filter,map,reduce

// difference between arrow function and simple function
/* --> 1. simple function -
        - uses the 'function' keyword
        - has its own 'this' keyword
        - used before it is defined
     
       2. Arrow function -
        - uses => symbol
        - does not have its own 'this'
        - cannot be used before it is defined
*/
//use of this keyword in simple and arrow function
// --> 1. this in simple-
let person ={
    name:"Saniya",
    greet: function(){
        console.log(this.name);
        
    }
};
person.greet();


// write a code with arrow functions with 2 examples
// write a code for switch case
// how to use truthy and falsy value in js
// how to use ternary operators
// write a code for how to use loops in array while,do while,for,for in for of,for each
// diff between for of and for in
// how to use map and filter function in js
// how to use reduce method in js
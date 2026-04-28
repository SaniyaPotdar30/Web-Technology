/*function addTwoNum(num1, num2){
    let result = num1 + num2;
    console.log(result);
    
}
addTwoNum(3,4);

function myFun(a,b){
    let c = a+b;
    return c;
    console.log(c); // cannot executed
    
}
myFun(1,1);
*/
function subTwoNum(n1,n2){
    let res = n1-n2;
    return res;
    console.log(res);
    
}
console.log(subTwoNum(1,2));

function myInfo(name){
    return console.log(`${name} logged in!!`);
}
console.log(myInfo("Saniya")); // Saniya logged in!!
//console.log(myInfo()); // undefined logged in!!
// when string is empty, it gives undefined 


// If you have only 1 parameter and you have to print 3 nums
// spread operator
function newFun(...n){
    return n;
}
console.log(newFun(1,2,3)); // gives output like this - [1,2,3]
/*
let arrowFun(a)=>{
    return a;
}
console.log(arrowFun(1));
*/

// this keyword story- we cannot use this keyword
function coffee(){
    user = "Saniya";
    console.log(this);
    
}
coffee();

const arroFun = () =>{
    userName = "Saniya Potdar";
    console.log(this);
    
}
arroFun();
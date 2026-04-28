/*let score = "22";
let score_for_bool = true;
let score_for_null = "";
let score_for_undefined;

console.log(score);
console.log(score_for_bool);
console.log(score_for_null);
console.log(score_for_undefined);*/

//if there is only num in string like "22", it converts in num but if it is like- "abc" then that 
//output becomes like - NaN string cannot convert 
let j = "a"; 
let j_convert = Number(j);
console.log(j);
console.log(j_convert);

let i = 20;
let i_convert = String(i);
console.log(typeof(i));
console.log(typeof(i_convert));

//activity - 1.boolean,undefined,symbol,null conversion

//OPERATIONS
console.log(2+2);
console.log(9-3);
console.log(2*3);
console.log(12%2);
console.log(12/3);

let str1 = "Hello";
let str2 = " Saniya";
console.log(str1+str2);

//conversions- javascript automatically only converts string->num in arithmatic operations
console.log("1"+2);
console.log("1"+2+2);
console.log(1+"2");
console.log(1+3+"2");
console.log((3+4)*5%3);
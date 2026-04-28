// String to Number
let strNum = "123";
let num1 = Number(strNum);       // Converts string to number

let num2 = parseInt("45");       // Converts string to integer
let num3 = parseFloat("3.14");   // Converts string to decimal number

// Number to String
let number = 100;
let str1 = String(number);       // Converts number to string
let str2 = number.toString();    // Converts number to string

// Boolean conversions
let bool1 = Boolean(1);          // 1 becomes true
let bool2 = Boolean(0);          // 0 becomes false
let bool3 = Boolean("hello");    // Non-empty string becomes true
let bool4 = Boolean("");         // Empty string becomes false

let numFromBool = Number(true);  // true becomes 1
let numFromBool2 = Number(false);// false becomes 0


let strFromBool = String(true);  // true becomes "true"
let strFromBool2 = String(false);// false becomes "false"

let autoConvert = "5" * 2;       // JS auto converts string to number

/*   */

//string interpolation--IMP. 
const str1 = "JS";

console.log(`Hello my course name ${str1}`); //This is the good way of printing!!

const gameCount = new String("Alex") 
console.log(gameCount.length);
console.log(gameCount[3]);
console.log(gameCount.toUpperCase());
console.log(gameCount.toLowerCase());
console.log(gameCount.charAt(2));
console.log(gameCount.indexOf("A"));

const newName = "  Saniya  ";
console.log(newName.trim());

//activity- use all string operations- include,split
let message = "Hello JavaScript World";

// includes()--> checks whether a string contains given word
console.log(message.includes("JavaScript")); // true
console.log(message.includes("Python"));  // false

// startsWith() --> checks if string starts with given text
console.log(message.startsWith("Hello")); // true

// endsWith() --> checks if string ends with given text
console.log(message.endsWith("World")); // true

// split() – splits string into array based on space
console.log(message.split(" ")); // output: ["Hello", "JavaScript", "World"]

// replace() – replaces a word in string
console.log(message.replace("World", "Students"));  // output: Hello JavaScript Students

// substring() – extracts part of string using index
console.log(message.substring(0, 5));         
// output: Hello

// slice() – extracts part of string using index
console.log(message.slice(6, 16));            
// output: JavaScript

/*
- Strings in JavaScript are immutable (cannot be changed directly)
- All string methods return new string instead of modifying original
*/
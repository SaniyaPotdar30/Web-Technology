// Equal to (==) → compares value only
console.log(5 == "5");     
// true → values are same, type is ignored

// Not equal to (!=)
console.log(5 != "5");     
// false → values are same after type conversion

// Strict equal to (===) → compares value + type
console.log(5 === "5");    
// false → value same but type is different

// Strict not equal to (!==)
console.log(5 !== "5");    
// true → type is different (number vs string)


console.log(10 > 5);       

console.log(3 < 7);        

console.log(5 >= 5);       

console.log(4 <= 3);       



console.log(true == 1);    // true → true is treated as 1

console.log(false == 0);   // true → false is treated as 0

console.log("apple" > "ant");  // true → comparison is based on alphabetical order

console.log(null == undefined); // true → both are considered equal in loose comparison

console.log(null === undefined); // false → different types


// == - checks condition
// === - checks condition and also the datatype
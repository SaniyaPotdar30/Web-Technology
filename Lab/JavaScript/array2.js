let superheros = ["ironman", "thor", "batman", "spiderman"];
let marvel = ["dr strange", "captain america", "hulk"];

superheros.push(marvel);
console.log(superheros[1]);

console.log(superheros.concat(marvel));

// Nested array
let anime = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
let anime2 = anime.flat(Infinity)
let anime3 = anime.flat(1) //to convert the array in one format

console.log(anime3);

// Data Scripting
console.log(Array.isArray("saniya")); // It asks if the given string is in the array or not
console.log(Array.from("saniya")); // converts the string -> array
console.log(Array.from({"hey":1})); //gives empty array directly, does not convert in key:value

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3)); 
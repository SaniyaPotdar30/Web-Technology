const balance = new Number(100000)

console.log(balance);
console.log(balance.toFixed(2)); //when u build e-commerce website,and precisions value is too long
//then we use toFixed
console.log(balance.toString().length);
console.log(balance.valueOf(balance));
console.log(balance.toLocaleString()); //it is by default US std.
console.log(balance.toLocaleString('en-IN')); //when we want in Indian std.

//---Math operations--
console.log(Math);
console.log(Math.abs(-12)); //gives +ve value also for -ve value.
console.log(Math.floor(4.6));
console.log(Math.ceil(4.6)); //chooses top value
console.log(Math.round(4.6));
console.log(Math.min(1,2,3));

//activity- 1. use of math.random ?

//generate random number between 0 to 1
console.log(Math.random());//gives random value between 0 to 1
console.log(Math.random()*10);//gives random value between 0 to 10
console.log(Math.floor(Math.random()*10));//gives random integer value between 0 to 9
let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(typeof(myDate));
console.log(myDate.getFullYear());

let myCreatedDate = new Date(2026,1,21)
console.log(myCreatedDate.toLocaleDateString());
let myCreatedDate2 =  new Date("01-21-2026")
console.log(myCreatedDate2.toLocaleString());
let myTime = Date.now()
console.log(myTime);
console.log(Date.now()/1000); //secs
console.log(myCreatedDate2.getTime());
console.log(Math.floor(Date.now/1000));

let newDate = new Date()
console.log(newDate.getDate()); //21
console.log(newDate.getDay()); //3
console.log(newDate.getFullYear()); //2026
console.log(newDate.getMonth()); //0
console.log(newDate.getUTCDate()); //21

console.log(newDate.toLocaleString('default',{weekday:"long"}));
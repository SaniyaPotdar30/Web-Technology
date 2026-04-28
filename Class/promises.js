

/*
PROMISES -gives result later
a promises is an object that represents 'future result' of an asynchronous operation

-has 3 states - pending/wait, resolve/succes, reject/failed
-2 parameters - resolve, rejected

syntax- 
let myPromise = new promise(() => {
    
    });

let success = true
if(success){
    resolve("data fetched ")
}
else{
    console.log("Error");
    
}


*/


myPromise.then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
    

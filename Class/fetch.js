/*
FETCH -
- fetch is an inbuilt js method used to make http request

syntax -
fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return response()
})
.catch((err) => {
    console.log(err);
  })

*/


/*fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return response()
})
.catch((err) => {
    console.log(err);
  })*/

  fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err));

// ACTIVITY - where to use promises in company?
// why promises better than callback
// code for 4 ex. of promises - settimeout, async await
// what is fetch
// 4 ex. of fetch method - also with async await
// fetch and show only 1st 5 records
// create fake promises manually and 3sec resolve, 3sec reject

// INTERVIEW -
// promises? states? diff. bet. promises and callback
// what does fetch returns?
// why do we use response.json?
// diff. bet. then/catch and async await
// what is promise chain?
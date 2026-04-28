// Function to demonstrate array methods
function arrayMethodsDemo() {

    let arr = [10, 20, 30, 40];

    // push() → adds element at the end
    arr.push(50);                 
    // arr becomes [10, 20, 30, 40, 50]

    // pop() → removes last element
    arr.pop();                    
    // arr becomes [10, 20, 30, 40]

    // unshift() → adds element at the start
    arr.unshift(5);               
    // arr becomes [5, 10, 20, 30, 40]

    // shift() → removes first element
    arr.shift();                  
    // arr becomes [10, 20, 30, 40]

    // length → gives total number of elements
    console.log(arr.length);      
    // Output: 4

    // indexOf() → finds index of an element
    console.log(arr.indexOf(30)); 
    // Output: 2

    // includes() → checks if element exists
    console.log(arr.includes(20));
    // Output: true

    // join() → converts array to string
    let str = arr.join("-");
    // Result: "10-20-30-40"

    // slice() → returns part of array (no change to original)
    let slicedArr = arr.slice(1, 3);
    // Result: [20, 30]

    // splice() → removes/adds elements (changes original array)
    arr.splice(1, 1);             
    // Removes element at index 1 → [10, 30, 40]

    // map() → creates new array after operation
    let newArr = arr.map(num => num * 2);
    // Result: [20, 60, 80]

    // filter() → filters elements based on condition
    let filteredArr = newArr.filter(num => num > 30);
    // Result: [60, 80]

    // reduce() → reduces array to single value
    let sum = arr.reduce((total, num) => total + num, 0);
    // Result: sum of elements

    // forEach() → runs function for each element
    arr.forEach(num => {
        console.log(num);
    });
}

// Calling the function
arrayMethodsDemo();
// Executes all array method examples

let num = 12.7;

// Converts value to number
let n1 = Number("45");           
// Used when input is in string form and we need a number

// Converts number to string
let s1 = num.toString();         
// Used when displaying number as text

// Rounds to nearest integer
let r1 = Math.round(num);        
// Used when normal rounding is needed

// Rounds down
let r2 = Math.floor(num);        
// Used when lower value is required

// Rounds up
let r3 = Math.ceil(num);         
// Used when minimum higher value is required

// Keeps fixed decimal places
let r4 = num.toFixed(1);         
// Used for prices and decimal formatting

// Checks if value is an integer
let r5 = Number.isInteger(num);  
// Used to validate whole numbers

// Converts string to integer
let r6 = parseInt("100px");      
// Used to extract number from mixed string

// Converts string to decimal number
let r7 = parseFloat("3.14kg");   
// Used to extract decimal value
 


// Absolute value
let a = Math.abs(-10);           
// Used to remove negative sign

// Power calculation
let b = Math.pow(2, 3);          
// Used for exponential calculations

// Square root
let c = Math.sqrt(16);           
// Used in mathematical formulas

// Maximum value
let d = Math.max(3, 8, 1);       
// Used to find highest value

// Minimum value
let e = Math.min(3, 8, 1);       
// Used to find lowest value


let rand = Math.random();   // Generates random number between 0 and 1
// Used to generate unpredictable values

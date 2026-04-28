//activity 1 -  display student info,  
let studentId = 114; 
let name = "saniya"; 
let age = 20;

document.write("---Student Details---");

document.write("Student Id is = ",studentId,"<br>");
document.write("Student Name is = ",name);
document.write("Student age is = ",age);

//activity 2 - check even or odd,
let num = 789;
document.write("---Odd even check---");
if (num % 2 == 0)
{
    
    document.write("Number is even..");
}
else{
    document.write("Number is odd..");
}

//activity 3 -  nums using loop,
document.write("---Loops---");

let i;
for(i=1; i<=10; i++)
{
    document.write(i);
    
}

//activity 4 - student result
let marks = 80;

if(marks>=80)
{
    document.write("Passed..");
    
}
else{
    document.write("Failed..");
    
}

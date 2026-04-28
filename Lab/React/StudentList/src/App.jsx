import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import StudentData from './StudentData'


function App() {

  const students = [
    {  name: "Poorva", age: 20, course: "CS" },
    {  name: "Saniya", age: 21, course: "AIML" },
    {  name: "Riya", age: 19, course: "AIDS" }
  ];

  function showMessage(){
    alert("Button is clicked");
  }

  return (
    <>
      <h1>Student Info</h1>

      <button onClick={showMessage}>Click Me</button>

      {students.map((student) => (
        <StudentData
          key={student.id}
          name={student.name}
          age={student.age}
          course={student.course}
        />
      ))}

      
    </>
  )
}

export default App
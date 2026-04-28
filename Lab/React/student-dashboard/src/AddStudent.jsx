// src/components/AddStudent.jsx

import { useState } from "react";

function AddStudent({ students, setStudents }) {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  const addStudent = () => {
    // Validation
    if (name === "" || course === "") {
      alert("Please fill all fields");
      return;
    }

    // Create new student object
    const newStudent = {
      id: students.length + 1,
      name: name,
      course: course,
    };

    // Add student to list
    setStudents([...students, newStudent]);

    // Alert message
    alert("Student Added Successfully!");

    // Clear input fields
    setName("");
    setCourse("");
  };

  return (
    <div>
      <h2>Add Student</h2>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br /><br />

      <input
        type="text"
        placeholder="Enter Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />
      <br /><br />

      <button onClick={addStudent}>Add Student</button>
    </div>
  );
}

export default AddStudent;
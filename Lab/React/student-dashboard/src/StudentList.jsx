// src/components/StudentList.jsx

function StudentList({ students }) {
  return (
    <div>
      <h2>Student List</h2>

      {/* If list is empty */}
      {students.length === 0 ? (
        <p>No Students Added</p>
      ) : (
        <ul>
          {/* Display students using map() */}
          {students.map((student) => (
            <li key={student.id}>
              Name: {student.name} | Course: {student.course}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default StudentList;
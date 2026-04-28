function StudentData(props){
    return(
        <div className="student-card">
            <h2>Student Name: {props.name}</h2>
            <h2>Age: {props.age}</h2>
            <h2>Course: {props.course}</h2>
        </div>
    );
}

export default StudentData;
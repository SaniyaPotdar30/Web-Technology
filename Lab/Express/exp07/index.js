const express = require('express')
const app = express()
const port = 30004

const students = [
    {id: 1, name: "Poorva", age: 21, course: "AIML"},
    {id: 2, name: "Saniya", age: 21, course:"ENTC"},
    {id: 3, name: "Shruti", age: 22, course:"AIDS"}

]
app.get('/students', (req, res) =>{
    res.json(students)
})

app.get('/students/:id', (req, res) =>{
    const studentId = req.params.id
    console.log(studentId);

    const student = students.find(s => s.id == studentId)

    if(student){
        res.json(student)
    }
    else{
        res.status(404).json({message: "Student not found"})
    }
})
    

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})
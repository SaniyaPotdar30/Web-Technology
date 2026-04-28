import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  students = [
    {name: 'saniya', age: 20, course: 'AI'},
    {name: 'poorva', age: 22, course: 'MECH'},
    {name: 'shruti', age: 20, course: 'AI'},
  ];

  getStudents(){
    return this.students;
  }
}

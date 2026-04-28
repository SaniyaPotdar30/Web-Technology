import { Component } from '@angular/core';
import { StudentService } from '../services/student-service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-student-list',
  imports: [CommonModule],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css',
})
export class StudentList {
  students:any[] = []; // it can store any type of data

  /**
   *
   */
  constructor(private studentService:StudentService) {}

  ngOnInit(){
    this.students = this.studentService.getStudents();
    console.log(this.students);
  }

}

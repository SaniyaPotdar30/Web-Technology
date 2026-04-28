import { Component } from '@angular/core';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.css']
})
export class StudentCardComponent {

  name: string = "Saniya";
  course: string = "B.Tech CSE";
  imageUrl: string = "https://via.placeholder.com/150";

}
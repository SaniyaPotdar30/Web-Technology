import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 


@Component({
  selector: 'app-admin',
  imports: [FormsModule],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {
  fname : string = "Saniya"
  age : number = 20
  email : string = "saniya@123"

  updateAdmin() {
  this.fname = "saniya";
  this.age = 20;
  this.email = "saniya@123"
}
}



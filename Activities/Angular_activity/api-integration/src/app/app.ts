import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';   // ✅ ADD
import { FormsModule } from '@angular/forms';

import { StudentCardComponent } from './student-card/student-card.component';
import { LivePreviewComponent } from './live-preview/live-preview.component';
import { UserListComponent } from './user-list/user-list.component';

@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    HttpClientModule,   // ✅ REQUIRED
    StudentCardComponent,
    LivePreviewComponent,
    UserListComponent
  ],
  templateUrl: './app.html',
})
export class App {}
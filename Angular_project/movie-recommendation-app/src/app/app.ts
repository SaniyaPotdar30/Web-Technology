import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

// Root component: hosts the navbar and the router outlet
@Component({
  selector: 'app-root',
  standalone: true,
  // RouterOutlet renders the active route component
  // RouterLink enables [routerLink] directive for navigation
  // RouterLinkActive adds 'active' class to the current nav link
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'Movie Storage';
}

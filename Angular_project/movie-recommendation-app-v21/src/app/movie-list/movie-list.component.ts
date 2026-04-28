import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Movie } from '../models/movie.model';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule],  // CommonModule provides *ngFor and *ngIf directives
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  // Array to hold the list of movies fetched from the service
  movies: Movie[] = [];

  // Dependency Injection: Angular injects MovieService and Router automatically
  constructor(private movieService: MovieService, private router: Router) {}

  ngOnInit(): void {
    // Fetch all movies when the component initializes
    this.movies = this.movieService.getMovies();
  }

  // Navigate to the detail page for the selected movie
  viewDetails(id: number): void {
    this.router.navigate(['/movie', id]);
  }

  // Navigate to the add movie form
  goToAddMovie(): void {
    this.router.navigate(['/add']);
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';  // FormsModule provides ngModel (two-way binding)
import { CommonModule } from '@angular/common';
import { Movie } from '../models/movie.model';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-add-movie',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-movie.html',
  styleUrls: ['./add-movie.css']
})
export class AddMovieComponent {

  // newMovie object bound to the form using two-way data binding (ngModel)
  newMovie: Movie = {
    id: 0,
    title: '',
    genre: '',
    rating: 1,
    description: ''
  };

  // Success/error message to display after form submission
  successMessage: string = '';

  // Dependency Injection: MovieService and Router are injected
  constructor(private movieService: MovieService, private router: Router) {}

  // Called when the form is submitted
  onSubmit(): void {
    if (this.newMovie.title && this.newMovie.genre && this.newMovie.description) {
      // Validate rating is between 1 and 10
      if (this.newMovie.rating < 1 || this.newMovie.rating > 10) {
        this.successMessage = 'Rating must be between 1 and 10.';
        return;
      }
      // Add movie via the service
      this.movieService.addMovie({ ...this.newMovie });
      this.successMessage = 'Movie added successfully!';
      // Navigate back to the movie list after 1.5 seconds
      setTimeout(() => {
        this.router.navigate(['/movies']);
      }, 1500);
    } else {
      this.successMessage = 'Please fill in all fields.';
    }
  }

  // Navigate back to movie list without saving
  goBack(): void {
    this.router.navigate(['/movies']);
  }
}

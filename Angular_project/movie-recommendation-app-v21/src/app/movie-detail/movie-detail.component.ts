import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Movie } from '../models/movie.model';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  // Holds the movie to be displayed; can be undefined if not found
  movie: Movie | undefined;

  // Dependency Injection: ActivatedRoute gives access to URL parameters
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Read the ':id' parameter from the URL (e.g., /movie/2)
    const id = Number(this.route.snapshot.paramMap.get('id'));
    // Fetch the matching movie from the service
    this.movie = this.movieService.getMovieById(id);
  }

  // Navigate back to the movie list
  goBack(): void {
    this.router.navigate(['/movies']);
  }
}

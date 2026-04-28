import { Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list';
import { AddMovieComponent } from './add-movie/add-movie';
import { MovieDetailComponent } from './movie-detail/movie-detail';

// Route configuration 
export const routes: Routes = [
  // root URL to /movies
  { path: '', redirectTo: '/movies', pathMatch: 'full' },

  // /movies -> MovieListComponent
  { path: 'movies', component: MovieListComponent },

  // /add -> AddMovieComponent
  { path: 'add', component: AddMovieComponent },

  // /movie/:id -> MovieDetailComponent  (uses :id route parameter)
  { path: 'movie/:id', component: MovieDetailComponent }
];

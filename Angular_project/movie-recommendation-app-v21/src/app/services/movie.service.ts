import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';

// @Injectable makes this service available for Dependency Injection
@Injectable({
  providedIn: 'root'  // Registers the service at the application root level
})
export class MovieService {

  private storageKey = 'movies';

  private defaultMovies: Movie[] = [
    {
      id: 1,
      title: 'La la land',
      genre: 'Romance/Musical',
      rating: 9,
      description: 'a romantic musical drama following Mia, an aspiring actress, and Sebastian, a dedicated jazz pianist, who fall in love while pursuing their dreams in Los Angeles'
    },
    {
      id: 2,
      title: 'Thor: love and thunder',
      genre: 'Action',
      rating: 10,
      description: 'follows Thor on a journey for inner peace, which is interrupted by Gorr the God Butcher, a villain trying to destroy all gods'
    },
    {
      id: 3,
      title: 'Interstellar',
      genre: 'Sci-Fi',
      rating: 9,
      description: 'A team of explorers travel through a wormhole in space in an attempt to save humanity.'
    }
  ];

  constructor() {
    this.initMovies();
  }

  // Initialize LocalStorage with default movies if empty
  private initMovies(): void {
    const storedMovies = localStorage.getItem(this.storageKey);
    if (!storedMovies) {
      this.saveMovies(this.defaultMovies);
    }
  }

  // Returns all movies from LocalStorage
  getMovies(): Movie[] {
    const storedMovies = localStorage.getItem(this.storageKey);
    return storedMovies ? JSON.parse(storedMovies) : [];
  }

  // Returns a single movie by its ID from LocalStorage
  getMovieById(id: number): Movie | undefined {
    const movies = this.getMovies();
    return movies.find(movie => movie.id === id);
  }

  // Adds a new movie to LocalStorage
  addMovie(movie: Movie): void {
    const movies = this.getMovies();
    
    // Generate a unique ID
    const maxId = movies.length > 0 ? Math.max(...movies.map(m => m.id)) : 0;
    movie.id = maxId + 1;
    
    movies.push(movie);
    this.saveMovies(movies);
  }

  // Helper method to save the array to LocalStorage
  saveMovies(movies: Movie[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(movies));
  }
}

import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import MovieList from './pages/MovieList'
import AddMovie from './pages/AddMovie'

function App() {
  // Initialize state with data from localStorage if available
  const [movies, setMovies] = useState(() => {
    const savedMovies = localStorage.getItem('movies');
    if (savedMovies) {
      try {
        return JSON.parse(savedMovies);
      } catch (e) {
        return [];
      }
    }
    return [];
  });

  // Save to localStorage whenever movies change
  useEffect(() => {
    localStorage.setItem('movies', JSON.stringify(movies));
  }, [movies]);

  // Function to add a new movie
  const handleAddMovie = (movie) => {
    const newMovie = {
      ...movie,
      id: Date.now().toString(),
      watched: false
    };
    setMovies([...movies, newMovie]);
  };

  // Function to toggle watched status
  const handleToggleWatched = (id) => {
    setMovies(movies.map(movie => 
      movie.id === id ? { ...movie, watched: !movie.watched } : movie
    ));
  };

  // Function to delete a movie
  const handleDeleteMovie = (id) => {
    setMovies(movies.filter(movie => movie.id !== id));
  };

  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home movies={movies} />} />
          <Route 
            path="/movies" 
            element={
              <MovieList 
                movies={movies} 
                onToggleWatched={handleToggleWatched}
                onDelete={handleDeleteMovie}
              />
            } 
          />
          <Route 
            path="/add" 
            element={<AddMovie onAddMovie={handleAddMovie} />} 
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App

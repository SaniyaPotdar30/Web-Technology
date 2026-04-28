function MovieList({ movies, onToggleWatched, onDelete }) {
  if (movies.length === 0) {
    return (
      <div>
        <h1>Your Movies</h1>
        <p>No movies added yet!</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Your Movies</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <div className="movie-details">
              <strong>{movie.name}</strong> - Rating: {movie.rating}/10 - Status: {movie.watched ? 'Watched' : 'To Watch'}
            </div>
            <div>
              <button 
                className="btn-blue" 
                onClick={() => onToggleWatched(movie.id)}
              >
                {movie.watched ? 'Mark Unwatched' : 'Mark Watched'}
              </button>
              <button 
                className="btn-red" 
                onClick={() => onDelete(movie.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MovieList

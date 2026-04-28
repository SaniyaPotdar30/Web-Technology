function Home({ movies }) {
  const watchedCount = movies.filter(m => m.watched).length;
  const totalCount = movies.length;

  return (
    <div>
      <h1>Welcome to Movie Watchlist</h1>
      <p>Keep track of all the movies you want to watch or have already watched.</p>
      
      <div>
        <h2>Your Watchlist Stats</h2>
        <p>Total Movies: {totalCount}</p>
        <p>Movies Watched: {watchedCount}</p>
        <p>Remaining to Watch: {totalCount - watchedCount}</p>
      </div>
    </div>
  )
}

export default Home

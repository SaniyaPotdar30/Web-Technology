import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> |{' '}
      <Link to="/movies">Movie List</Link> |{' '}
      <Link to="/add">Add Movie</Link>
    </nav>
  )
}

export default Navbar

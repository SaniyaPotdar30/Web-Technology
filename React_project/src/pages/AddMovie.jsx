import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AddMovie({ onAddMovie }) {
  const [name, setName] = useState('');
  const [rating, setRating] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !rating) {
      alert('Please fill out all fields');
      return;
    }
    
    onAddMovie({ name, rating });
    
    setName('');
    setRating('');
    navigate('/movies');
  };

  return (
    <div>
      <h1>Add a New Movie</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Movie Name:</label>
          <input 
            type="text" 
            id="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="rating">Rating (out of 10):</label>
          <input 
            type="number" 
            id="rating" 
            min="0" 
            max="10" 
            step="0.1"
            value={rating} 
            onChange={(e) => setRating(e.target.value)} 
          />
        </div>
        
        <button type="submit" className="btn-blue">Add Movie</button>
      </form>
    </div>
  )
}

export default AddMovie

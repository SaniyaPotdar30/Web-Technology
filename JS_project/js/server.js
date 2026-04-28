const express = require('express');
const cors = require('cors');

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// sample data (you can later replace this)
const words = [
  { german: "Haus", meaning: "House" },
  { german: "Apfel", meaning: "Apple" },
  { german: "Wasser", meaning: "Water" },
  { german: "Buch", meaning: "Book" },
  { german: "Freund", meaning: "Friend" }
];

// GET API → send words
app.get('/api/words', (req, res) => {
  res.json(words);
});

// POST API → receive results
app.post('/api/result', (req, res) => {
  console.log("Received result:", req.body);
  res.json({ message: "Result saved successfully" });
});

// start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
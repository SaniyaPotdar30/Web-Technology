const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to User API', endpoints: ['POST /users', 'GET /users', 'GET /users/:id', 'PUT /users/:id', 'DELETE /users/:id'] });
});

// In-memory storage for users
let users = [];
let userIdCounter = 1;

users.push({ id: userIdCounter++, name: 'shruti', email: 'shruti@example.com' });
users.push({ id: userIdCounter++, name: 'saniya', email: 'saniya@example.com' });
users.push({ id: userIdCounter++, name: 'poorva', email: 'poorva@example.com' });
users.push({ id: userIdCounter++, name: 'divya', email: 'divya@example.com' });

// POST /users - Add a new user
app.post('/users', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }
  const newUser = { id: userIdCounter++, name, email };
  users.push(newUser);
  res.status(201).json(newUser);
});


app.get('/users', (req, res) => {
  res.json(users);
});


app.get('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  res.json(user);
});

app.put('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { name, email } = req.body;
  const userIndex = users.findIndex(u => u.id === id);
  if (userIndex === -1) {
    return res.status(404).json({ error: 'User not found' });
  }
  if (name) users[userIndex].name = name;
  if (email) users[userIndex].email = email;
  res.json(users[userIndex]);
});

app.delete('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const userIndex = users.findIndex(u => u.id === id);
  if (userIndex === -1) {
    return res.status(404).json({ error: 'User not found' });
  }
  const deletedUser = users.splice(userIndex, 1);
  res.json(deletedUser[0]);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
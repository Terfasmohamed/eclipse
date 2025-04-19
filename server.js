const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middleware
app.use(express.json());

// Replace with your actual connection string
const uri = 'mongodb+srv://eclipse:eclipse@cluster0.ojrzavk.mongodb.net/';

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to MongoDB Atlas'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// Example route
app.get('/', (req, res) => {
  res.send('Hello from Express + MongoDB Atlas!');
});

app.listen(3000, () => {
  console.log('🚀 Server running on http://localhost:3000');
});

// backend/server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const path = require('path');

const app = express();


// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log('MongoDB Connected datatbase...'))
    .catch(err => console.log(err));


// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../frontend/pages')));

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/pages/home.html'));
}); 
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/pages/home.css'));
}); 
// Routes
app.use('/auth', authRoutes);

// Serve login.html for the root URL
app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/pages/signup.html'));
});
// Serve CSS files with the correct MIME type
app.get('/signup.css', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/pages/signup.css'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

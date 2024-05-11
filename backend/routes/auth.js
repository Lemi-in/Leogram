const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');

// Signup Route
router.post('/signup', async (req, res) => {
    const { fullName, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ fullName, email, password: hashedPassword });
        await user.save();
        res.redirect('/home');
    } catch (err) {
        console.log(err);
        res.status(500).send('Something went wrong');
    }
});

// Login Route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (user) {
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (passwordMatch) {
                // Passwords match, redirect to home page
                res.redirect('/home');
            } else {
                // Passwords don't match, send error message
                res.status(400).send('Invalid credentials');
            }
        } else {
            // User not found, send error message
            res.status(400).send('Invalid credentials');
        }
    } catch (err) {
        console.log(err);
        res.status(500).send('Error in login. Please try again later.');
    }
});

module.exports = router;
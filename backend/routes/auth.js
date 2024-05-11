const express = require('express');
const router = express.Router();
const User = require('../models/user');

//Signup Route
router.post('/signup' , async (req, res) => {
    const {fullName, email, password} = req.body;
    try {
        const user = new User({fullName, email, password});
        await user.save();
        res.redirect('/home');
        // res.sendFile(path.join(__dirname, '../frontend/Pages/home.html'));
        
    } catch (err) {
        console.log(err);
        res.status(500).send('Something went wrong');
        
    }
});

//Login Route

router.post('/login', async (req, res) =>{
    const {email, password} = req.body
    try {
        const user = await User.findOne({email, password});
        if(user){
            res.redirect('/home');
            // res.sendFile(path.join(__dirname, '../frontend/Pages/home.html'));

        }else{
            res.status(400).send('Invalid credentials')
        }
    } catch (err) {
        console.log(err);
        res.status(500).send('Error in login. Please try again later.');
    }
});

module.exports = router;
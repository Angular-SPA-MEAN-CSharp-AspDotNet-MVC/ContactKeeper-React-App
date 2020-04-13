const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('config');
const {check, validationResult} = require('express-validator/check');
const User = require('../models/Users');
const auth = require('../middleWare/auth');

// @route       GET api/auth
// @desc        Get the logged in user
// @access      Private
router.get('/', auth, async (req, res) => {
    try {     
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);       
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error');
    }
    //res.send('Get the loggged in users');
});

// @route       POST api/auth
// @desc        Auth user & get token
// @access      Public
router.post('/', [
    check('name','please enter name').notEmpty(),
    check('password','please enter at least 5 characters').isLength({min:5})
    ], async (req, res) => {
        const {email, password} = req.body;
        try{
            let user = await User.findOne({email}); // ?? 'maybe findOne(email)'
            if(!user) {
                res.status(400).json({error: "no such a user"});
            } else {
                let isMatch = await bcrypt.compare(password, user.password);
                if(!isMatch){
                    res.status(400).json({error: "credential error"});
                } else {  
                    const payload = { 
                        user: {
                            id: user.id
                        }
                    };
                    jwt.sign(
                        payload, 
                        config.get('jwtSecret'),
                        {
                            expiresIn: 1800
                        },
                        (err, token) =>{
                            if(err) throw err;
                            res.json({token})
                    });                
                    //res.send('Get the loggged in users');
                }  
            }
        }
        catch (err){
            res.send(err.message);
        }
});


module.exports = router;
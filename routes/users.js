const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('config')
const { check, validationResult } = require('express-validator/check');
//The require('express-validator/check') also works


const User = require('../models/Users');

// @route       POST api/users
// @desc        Register a user
// @access      Public     
router.post('/',[
        check('name', 'Please enter Name').notEmpty(),
        // the 'notEmpty'need replace to: .not().isEmpty() ???
        check('email','Please enter a valid email').isEmail(),
        check('password', 'Please enter at leat 5 characters')
            .isLength({min:5})
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){ 
            // Above, don't know why '.notEmpty()' doesn't work
            return res.status(400).json({errors: errors.array()});
        }  
        //else {
            //res.send("passed");
            //res.send(req.body);

            const {name, email, password} = req.body;

            try {
                let user = await User.findOne({email});
                if(user){
                    return res.status(500).json({error: "The user exists."});
                }      
                user = new User({
                    name,
                    email,
                    password
                });
                const salt = await bcrypt.genSalt(10); // arbitary value
                user.password = await bcrypt.hash(password,salt);
                await user.save();   
                //res.send('User Saved');
                const payload = {
                    user: {
                        id : user.id
                    }
                };    
                jwt.sign(payload, config.get("jwtSecret"), {
                    expiresIn: 1800
                }, (err, token)=>{
                    if(err){
                        throw err;
                    }else {
                        res.json({token});
                    }
                });
                
            }
            catch (err){
                return res.status(500).json({err: err.messages});
            }



        //}
});

module.exports = router;
const express = require('express');
const router = express.Router();

const { check, validationResult } = require('express-validator/check');
//The require('express-validator/check') also works


const User = require('../models/Users');

// @route       POST api/users
// @desc        Register a user
// @access      Public     
router.post('/',[
        check('username', 'Please enter UserName').notEmpty(),
        // the 'notEmpty'need replace to: .not().isEmpty() ???
        check('email','Please enter a valid email').isEmail(),
        check('password', 'Please enter at leat 5 characters')
            .isLength({min:5})
    ],
    (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){ 
            // Above, don't know why '.notEmpty()' doesn't work
            return res.status(400).json({errors: errors.array()});
        }  else {
            res.send("passed");
        }
});

module.exports = router;
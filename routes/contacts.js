// This is used for CRUD operation

const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');
const auth = require('../middleWare/auth');

const Contact = require('../models/Contacts');
const User = require('../models/Users');

// @route       GET api/contacts
// @desc        Get all the user contacts
// @access      Private     
router.get('/', auth, async (req, res) => {


    try {
        const contacts = await Contact.find({user: req.user.id}).sort({date: -1});
        // above line, don' know whynot is:  '{id: req.user.id}'
        res.json(contacts);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({msg: 'Server Error'});
    }

    //res.send('Get all contacts');
});


// @route       POST api/contacts
// @desc        Add new contact
// @access      Private     
router.post(
    '/',
    [
        auth, 
        [
            check('name', 'Name is required').not().isEmpty()
        ]        
    ], 
    async (req, res) => {        
        const errors = validationResult(req);
        if(errors.notEmpty){
            return res.status(400).json({errors: error.array()});
        }    
        const {name, email, phone, type} = req.body;
        try {
            const newContact = new Contact({
                name: name,
                email: email,
                phone: phone,
                type: type,
                user: req.user.id
            });        
            const contact = await newContact.save();
            res.json(contact);
        } catch (err) {
            console.log(err.message);
            res.status(500).json({msg: 'server Error'})
        }
    //res.send('Add a new contact');
    }
);

// @route       PuT api/contacts/:id
// @desc        Update a contact
// @access      Private     
router.put('/:id', (req, res) => {
    res.send('Update a contact');
});

// @route       Delete api/contacts/:id
// @desc        Delete a contact
// @access      Private     
router.delete('/:id', (req, res) => {
    res.send('Delete a contact');
});


module.exports = router;
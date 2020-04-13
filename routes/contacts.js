// This is used for CRUD operation

const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator/check');
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
router.post('/', (req, res) => {
    res.send('Add a new contact');
});

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
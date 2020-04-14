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
router.put('/:id', auth, async (req, res) => {
    const {name, email, phone, type} = req.body;

    const contactFields = {};
    if(name) contactFields.name = name;
    if(email) contactFields.email = email;
    if(phone) contactFields.phone = phone;
    if(type) contactFields.type = type;

    try {
        let contact = await Contact.findById(req.params.id);
        if(!contact) {
            return res.status(404).json({msg: "Contact not found"});
        }

        //Make sure user owns the contact??? why contact.user is an id???
        //console.log(contact.user.toString());
        if(contact.user.toString() !== req.user.id){
            return res.status(401).json({msg: "Not authorized"});
        }

       // console.log(req.params.id);
        contact = await Contact.findByIdAndUpdate(
            req.params.id, 
            { $set: contactFields },
            { new: true }
            );
        res.json(contact);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({msg: "Server Error"});
    }

    //res.send('Update a contact');
});

// @route       Delete api/contacts/:id
// @desc        Delete a contact
// @access      Private     
router.delete('/:id', auth, async (req, res) => {

    try {
        let contact = await Contact.findById(req.params.id);
        if(!contact) {
            return res.status(404).json({msg: "Contact not found"});
        }

        //Make sure user owns the contact??? why contact.user is an id???
        //console.log(contact.user.toString());
        if(contact.user.toString() !== req.user.id){
            return res.status(401).json({msg: "Not authorized"});
        }

       // console.log(req.params.id);
        await Contact.findByIdAndRemove(req.params.id);
        res.json({msg: "delete the contact"});
    } catch (err) {
        console.log(err.message);
        res.status(500).json({msg: "Server Error"});
    }
    //res.send('Delete a contact');
});


module.exports = router;
const express = require('express');
const router = express.Router();

// @route       GET api/auth
// @desc        Get the logged in user
// @access      Private

router.get('/', (req, res) => {
    res.send('Get the loggged in users');
});


// @route       POST api/auth
// @desc        Auth user & get token
// @access      Public

router.post('/', (req, res) => {
    res.send('Log in users');
});

module.exports = router;
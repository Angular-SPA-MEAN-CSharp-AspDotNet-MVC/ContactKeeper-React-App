const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req, res, next) {
    // Get token from header
    const token = req.header('x-auth-token');

    // Check if not token
    if(!token){
        res.status(401).json({msg: 'No token, no authorization!'});
    }

    try {
        const decoded = jwt.verify(token, config.get("jwtSecret"));
        req.user = decoded.user; // Need to rethink why it is 'user'
        next();        
    } catch (err) {
        res.status(401).json({msg: 'Token error, access denied'});
    } 

}
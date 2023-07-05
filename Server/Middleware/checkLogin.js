//import files
require('dotenv').config();
const jwt = require('jsonwebtoken');

//middleware to verifying Token
const checkLogin = (req, res, next)=>{
    //receive token from frontend profile route
    const {authorization} = req.headers;
    
    try {
        //spliting token for receiving without Bearer parth
        const token = authorization.split(' ')[1];
        //verifying the token
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        //receive username and DB id according to the user
        const {id, username} = decoded;
        //passing id and username from token.this username is the logged in user's username
        req.id = id;
        req.username = username;
        next();

    } catch (error) {
        res.status(401).send("Authentication Failure");
    }
};

module.exports = checkLogin;
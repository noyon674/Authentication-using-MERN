require('dotenv').config();
const jwt = require('jsonwebtoken');


const checkLogin = (req, res, next)=>{
    const {authorization} = req.headers;
    
    try {
        const token = authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        const {id, username} = decoded;
        req.id = id;
        req.username = username;
        next();

    } catch (error) {
        res.status(401).send("Authentication Failure");
    }
};

module.exports = checkLogin;
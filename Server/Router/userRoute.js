//import files
const Router = require('express').Router();
const checkVerify = require('../Middleware/checkLogin');
const {Home, Register, Login, Profile} = require('../Controller/userController');

//all routes here
Router.get('/', Home); //home route
Router.post('/register', Register) //register route
Router.post('/login', Login) //login route
Router.get('/profile', checkVerify, Profile)



//export router
module.exports = Router;
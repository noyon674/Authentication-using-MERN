//import files
require('dotenv').config();
const User = require('../Model/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;


//home controller
const Home = async (req, res)=>{
   res.status(200).send('<h1>I am your Home route</h1>');
}

//register controller
const Register = async (req, res)=>{
    try {
        const user = await User.findOne({username: req.body.username});
        if(user) return res.status(200).json('User already exists');

        bcrypt.hash(req.body.password, saltRounds, async (err, hash)=> {
            //create new user
        const newUser = new User({
            username: req.body.username,
            password: hash,
            phone: Number(req.body.phone)
        });
        
        //save new user
        await newUser.save()
        .then((newUser) => {
            res.status(201).send({
                Success: true,
                Message: 'User is created successfully',
            });
        }).catch((err) => {
            res.status(400).send({
                Success: false,
                Message: 'Ops! Try again to registration.'
            });
        });
        });
        
    } catch (error) {
        res.status(404).send(error);
    }
}

//login controller
const Login = async (req, res)=>{
    try {
        const findUser = await User.findOne({username: req.body.username});

        //username matching
        if(!findUser){
            return res.status(401).send({
                Success: false,
                Message: 'User not found'
            });
        }

        //password matching
        if(!bcrypt.compareSync(req.body.password, findUser.password)){
            return res.status(401).send({
                Success: false,
                Message: 'Incorrect password'
            });
        }

        //create payload
        const payload = {
            id: findUser._id,
            username: findUser.username
        };

        //token ganaret
        const Token = jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: '2d' });

        //token return
        return res.status(200).send({
            Success: true,
            Message: 'User is logged in successfully',
            Token: 'Bearer ' + Token
        });
    } catch (error) {
        res.status(404).send(error);
    };
}

//profile route : protected route
const Profile = (req, res)=>{
    res.status(200).send('Profile is accessable for  ' + req.username);
}



//export controller
module.exports = {Home, Register, Login, Profile};
//import files
const express = require('express');
const cors = require('cors');
const passport = require('passport');
const userRouter = require('./Router/userRoute');

//create app server
const app = express();

//middleware for app
app.use(cors());
app.use(express.json());
app.use(passport.initialize());
app.use(express.urlencoded({extended: true}));

//database connection
require('./config/database');

//passport require
require('./config/passport');

//all routes here
app.use(userRouter);

//client error handling
app.use((req, res, next)=>{
    res.status(404).send({
        Message: 'Route is not Found'
    });
    next();
});

//server error handling
app.use((err, req, res, next)=>{
    console.log(err.stack);
    res.status(500).send({
        Message: 'Server is Broken'
    });
    next();
});

//export app
module.exports = app;
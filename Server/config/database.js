//import files
require('dotenv').config();
const Mongoose = require('mongoose');

//database link from .env
const link = process.env.DB_LINK;


//database connection
Mongoose.connect(link)
.then(()=>{
    console.log('MongoDB atlas is connected')
})
.catch((error)=>{
    console.log(error);
    process.exit(1)
});
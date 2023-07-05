//import files
require('dotenv').config();
const App = require('./App');

//define a server port
const port = process.env.PORT;

//server starting from here
App.listen(port, ()=>{
    console.log(`http://localhost:${port}`);
});
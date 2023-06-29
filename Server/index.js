const App = require('./App');

const port = 3500;

App.listen(port, ()=>{
    console.log(`http://localhost:${port}`);
})
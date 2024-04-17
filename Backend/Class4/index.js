// require is use to import any module or function
// express.js framework is imported inside a variable express
const express = require("express");
// creating backend application using express framework
const app = express();

// we need port number to communicate with server
const port = 3000;

// adding middleware
app.use(express.json());

// get request (path, handler)
app.get('/',(req,res)=>{
    res.send(`<h1>This is home page</h1>`);
})

// we can do the testing of post request on POSTMAN
app.post('/car',(req,res)=>{
    res.send("Recieved a post request");
})

// start the server(port number , callback function)
app.listen(port,()=>{
    console.log(`Server started on port ${port}`)
})
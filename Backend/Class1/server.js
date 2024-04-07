// craeting single instance of express and giving it name app
// Server Instantiate or created
const express = require('express');
const app = express();

// used to parse req.body in express -> generally used in case of PUT or POST
const bodyParser = require('body-parser');
// specifically parse json data and add it to request.body object
app.use(bodyParser.json());

// giving port number where server will run 
// activate the server on 3000 port
app.listen(3000, () =>{
    console.log("Server started at port number 3000");
})

// creating routes 
app.get('/',(req,res) => {
    res.send("hello jee, kaise ho saare");
}) 
// creating post request (use to submit request data)
app.post('/api/cars',(req,res) => {
    const {name, brand} = req.body;
    console.log(name);
    console.log(brand);
    res.send("Car Sunmitted Sucessfully")
})

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myDatabase'
// ,{
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }
)
.then(() => {console.log("Connection Successful")})
.catch(() => {console.log("Recieved an error",error)});
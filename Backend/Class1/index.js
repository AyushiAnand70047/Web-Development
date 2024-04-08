const express = require("express");
const app = express();

const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/db")
.then(()=> {
    console.log("Data base is connected");
})
.catch((err) => {
    console.log("Error in db connection");
    console.error(err);
});


app.listen(3000, () => {
    console.log("Server is running");
})
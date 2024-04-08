const express = require("express");
const app = express();

// load config from env inside process object
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// Middleware to parse json request body
app.use(express.json());

// import routes for TODO API
const todoRoutes = require("./routes/todos");
// mount(add or append) the todo API routes
app.use("/api/v1",todoRoutes);

// start server
app.listen(PORT, () => {
    console.log(`Server started successfully at ${PORT}`);
})

// connect to the database
const dbConnect = require("./config/database");
dbConnect();

// default Route
app.get("/",(req,res) => {
    res.send(`<h1>This is home page </h1>`);
})
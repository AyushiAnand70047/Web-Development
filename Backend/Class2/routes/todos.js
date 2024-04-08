const express = require("express");
// create instance of router
const router = express.Router();
// import controller
const {createTodo} = require("../controllers/createTodo");
// define API routes
router.post("/createTodo",createTodo);

module.exports = router;
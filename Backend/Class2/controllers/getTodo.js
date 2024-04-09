// to import schema from model
const Todo = require("../models/Todo");

// define route handler
exports.getTodo = async(req,res) => {
    try {
        // fetch all todo from database
        const todos = await Todo.find({});

        // response
        res.status(200)
        .json({
            success: true,
            data: todos,
            message: "Entire Todo Data is fetched"
        });
    }
    catch(err){
        console.error(err);
        res.status(500)
        .json({
            success: false,
            error: err.message,
            message: "Server Error"
        })
    }
}

exports.getTodoById = async(req,res) => {
    try{
        // extract todo items basis on id
        const id = req.params.id;
        const todo = await Todo.findById({_id: id})

        // data for given id not found
        if(!todo){
            return res.status(400).json({
                success: false,
                message: "No Data Found With Given Id"
            })
        }
        // data for given id found
        res.status(200).json({
            success: true,
            data: todo,
            message: `Todo ${id} data successfully fetched`
        })
    }
    catch(err){
        console.error(err);
        res.status(500)
        .json({
            success: false,
            error: err.message,
            message: "Server Error"
        })
    }
}
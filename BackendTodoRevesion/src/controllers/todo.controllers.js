import todoModel from "../models/todo.models.js";

async function createTodo(req, res, next) {
    try {
        const { title, description } = req.body;

        const todo = await todoModel.create({
            title: title,
            description: description,
            createdBy: req.user.id
        });

        return res.status(201).json({
            status: "success",
            message: "Todo created successfully",
            data: {
                id: todo._id,
                title: todo.title,
                description: todo.description
            }
        })
    } catch(error) {
        next(error);
    } 
};

async function getTodo(req, res, next) {
    try {
        const todo = await todoModel.find({createdBy: req.user.id}).populate("createdBy", "username email");

        return res.status(200).json({
            status: "success",
            message: "Fetched successfully",
            data: todo
        })
    } catch(error) {
        next(error);
    }
}

export { createTodo, getTodo };
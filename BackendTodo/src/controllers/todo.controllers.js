const todoModel = require("../models/todo.model");

async function createTodo(req, res, next) {
    const { title, description = ""} = req.body;

    try {
        const todo = await todoModel.create({
            title: title,
            description: description,
            createdBy: req.user.id
        });

        return res.status(201).json({
            message: "Item created successfully",
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

async function todoList(req, res, next) {

    try {
        const result = await todoModel.find({
            createdBy: req.user.id
        });

        return res.status(200).json({
            message: "Data fetched successfully",
            data: result
        })
    } catch(error) {
        next(error)
    }
}

async function todoById(req, res, next) {
    const { id } = req.params

    try {
        const todo = await todoModel.find({
            _id: id,
            createdBy: req.user.id
        });

        if(!todo) {
            const error = new Error("Todo not found");
            error.statusCode = 404;

            return next(error);
        }

        return res.status(200).json({
            message: "Data fetched successfully",
            data: todo
        })
    } catch(error) {
        next(error)
    }
}

async function todoByStatus(req, res, next) {
    const { status } = req.query;

    try {
        const filter = {
            createdBy: req.user.id
        }

        if(status !== undefined) {
            if(!["true", "false"].includes(status)) {
                return res.status(400).json({
                    message: "Status must be true or false"
                })
            }
            filter.status = status === "true";
        }
        const todo = await todoModel.find(filter);

        return res.status(200).json({
            message: "Data fetched successfully..",
            data: todo
        });
    } catch(error) {
        next(error);
    }
};

async function updateTodo(req, res, next) {
    
    try {
        const todo = await todoModel.findOneAndUpdate(
            {
                _id: req.params.id,
                createdBy: req.user.id
            },
            {
                $set: {
                    title: req.body.title,
                    description: req.body.title
                }
            },
            {
                new: true,
                runValidators: true
            }
        );
        if(!todo) {
            return res.status(404).json({
                message: "Todo not found"
            })
        };

        return res.status(200).json({
            message: "Todo updated successfully",
            data: todo
        })

    } catch(error) {
        next(error);
    }
}

async function deleteTodo(req, res, next) {
    
    try {

        const todo = await todoModel.findOneAndDelete({
            _id: req.params.id,
            createdBy: req.user.id
        });

        if(!todo) {
            const error = new Error("Todo not found");
            error.statusCode = 404;

            next(error);
        }

        return res.status(200).json({
            message: "Record delete successfully",
            data: todo
        })
    } catch(error) {
        next(error);
    }
}

module.exports = { createTodo, todoList, todoById, todoByStatus, updateTodo, deleteTodo }
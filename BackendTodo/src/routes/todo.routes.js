const express = require("express");
const todoControllers = require("../controllers/todo.controllers");
const authMiddleware = require("../middlewares/auth.middleware");

const router = express.Router();

router.post("/create-todo", authMiddleware, todoControllers.createTodo);
router.get("/", authMiddleware, todoControllers.todoList);
router.get("/todobyStatus", authMiddleware, todoControllers.todoByStatus);
router.get("/:id", authMiddleware, todoControllers.todoById);
router.patch("/update-todo/:id", authMiddleware, todoControllers.updateTodo);
router.delete("/todo-delete/:id", authMiddleware, todoControllers.deleteTodo);


module.exports = router;
import { Router } from "express";
import * as todoControllers from "../controllers/todo.controllers.js";
import authMiddleware from "../middlewares/token.middleware.js";

const todoRouter = Router();

todoRouter.post("/create-todo", authMiddleware, todoControllers.createTodo);
todoRouter.get("/get-todo", authMiddleware, todoControllers.getTodo);

export default todoRouter;
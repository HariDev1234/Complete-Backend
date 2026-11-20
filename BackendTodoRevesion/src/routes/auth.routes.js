import { Router } from "express";
import * as authController from "../controllers/auth.controllers.js";

const authRouter = Router();

authRouter.post("/user-register", authController.userRegister);
authRouter.post("/login", authController.login)

export default authRouter;
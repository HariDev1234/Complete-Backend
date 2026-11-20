import { Router } from "express";
import * as authControllers from "../controllers/auth.controllers.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const authRouter = Router();

authRouter.post("/user-register", authControllers.userRegister);
authRouter.post("/login", authControllers.userLogin);
authRouter.get("/get-me", authMiddleware, authControllers.getMe);

authRouter.get("/refreshToken", authControllers.refreshToken)


export default authRouter;
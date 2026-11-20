import { Router } from "express";
import { getMe, login, refreshToken, register } from "../controllers/auth.controllers.js";
import verifyToken from "../middlewares/verify.middleware.js";

const authRouter = Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.get("/get-me", verifyToken, getMe)
authRouter.get("/refresh-token", refreshToken)


export default authRouter;
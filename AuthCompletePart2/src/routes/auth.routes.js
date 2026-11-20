import * as authControllers from "../controllers/auth.controllers.js";
import authenticateToken from "../middlewares/auth.middleware.js";
import { Router } from "express";

const authRouter = Router();

authRouter.post("/register", authControllers.userRegister);
authRouter.post("/login", authControllers.userLogin);

authRouter.get("/me", authenticateToken, authControllers.getMe);
authRouter.get("/refreshToke", authControllers.refreshToken);
authRouter.get("/logout", authenticateToken, authControllers.logout);
authRouter.get("/logout-all", authenticateToken, authControllers.logoutAll);
authRouter.post("/verify-email", authControllers.verifyEmail);

export default authRouter;
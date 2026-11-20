import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import errorMiddleware from "./middlewares/error.middleware.js";

import authRouter from "./routes/auth.routes.js";

const app = express();

app.use(cors());       // For CORS issue fix
app.use(express.json()); // Read API body
app.use(cookieParser());

app.use("/api/auth", authRouter)


app.use(errorMiddleware);

export default app;

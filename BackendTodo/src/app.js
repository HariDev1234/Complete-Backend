const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const authRoutes = require("./routes/auth.routes");
const todoRoutes = require("./routes/todo.routes");
const errorMiddleware = require("./middlewares/error.middleware");

const app = express();
app.use(cors());            // Help to overcome cors issue
app.use(express.json());         // Help to read request body
app.use(cookieParser());


app.use("/api/auth", authRoutes);
app.use("/api/todo", todoRoutes);

app.use(errorMiddleware);

module.exports = app;
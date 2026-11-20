require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const authRoutes = require("./routes/auth.routes");
const musicRoutes = require("./routes/music.routes")

const app = express();
app.use(cors());         // Give permission to different domain to access like Frontend 
app.use(express.json());  // To read API body
app.use(cookieParser());  // Middleware required to read data from cookie 

app.use("/api/auth", authRoutes);
app.use("/api/music", musicRoutes);



module.exports = app;
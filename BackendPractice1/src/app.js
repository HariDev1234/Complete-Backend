const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/user.routes");
const musicRoutes = require("./routes/music.routes");
const albumRoutes = require("./routes/album.routes");

const app = express();
app.use(cors());              // Help to overcome cors issue 
app.use(express.json())       // Required to read api body
app.use(cookieParser());


app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/music", musicRoutes);
app.use("/api/album", albumRoutes);

module.exports = app;
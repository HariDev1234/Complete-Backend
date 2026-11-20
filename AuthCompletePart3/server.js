import app from "./src/app.js";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./src/config/database.js";


connectDB();

app.listen(3000, () => {
    console.log(`Server running on port ${process.env.PORT}`)
})
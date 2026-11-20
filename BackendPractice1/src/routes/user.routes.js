const express = require("express");
const authMiddleware = require("../middlewares/auth.middleware")
const userCotrollers = require("../controllers/user.controllers");

const router = express.Router();

router.get("/user-list", authMiddleware, userCotrollers.getUserList);
router.get("/user-by-role/:role", authMiddleware, userCotrollers.getUserByRole);
router.get("/user-by-id/:id", authMiddleware, userCotrollers.getUserById);

module.exports = router
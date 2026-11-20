const express = require("express");
const authControllers = require("../controllers/auth.controllers")

const router = express.Router();

router.post("/user-register", authControllers.userRegister);
router.post("/user-login", authControllers.userLogin);


module.exports = router
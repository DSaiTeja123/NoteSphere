const express = require("express");
const router = express.Router();
const { register, login, getUser } = require("../controllers/auth.controller");
const { authenticateToken } = require("../utils/utils");

router.post("/register", register);
router.post("/login", login);
router.get("/", authenticateToken, getUser);

module.exports = router;

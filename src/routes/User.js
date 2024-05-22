const express = require("express");
const { register, login, getUsers } = require("../controllers/User");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/retrieve", getUsers);

module.exports = router;

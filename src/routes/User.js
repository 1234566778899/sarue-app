const express = require("express");
const { register, login, getUsers, getUser, updateUser, deleteUser } = require("../controllers/User");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/retrieve", getUsers);
router.get("/retrieve/:id", getUser);
router.post("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);

module.exports = router;

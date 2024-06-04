const express = require("express");
const { register } = require("../controllers/User");
const { createSuggestion, getSugg, updateSugg, deleteSugg } = require("../controllers/Suggestion");
const router = express.Router();

router.post("/register", createSuggestion);
router.get("/retrieve", getSugg);
router.put("/update/:id", updateSugg);
router.delete("/delete/:id", deleteSugg);

module.exports = router;

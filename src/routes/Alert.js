const express = require("express");
const { register } = require("../controllers/User");
const { sendAlert, getAlerts } = require("../controllers/Alert");
const router = express.Router();

router.post("/send", sendAlert);
router.get("/retrieve", getAlerts);

module.exports = router;

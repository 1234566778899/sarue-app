const express = require("express");
const { register } = require("../controllers/User");
const { sendAlert, getAlerts, deleteAlert, updateState, getAlertByUser } = require("../controllers/Alert");
const router = express.Router();

router.post("/send", sendAlert);
router.get("/retrieve", getAlerts);
router.get("/retrieve/:id", getAlertByUser);
router.delete("/delete/:id", deleteAlert);
router.put("/update/:id", updateState);

module.exports = router;

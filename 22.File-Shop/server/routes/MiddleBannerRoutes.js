const express = require("express");
const router = express();

const MiddleBannerCtrl = require("../controllers/MiddleBannerCtrl");

router.get("/middle-banners", MiddleBannerCtrl.getAllMiddleBan);
router.post("/new-middle-banners", MiddleBannerCtrl.newMidBan);

module.exports = router
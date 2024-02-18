const express = require("express");
const router = express();

const MiddleBannerCtrl = require("../controllers/MiddleBannerCtrl");

router.get("/middle-banners", MiddleBannerCtrl.getAllMiddleBan);
router.post("/new-middle-banner", MiddleBannerCtrl.newMidBan);
router.post("/update-middle-banner", MiddleBannerCtrl.updateMidBan);
router.post("/delete-middle-banner", MiddleBannerCtrl.deleteMidBan);

module.exports = router
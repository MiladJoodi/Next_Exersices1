const express = require("express");
const router = express();

const MiddleBannerCtrl = require("../controllers/MiddleBannerCtrl");

router.get("/new-middle-banners", MiddleBannerCtrl.newMiddleBan);

module.exports = router
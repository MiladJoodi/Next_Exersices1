const MiddleBanner = require("../models/MiddleBanner");

//GET
const getAllMiddleBan = async (req, res) => {
  try {
    const AllMidBans = await MiddleBanner.find();
    res.status(200).json(AllMidBans);
  } catch (err) {
    console.log(err);
    res.status(400).json({ msg: "error" });
  }
};
module.exports.getAllMiddleBan = getAllMiddleBan;

//POST
const newMidBan = async (req, res) => {
  try {
    const newMidBan = new MiddleBanner({
      image: req.body.image,
      imageAlt: req.body.imageAlt,
      situation: req.body.situation,
      link: req.body.link,
      date: new Date().toLocaleDateString("fa-IR", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    });
    newMidBan.save()
      .then((d) => {
        res.status(200).json({ msg: "بنر میانی با موفقیت ذخیره شد" });
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json({msg: "خطا در ذخیر بنر"})
      });
  } catch (err) {
    console.log("error");
  }
};
module.exports.newMidBan = newMidBan;

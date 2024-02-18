const MiddleBanner = require("../models/MiddleBanner");

//GET Edited for Pagination
const getAllMiddleBan = async (req, res) => {
  try {
    if (req.query.pn) {
      const paginate = 2;
      const pageNumber = req.query.pn;
      const GoalMidBans = await MiddleBanner.find()
        .sort({ _id: -1 })
        .skip((pageNumber - 1) * paginate)
        .limit(paginate);
      const AllMidBansNum = await (await MiddleBanner.find()).length;
      res.status(200).json({GoalMidBans, AllMidBansNum});
    } else {
      const AllMidBans = await MiddleBanner.find();
      res.status(200).json(AllMidBans);
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({ msg: "error" });
  }
};
module.exports.getAllMiddleBan = getAllMiddleBan;

//POST
const newMidBan = async (req, res) => {
  try {
    const newMidBanner = new MiddleBanner({
      image: req.body.image,
      imageAlt: req.body.imageAlt,
      situation: req.body.situation,
      link: req.body.link,
      date: new Date().toLocaleDateString("fa-IR", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    });
    newMidBanner
      .save()
      .then((d) => {
        res.status(200).json({ msg: "بنر میانی با موفقیت ذخیره شد" });
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json({ msg: "خطا در ذخیر بنر" });
      });
  } catch (err) {
    console.log("error");
  }
};
module.exports.newMidBan = newMidBan;


//UPDATE
const updateMidBan = async (req, res) => {
  try {

    await updateOne(
      {_id: req.body.goalId},
      {
        $set:{
          image: req.body.image,
          imageAlt: req.body.imageAlt,
          situation: req.body.situation,
          link: req.body.link,
          date: new Date().toLocaleDateString("fa-IR", {
            hour: "2-digit",
            minute: "2-digit",
          })
        }
      }
    )
    res.status(200).json({ msg: "بنر میانی با موفقیت به روز رسانی شد" });

    // const newMidBanner = new MiddleBanner({
    //   image: req.body.image,
    //   imageAlt: req.body.imageAlt,
    //   situation: req.body.situation,
    //   link: req.body.link,
    //   date: new Date().toLocaleDateString("fa-IR", {
    //     hour: "2-digit",
    //     minute: "2-digit",
    //   }),
    // });
    // newMidBanner
    //   .save()
    //   .then((d) => {
    //     res.status(200).json({ msg: "بنر میانی با موفقیت ذخیره شد" });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     res.status(400).json({ msg: "خطا در ذخیر بنر" });
    //   });
  } catch (err) {
    console.log("error");
  }
};
module.exports.updateMidBan = updateMidBan;

//DELETE
const deleteMidBan = async (req, res) => {
  try {
    await deleteOne(
      {_id: req.body.goalId},
    )
    res.status(200).json({ msg: "بنر میانی با موفقیت حذف شد" });

  } catch (err) {
    console.log("error");
  }
};
module.exports.deleteMidBan = deleteMidBan;


// GET ONE MIDDLE BANNER
const getOneMidBan = async (req, res) => {
  try {
    const goalMidBan = await MiddleBanner.findById(req.params.id);
    res.status(200).json(goalMidBan);

  } catch (err) {
    console.log("error");
  }
};
module.exports.getOneMidBan = getOneMidBan;
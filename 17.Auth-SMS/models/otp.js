const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    // Fields
  },
  { timestamps: true }
);

const model = mongoose.models.Otp || mongoose.model("Otp", schema);

module.exports = model;

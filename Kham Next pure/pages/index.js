const mongoose = require("mongoose");
const coursesModel = require("./course");

export const schema = mongoose.Schema(
  {
    body: {
      type: String,
      required: true,
    },

    course: {
      type: mongoose.Types.ObjectId,
      ref: "Course",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const model = mongoose.models.Comment || mongoose.model("Comment", schema);

export default model;

const mongoose = require("mongoose");

const schema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
});

const model = mongoose.models.Course || mongoose.model("Course", schema);

export default model;

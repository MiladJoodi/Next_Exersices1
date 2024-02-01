const mongoose = require("mongoose");

const schema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  isCompleted: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
});

const model = mongoose.models.Todo || mongoose.model("Todo", schema);

export default model;

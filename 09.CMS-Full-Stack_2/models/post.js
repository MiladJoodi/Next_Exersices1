const mongoose = require('mongoose')

const schema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
});

const model = mongoose.models.Post || mongoose.model("Post", schema);

export default model;


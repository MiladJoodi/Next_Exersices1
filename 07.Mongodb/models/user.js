const mongoose = require("mongoose");

const schema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    // minLength, maxLength
  },

  email: {
    type: String,
    required: true,
    // pattern (RegEx)
  },

  password: {
    type: String,
    required: true,
    minLength: 8,
  },
});

const model = mongoose.models.User || mongoose.model("User", schema);

export default model;

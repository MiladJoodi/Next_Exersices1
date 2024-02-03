const mongoose = require("mongoose");

const schema = mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    // amin1221 -> Hash -> bgr3hvgupt4wbpjrntbijnidjan
    // Token -> JWT -> Cookies
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true, // USER - ADMIN
    // default: "USER",
  },
});

const model = mongoose.models.User || mongoose.model("User", schema);

export default model;

const mongoose = require("mongoose");
import UserModel from '@/models/User'

const schema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    required: true,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true,
  },
},
{
    timesttamp: true
}
);

const model = mongoose.models.Todo || mongoose.model("Todo", schema);

export default model;

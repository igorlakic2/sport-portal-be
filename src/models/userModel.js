const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const usersSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "New",
  },
  //   posts: {
  //     type: Schema.Types.ObjectId,
  //     ref: 'Post'
  //   }
});

module.exports = mongoose.model("User", usersSchema);

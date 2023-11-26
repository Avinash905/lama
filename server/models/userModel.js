const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    username: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", schema);
module.exports = User;

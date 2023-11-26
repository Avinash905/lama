const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    filename: {
      type: String,
    },
    description: {
      type: String,
    },
    projectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
    },
  },
  {
    timestamps: true,
  }
);

const File = mongoose.model("File", schema);
module.exports = File;

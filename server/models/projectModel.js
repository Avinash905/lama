const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    configuration: {
      chatbotName: String,
      welcomeMessage: String,
      inputPlaceholder: String,
      primaryColor: String,
      fontColor: String,
      fontSize: String,
      chatHeight: Number,
      showSources: Boolean,
      bottomDistance: Number,
      horizontalDistance: Number,
      chatIconSize: String,
      botIcon: String,
      screenPosition: String,
    },
  },
  {
    timestamps: true,
  }
);

const Project = mongoose.model("Project", schema);
module.exports = Project;

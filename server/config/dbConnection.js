const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const connectDB = () => {
  return mongoose.connect(process.env.MONGODB_URI);
};

module.exports = connectDB;

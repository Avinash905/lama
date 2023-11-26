const User = require("../models/userModel");

const findOrCreateUser = async (email) => {
  try {
    const userFound = await User.findOne({ email });
    if (userFound) return userFound;

    const newUser = new User({
      email,
      username: email.split("@")[0],
    });
    return await newUser.save();
  } catch (error) {
    throw error;
  }
};

const updateUsername = async (userId, newUsername) => {
  try {
    return await User.findByIdAndUpdate(
      userId,
      { username: newUsername },
      { new: true }
    );
  } catch (error) {
    throw error;
  }
};

module.exports = { findOrCreateUser, updateUsername };

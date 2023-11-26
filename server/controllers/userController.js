const userServices = require("../services/userServices");

const findOrCreateUser = async (req, res, next) => {
  try {
    const { email } = req.body;

    if (!email) return res.sendStatus(400);

    const user = await userServices.findOrCreateUser(email);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

const updateUsername = async (req, res, next) => {
  try {
    const { newUsername, userId } = req.body;

    if (!newUsername || !userId) return res.sendStatus(400);

    const user = await await userServices.updateUsername(userId, newUsername);

    return res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

module.exports = { findOrCreateUser, updateUsername };

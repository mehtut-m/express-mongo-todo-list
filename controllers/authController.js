const { User } = require("../models/");
const bcrypt = require("bcrypt");

// const hashedPassword = await bcrypt.hash(password, 10);

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).send("Email or password is invalid");
    }
    const isPasswordVerified = await bcrypt.compare(password, user.password);

    if (!isPasswordVerified) {
      return res.status(400).send("Email or password is invalid");
    }

    req.user = user;
    // next();
    res.send(user);
  } catch (err) {
    next(err);
  }
};

const bcrypt = require("bcrypt");
const { User } = require("../models/");

exports.getUsers = async (req, res, next) => {
  try {
    const user = await User.find({});
    res.send({ user });
  } catch (error) {
    next(error);
  }
};

exports.getUserByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.send({ user });
  } catch (error) {
    next(error);
  }
};

exports.createUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    // const userExist = await User.findOne({ where: { email } });

    // Check if the user with this email exist
    // if (userExist) {
    //   return res.status(400).json({ message: "Email has already been used" });
    // }

    const hashedPassword = await bcrypt.hash(password, 10);

    const isUserExisted = await User.findOne({ email });

    if (isUserExisted) {
      return res.status(400).send({ message: "Email has already been used" });
    }
    const userInfo = {
      email,
      password: hashedPassword,
      name,
    };
    const user = await User.create(userInfo);

    res.status(201).send({ user });
  } catch (error) {
    next(error);
  }
};

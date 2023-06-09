const User = require("../models/user");
const cookieToken = require("../utils/cookieToken");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const { fullname, email, mobile, password } = req.body;

    if (!fullname || !email || !mobile || !password) {
      return res.status(400).json({
        msg: "Credintials Missing",
      });
    }

    const emailExists = await User.findOne({ email });

    if (emailExists) {
      return res.status(400).json({
        msg: "Email already exists",
      });
    }

    const registerUser = await User.create({
      fullname,
      email,
      mobile,
      password,
    });

    cookieToken(registerUser, res);
  } catch (error) {
    console.log(error);
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        msg: "Credintials Missing",
      });
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(400).json({
        msg: "User doesnt Exists",
      });
    }

    const passwordMatch = await user.isValidatedPassword(password);

    if (!passwordMatch) {
      return res.status(400).json({
        msg: "Password Doesnt Matched",
      });
    }

    cookieToken(user, res);
  } catch (error) {
    console.log(error);
  }
};

exports.logout = async (req, res, next) => {
  res
    .clearCookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    })
    .status(200)
    .json({
      success: true,
      msg: "Logged Out Successful",
    });
};

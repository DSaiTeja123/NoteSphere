const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const register = async (req, res) => {
  const { fullName, email, password } = req.body;

  if (!fullName || !email || !password)
    return res.status(400).json({ message: "All fields are required" });

  const userExists = await User.findOne({ email });
  if (userExists)
    return res.status(400).json({ message: "User already exists" });

  const user = await User.create({ fullName, email, password });

  const accessToken = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "36000m",
  });

  res.json({ error: false, user, accessToken, message: "Registration successful" });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user || user.password !== password)
    return res.status(400).json({ error: true, message: "Invalid credentials" });

  const accessToken = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "36000m",
  });

  res.json({ error: false, message: "Login successful", email, accessToken });
};

const getUser = async (req, res) => {
  const user = await User.findById(req.user.user._id);
  if (!user) return res.sendStatus(401);

  res.json({ user, message: "" });
};

module.exports = { register, login, getUser };

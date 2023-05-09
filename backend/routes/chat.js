const express = require("express");
const router = express.Router();

const { chat } = require("../controllers/openai");
const { isLoggedIn } = require("../middleware/auth");

router.route("/chat").post(isLoggedIn, chat);

module.exports = router;

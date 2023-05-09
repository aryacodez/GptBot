const express = require("express");
const router = express.Router();
const { file, text } = require("../controllers/uploadFile");
const { isLoggedIn } = require("../middleware/auth");

router.route("/upload").post(isLoggedIn, file);
router.route("/uploadtext").post(isLoggedIn, text);

module.exports = router;

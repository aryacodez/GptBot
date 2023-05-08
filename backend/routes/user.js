const express = require("express");
const router = express.Router();

const {
  register,
  login,
  logout,
  
} = require("../controllers/user");
const { isLoggedIn } = require("../middleware/auth");

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(isLoggedIn,logout);
router.get('/protected', isLoggedIn, (req, res) => {
  res.send('You have successfully accessed the protected resource!');
});

module.exports = router;

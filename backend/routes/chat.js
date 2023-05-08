const express = require("express");
const router = express.Router();

const {
  chat  
} = require("../controllers/openai");
const { isLoggedIn } = require("../middleware/auth");
// const isAuthenticated = (req, res, next) => {
//   if (req.isAuthenticated()) {
//     // If user is authenticated, proceed to next middleware
//     return next();
//   }
//   // If user is not authenticated, redirect to login page
//   res.redirect("/login");
// };
router.route("/chat").post(isLoggedIn,chat);



module.exports = router;

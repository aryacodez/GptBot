const jwt = require("jsonwebtoken");
const User = require("../models/user");

exports.isLoggedIn = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(400).json({
        success: false,
        msg: "Token Not Available",
      });
    }

    // const decoded = await jwt.verify(token, process.env.JWT_SECRET);

    // req.user = await User.findById(decoded.id);
    // next();
    await jwt.verify(token,process.env.JWT_SECRET,(err,decodedToken)=>{
      req.user = User.findById(decodedToken.id);
      next();
    })
  } catch (error) {
    console.log(error);
  }
  // const token = req.cookies.token
  // if(token){
  //   jwt.verify(token,process.env.JWT_SECRET,(err,decodedToken)=>{
  //     if(err){
  //       console.log(err.message)
  //       res.redirect('/')
  //     }else{
  //       req.user = User.findById(decodedToken.id)
  //       res.status(200).send(decodedToken)
  //       next()
  //     }
  //   })
  // }
  // else{
  //   res.redirect('/')
  // }
};
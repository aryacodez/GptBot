const cookieToken = (user, res) => {
    const token = user.jwtTokenization();
    const option = {
      maxAge:  3 * 24 * 60 * 60 * 1000,
      httpOnly:true
    }
    user.password=undefined
    res.status(200).cookie('token',token,option).json({
      success:true,
      token,
      user
    })
    // res
    //   .status(200)
    //   .cookie("token", token, {
    //     expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
    //     httpOnly: true,
    //   })
    //   .json({
    //     success: true,
    //     token,
    //     user,
    //   });
    // res.cookie('token',token,{ httpOnly: true, maxAge:  3 * 24 * 60 * 60 * 1000 })
    // res.status(201).json({
    //   success:true,
    //   token,
    //   user
    // })
  };
  
  module.exports = cookieToken;
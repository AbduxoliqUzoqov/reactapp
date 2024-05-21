const router = require("express").Router();
const jwt= require('jsonwebtoken');
const User = require("../models/user.js");


router.post("/", async (req, res) => {
  const token = req.body.token;
  //const decode = jwt.verify(token,'chat'); decode.userId
  const user = await User.findById(token).select("-password");

  console.log(user);
  res.json(user);
});

router.get("/", async (req, res) => {
  
  res.json({"user":"abduxoliq"});
});


module.exports = router;


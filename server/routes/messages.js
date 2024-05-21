const router = require("express").Router();
const jwt= require('jsonwebtoken');
const MessageModel = require("../models/messages.js");
const User = require("../models/user.js");

router.get("/get", async(req,res)=>{
	const msg = await MessageModel.find().populate('sender');
	console.log(msg)
	//const user = await User.findById(decode.userId)
	res.json(msg);
});

router.post("/send/", async(req,res)=>{
   const {token, sendtext} = req.body;
	//const decode = jwt.verify(token,'chat'); decode.userId
	const d = await MessageModel.create({sender : token, text:sendtext})
	const msg = await MessageModel.find().populate('sender');
	console.log(msg)
	res.json(msg);
});

module.exports = router;
// token •---> senderId, sendtext,
// msg create {text:sendtext,user:senderId}
//


const router = require("express").Router();
const User = require("../models/user");
//const bcrypt = require("bcrypt");


router.post("/login", async (req, res) => {
	try {
      console.log(req.body)
		const user = await User.findOne({ email: req.body.email });
		if (!user)
			return res.status(401).send({ message: "Foydalanuvchi topilmadi" });

		
		if (req.body.password != user.password)
			return res.status(401).send({ message: "Invalid Email or Password" });

		//const token = user.generateAuthToken();
		const token = user._id
		console.log(token)
		res.status(200).send({ data: token, message: "logged in successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

router.post("/register", async (req, res) => {
	try {
      console.log(req.body)
		const user = await User.findOne({ email: req.body.email });
		if (user){
			return res.status(401).send({ message: "Email band" });
		}else{
		   const boyProfilePic =`https://avatar.iran.liara.run/public/boy?username=${req.body.fristName}`;
		  const girlProfilePic =`https://avatar.iran.liara.run/public/girl?username=${req.body.fristName}`;
		  const usPic = req.body.gender =="erkak" ? boyProfilePic : girlProfilePic;
		  await User.create({
		     email:req.body.email,
		     fristName:req.body.fristName,
		     lastName:req.body.lastName,
		     password:req.body.password,
		     image:usPic});
		   res.status(201).send({ message: "User created successfully" });
		}
	} catch (error) {
	   console.log("ERROR11",error)
		res.status(500).send({ message: "Internal Server Error" });
	}
});



module.exports = router;

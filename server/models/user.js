const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");


const userSchema = new mongoose.Schema({
	fristName: { type: String, required: true },
	lastName: { type: String, required: true },
	image: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	
});

userSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ userId: this._id }, "chat", {
		expiresIn: "7d",
	});
	return token;
};

const User = mongoose.model("User", userSchema);



module.exports = User;

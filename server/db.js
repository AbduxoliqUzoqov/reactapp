const mongoose = require("mongoose");
const uri = "mongodb+srv://maktabstim:eKTdl08pfHuK5lqj@cluster0.mbcvrwr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

module.exports = () => {
	const connectionParams = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	};
	try {
		mongoose.connect(uri, connectionParams);
		console.log("MongoDb ulandi");
	} catch (error) {
		console.log(error);
		console.log("Could not connect database!");
	}
};

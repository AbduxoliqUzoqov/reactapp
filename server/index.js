require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");

const msgRoutes = require("./routes/messages.js");
const usersRoutes = require("./routes/users.js");
const authRoutes = require("./routes/auth.js");

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());


// routes
app.use("/api/msg", msgRoutes);
app.use("/api/token", usersRoutes);
app.use("/api/auth", authRoutes);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));

const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
dotenv.config();

// connect to db
mongoose.connect(
  "mongodb+srv://login:PJ3112@cluster0.4ow5cjn.mongodb.net/?retryWrites=true&w=majority",).then(() => console.log("connected to db"));

// Import routes
const userRoutes = require("./routes/user");

// Middlewares
app.use(express.json());
app.use(cors());

// route Middlewares
app.use("/api/user", userRoutes);

app.listen(3000, () => console.log("server up and runing on port 3000!"));
//installed or library modules
const express = require("express");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
require("dotenv").config({ path: "./config/.env" });
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");

//created and imported modules
const dbconnection = require("./database/databaseConnection");
const errorHandler = require("./middlewares/errorHandler");
const authMiddleware = require("./middlewares/authMiddleware");

//creating server instance
const app = express();
//accessing cors
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

//disabling 304 status code
app.disable("etag");

//priority of middlewares
app.use(errorHandler);
app.use(express.urlencoded({ extended: true }));
app.use("/", express.static(path.join(__dirname, "./uploads"))); //give access to uploads folder
app.use(express.json());
app.use(cookieParser());

app.use(morgan("dev"));
//database connection with mongo atlas
dbconnection();

//catching uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  process.exit(1);
});

//uncaught promise rejection
process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

//routes for server
app.use("/api/users", require("./routes/userRoute"));

const server = app.listen(3000, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
  console.log(`http://localhost:${process.env.PORT}`);
});

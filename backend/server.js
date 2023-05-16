const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config({ path: "./config/.env" });

//creating server instance
const app = express();

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
app.get("/", (req, res) => {
  res.send("Hello World");
});

//starting server
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => {
    console.log(`connected to db instance 🕸️📑 ${db.connections[0].name}`);
  })
  .catch((err) => {
    console.log("Failed to connect to MongoDB Atlas");
    console.log(err);
  });

const server = app.listen(3000, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
  console.log(`http://localhost:${process.env.PORT}`);
});

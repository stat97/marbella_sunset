
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const MONGO_URI = process.env.MONGO_URI;
const connect = async () => {
  try {
    const db = await mongoose.connect(MONGO_URI);

    const { name, host } = db.connection;

    console.log(
      `Connected in host: ${host} called as: ${name}`
    );
  } catch (error) {
    console.log("Refused Connection DB", error.message);
  }
};

module.exports = { connect };
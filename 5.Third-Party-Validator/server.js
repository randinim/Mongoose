const express = require("express");
const mongoose = require("mongoose");
const app = express();
const validator = require("validator");
const PORT = 8082;

const URL =
  "mongodb+srv://maliksharandini:bZjnBZn39AFkjJpt@vms.tejipzj.mongodb.net/Student-database";

//! 1. Connect to mongodb using mongoose
const connectToDB = async () => {
  try {
    await mongoose.connect(URL);
    console.log("Mongodb has been connected successfully");
  } catch (error) {
    console.log(`Error connecting to mongodb ${error}`);
  }
};
connectToDB();

//!. Design Our Schema
const userSchema = new mongoose.Schema(
  {
    age: {
      type: String,
      required: [true, "Please username is required"],
      validate: {
        validator: (value) => {
          return validator.isInt(value, { min: 0, max: 120 });
        },
        message: "invalid age",
      },
    },
    email: {
      type: String,
      required: [true, "Please email is required"],
      validate: {
        validator: (value) => {
          return validator.isEmail(value);
        },
        message: "invalid email",
      },
    },
  },
  {
    timestamps: true,
  }
);

//! Compile the schema to create the model
const User = mongoose.model("User", userSchema);

//!Create user
const createUser = async () => {
  try {
    await User.create({
      email: "emm@gmail.com",
      age: "24",
    });
  } catch (error) {
    console.log(error);
  }
};
createUser();

//Start the server
app.listen(PORT, console.log(`Server is up and running on port ${PORT}`));

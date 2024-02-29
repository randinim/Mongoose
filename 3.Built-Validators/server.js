const express = require("express");
const mongoose = require("mongoose");
//port
const PORT = 5000 || process.env.PORT;
//instance of express
const app = express();

const URL =
  "mongodb+srv://maliksharandini:bZjnBZn39AFkjJpt@vms.tejipzj.mongodb.net/Student-database";
//connect to mongodb
const connectToDB = async () => {
  try {
    await mongoose.connect(URL);
    console.log("Mongodb Connected Succesfully");
  } catch (error) {
    console.log(`Error connectiong mongodb ${error}`);
  }
};
//
connectToDB();
//!Design Schema
const userProfileSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please user name is required"],
      unique: true,
      minLength: 3,
      maxLength: 10,
    },
    email: {
      type: String,
      required: [true, "Please email  is required"],
      match: /@/,
    },
    age: {
      type: Number,
      required: [true, "Please age is required"],
      min: 18,
      max: 65,
    },
    gender: {
      type: String,
      enum: ["male", "female", "Other"],
      default: "other",
    },
  },
  {
    timestamps: true,
  }
);

//!compile
const User = mongoose.model("User", userProfileSchema);

const createDoc = async () => {
  try {
    const userCreated = await User.create({
      username: "Randi",
      gender: "female",
      age: 24,
      email: "randi@gmail.com",
    });
    console.log(userCreated);
  } catch (error) {
    console.log(error);
  }
};
createDoc();
//start the server
app.listen(PORT, console.log(`Server is running on port ${PORT}`));

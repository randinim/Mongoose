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
const userProfileSchema = new mongoose.Schema({
  username: String, //string
  age: Number, //number
  birthday: Date, //Date
  isActive: Boolean, //Boolean
  hobbies: [String], //Boolean
  objectID: mongoose.Schema.Types.ObjectId, //ObjectID
  address: {
    street: String,
    city: String,
    postaclCode: Number,
  }, //Embeded Document
  customdata: mongoose.Schema.Types.Mixed, //Mixed
});
//!compile
const User = mongoose.model("User", userProfileSchema);

//!=====CREATE OPERATION======
// //! ----.save()--------
// const newUser = new User({
//   username: "masynctech",
//   age: 26,
//   birthday: new Date("2001-04-15"),
//   isActive: true,
//   hobbies: ["Soccer", "Reading", "Coding"],
//   address: {
//     street: "789 0ak St",
//     city: "Kumasi",
//     postaclCode: 5551,
//   },
//   customdata: {
//     country: "Ghana",
//   },
// });

// //! Save the doc
// newUser
//   .save()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => console.log(error));
//! ----.create()--------
User.create({
  username: "emmanuel",
  age: 26,
  birthday: new Date("2001-04-15"),
  isActive: true,
  hobbies: ["Soccer", "Reading", "Coding"],
  address: {
    street: "789 0ak St",
    city: "Kumasi",
    postaclCode: 5551,
  },
  customdata: {
    country: "Ghana",
  },
})
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
//start the server
app.listen(PORT, console.log(`Server is running on port ${PORT}`));

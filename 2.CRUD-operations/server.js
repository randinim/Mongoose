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
// User.create({
//   username: "emmanuel",
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
// })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
//! ----.find()--------
// User.find()
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
//! ----.findOne()--------
// User.findOne({
//   username: "masynctech",
// })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
// //! ----.findById()--------
// User.findById("652fcb47a0fc777e4baba1e5")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

//! ----.where()--------
// const findUsers = async () => {
//   try {
//     const users = await User.find().where("age").gte(27);
//     console.log(users);
//   } catch (error) {
//     console.log(error);
//   }
// };
// findUsers();
//!---------.sort----------
// const findUsers = async () => {
//   try {
//     const users = await User.find()
//       .where("age")
//       .gte(20)
//       .sort({ username: 1 })
//       .limit(1);
//     console.log(users);
//   } catch (error) {
//     console.log(error);
//   }
// };
// findUsers();
//!=====UPDATING DOCUMENTS====
//!----.updateOne()------
// const updateOneFn = async () => {
//   try {
//     const updatedDoc = await User.updateOne(
//       { name: "Prince" },
//       { email: "prince2@gmail.com", age: 30 },
//       { new: true }
//     );
//     console.log(updatedDoc);
//   } catch (error) {
//     console.log(error);
//   }
// };
// updateOneFn();

//!----.findByIdAndUpdate()---------
const updateDoc = async () => {
  try {
    const updatedDoc = await User.findByIdAndUpdate(
      "65cb4beb9721168b98a8ae34",
      { age: "40" },
      { email: "prince2@gmail.com", age: 30 },
      { username: "Thomas" },
      { new: true }
    );
    console.log(updatedDoc);
  } catch (error) {
    console.log(error);
  }
};
updateDoc();
//!----.findOneAndUpdate()---------

//start the server
app.listen(PORT, console.log(`Server is running on port ${PORT}`));

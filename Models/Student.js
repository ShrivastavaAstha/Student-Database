const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
  Name: String,
  Age: Number,
  Gender: String,
  Branch: String,
  College: String,
  Email: String,
  Password: String,
  PassoutYear: Number,
});

const studentmodel = mongoose.model("Student", studentSchema);
module.exports = studentmodel;

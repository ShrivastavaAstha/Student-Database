const express = require("express");
const { connectDatabase } = require("./connection/connect");
const app = express();
app.use(express.json());
const STUDENT_MODEL = require("./Models/Student.js");

app.post("/api/addstudent", async (req, res) => {
  try {
    const stuobj = {
      Name: req.body.studentname,
      Age: req.body.age,
      Gender: req.body.gender,
      Branch: req.body.branch,
      College: req.body.college,
      Email: req.body.email,
      Password: req.body.password,
      PassoutYear: req.body.passoutyear,
    };
    const addStudent = new STUDENT_MODEL(stuobj);
    await addStudent.save();
    return res.json({
      success: true,
      message: "Student registered successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ success: false, error: error.message });
  }
});

app.get("/api/getstudent", async (req, res) => {
  try {
    const studentData = await STUDENT_MODEL.find();
    return res.json({ success: true, data: studentData });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ success: false, error: error.message });
  }
});

connectDatabase();
const PORT = 8000;

app.listen(PORT, async () => {
  console.log(`Server is running at port ${PORT}`);
});

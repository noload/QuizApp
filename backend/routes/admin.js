const { Router } = require("express");
const router = Router();
const { User, QuestionBank } = require("../db/index");
const { validateUser, authenticateUser } = require("../middleware/validation");
const { route } = require("./admin");

router.post("/signup", validateUser, async (req, res) => {
  try {
    const id = "UID" + Math.floor(Math.random() * 100000);
    const username = req.body.username;
    const password = req.body.password;
    const role = req.body.role;

    if (password.length < 8) {
      res.status(500).json({
        success: false,
        err: {},
        message: "password is too short minimun lenghth should be 8 or greter",
        suggestion: ["Vaibhav@123K", "password@123PASS", "KeshavKumar@19287"],
      });
    }

    const user = await User.create({
      id,
      username,
      password,
      role,
    });

    res.status(200).json({
      success: true,
      err: {},
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      err: error,
      message: "User Not created ",
      data: {},
    });
  }
});

router.post("/signin", authenticateUser, async (req, res) => {
  return res.status(200).json({
    success: true,
    err: {},
    message: "Logged Successfully",
    data: {},
  });
});

router.post("/add", async (req, res) => {
  const questionObj = req.body;

  try {
    const question = await QuestionBank.create({ ...questionObj });
    console.log(question);
    res.json({
      success: true,
      message: "Question added successfully",
      data: question,
      err: {},
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Question Not added ",
      data: [],
      err: error.message,
    });
  }
});

router.get("/questions", async (req, res) => {
  try {
    const questionList = await QuestionBank.find();
    res.json({
      success: true,
      message: "Successfully fetched all question data",
      data: questionList,
      err: {},
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Not able to fetch question data",
      data: [],
      err: error.message,
    });
  }
});

router.delete("/remove/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const resp = await QuestionBank.findByIdAndDelete({ _id: id });
    res.json({
      success: true,
      message: `Successfully deleted the question with id ${id}`,
      data: resp,
      err: {},
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
      data: {},
      err: { error },
    });
  }
});

module.exports = router;

const { Router } = require("express");
const router = Router();
const { User } = require("../db/index");
const { validateUser, authenticateUser } = require("../middleware/validation");

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

module.exports = router;

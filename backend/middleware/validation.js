const { User } = require("../db/index");

const validateUser = async (req, res, next) => {
  const username = req.body.username;
  const role = req.body.role;

  try {
    let user = await User.findOne({
      username,
      role,
    });

    if (user) {
      return res.status(500).json({
        success: false,
        err: {},
        message: "User already Exists Please try with other username",
      });
    }

    next();
  } catch (error) {
    throw error;
  }
};

const authenticateUser = async (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  const role = req.body.role;

  try {
    let user = await User.findOne({
      username,
      password,
      role,
    });

    if (!user) {
      return res.status(500).json({
        success: false,
        err: "Something went wrong",
        message: "Invalid username or password",
        data: {},
      });
    }
    next();
  } catch (error) {
    throw error;
  }
};
module.exports = {
  validateUser,
  authenticateUser,
};

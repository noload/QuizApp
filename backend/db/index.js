const mongoose = require("mongoose");
const { DB_URL } = require("../config/serverConfig");

mongoose.connect(DB_URL);

//schema defining

const UserSchema = new mongoose.Schema({
  id: String,
  username: String,
  password: { type: String, min: 8 },
  role: {
    type: String,
    enum: ["Student", "Admin"],
    default: "Student",
  },
});

const QuizQuestionSchema = new mongoose.Schema({
  question: String,
  options: [String],
  category: String,
  correctOption: Number,
});

const User = mongoose.model("Users", UserSchema);
const QuestionBank = mongoose.model("QuestionBank", QuizQuestionSchema);

module.exports = {
  User,
  QuestionBank,
};

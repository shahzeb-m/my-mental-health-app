const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  task: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("Todo", todoSchema);

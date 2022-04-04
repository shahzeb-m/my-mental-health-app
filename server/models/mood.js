const mongoose = require("mongoose");

const moodSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("Mood", moodSchema);

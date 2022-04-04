const mongoose = require("mongoose");

const gratitudePostSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("GratitudePost", gratitudePostSchema);

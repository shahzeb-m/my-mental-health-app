const express = require("express");
const router = express.Router();
const Mood = require("../models/mood");
const crypto = require("../cryptoConfig");
const _ = require("lodash");

module.exports = router;

// get all moods for user
router.get("/get-all", async (req, res) => {
  try {
    const all = await Mood.find({ user_id: req.user._id });
    const refined = _.forEach(all, (mood) => {
      _.set(mood, "rating", crypto.decryptData(mood.rating));
      _.set(mood, "comment", crypto.decryptData(mood.comment));
      _.omit(mood.toObject(), "user_id");
    });
    res.send(refined);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// add mood
router.post("/add", async (req, res) => {
  console.log(req.body);

  try {
    const mood = new Mood({
      user_id: req.user._id,
      rating: crypto.encryptData(req.body.mood.rating),
      comment: crypto.encryptData(req.body.mood.comment),
      date: req.body.mood.date,
    });
    const newMood = await mood.save();
    res.status(201).json(newMood);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// delete mood
router.delete("/delete/:id", async (req, res) => {
  const mood = Mood.findById(req.params.id);
  try {
    await mood.deleteOne();
    res.json({ message: "Deleted mood entry" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

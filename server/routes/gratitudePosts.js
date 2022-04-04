const express = require("express");
const router = express.Router();
const GratitudePost = require("../models/gratitudePost");
const crypto = require("../cryptoConfig");
const _ = require("lodash");

module.exports = router;

// get all gratitude posts for user
router.get("/get-all", async (req, res) => {
  try {
    const all = await GratitudePost.find({ user_id: req.user._id });
    const refined = _.forEach(all, (gratitudePost) => {
      _.set(
        gratitudePost,
        "content",
        crypto.decryptData(gratitudePost.content)
      );
    });
    res.send(refined);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// add gratitude post
router.post("/add", async (req, res) => {
  console.log(req.body);

  try {
    const gratitudePost = new GratitudePost({
      user_id: req.user._id,
      content: crypto.encryptData(req.body.gratitudePost.content),
      date: req.body.gratitudePost.date,
    });
    const newPost = await gratitudePost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// delete post
router.delete("/delete/:id", async (req, res) => {
  const gratitudePost = GratitudePost.findById(req.params.id);
  try {
    await gratitudePost.deleteOne();
    res.json({ message: "Deleted gratitude post" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

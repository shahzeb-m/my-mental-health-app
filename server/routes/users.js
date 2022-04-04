const express = require("express");
const router = express.Router();
const User = require("../models/user");
const {
  validateUserSignUp,
  userValidation,
} = require("../middlewares/validation/user");
const passport = require("passport");
require("../passportConfig")(passport);
const crypto = require("../cryptoConfig");

module.exports = router;

router.get("/", (req, res) => {
  res.send(req.user);
});

// create one
router.post("/", validateUserSignUp, userValidation, async (req, res) => {
  const username = crypto.encryptData(req.body.username);
  const isExistingUsername = await User.isUsernameTaken(username);
  if (isExistingUsername)
    return res.json({
      success: false,
      message: "This username is already taken.",
    });

  const name = crypto.encryptData(req.body.name);

  const user = new User({
    name,
    username,
    password: req.body.password,
  });

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// update one
router.patch("/:id", getUser, async (req, res) => {
  if (req.body.name != null) {
    res.user.name = req.body.name;
  }
  if (req.body.username != null) {
    res.user.username = req.body.username;
  }
  try {
    const updatedUser = await res.user.save();
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// update user quote category
router.post("/update-category", async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    await user.updateOne({ quote_category: req.body.category });
    res.json({ message: "Updated quote of the day category." });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// get user quote category
router.get("/get-category", async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const category = user.quote_category || null;
    res.json({ category });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/update-colour", async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    await user.updateOne({ theme_colour: req.body.colour });
    res.json({ message: "Updated theme colour." });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/get-colour", async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const colour = user.theme_colour || "default";
    res.json({ colour });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// delete one
router.delete("/delete", async (req, res) => {
  const user = User.findById(req.user._id);
  try {
    req.logout();
    await user.deleteOne();
    res.json({ message: "Deleted user" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// login
router.post("/login", (req, res, next) => {
  if (!req.body.username) {
    return res.json({ success: false, message: "Username is missing." });
  }
  if (!req.body.password) {
    return res.json({ success: false, message: "Password is missing." });
  }
  passport.authenticate("local", { successRedirect: "/" }, (err, user) => {
    if (err) console.log(err);
    if (typeof user === "string") res.json({ success: false, message: user });
    else {
      req.logIn(user, function (err) {
        if (err) console.log(err);
        res.json({
          success: true,
          message: "Successfully Authenticated",
          data: {
            _id: req.user._id,
            name: crypto.decryptData(req.user.name),
            username: crypto.decryptData(req.user.username),
            quoteCategory: req.user.quote_category || null,
            themeColour: req.user.theme_colour || "default",
          },
        });
        console.log(req.user);
      });
    }
  })(req, res, next);
});

// logout
router.post("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

async function getUser(req, res, next) {
  let user;
  try {
    user = await User.findById(req.params.id);
    if (user == null) {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.user = user;
  next();
}

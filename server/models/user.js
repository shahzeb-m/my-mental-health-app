const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  quote_category: {
    type: String,
    required: false,
  },
  theme_colour: {
    type: String,
    required: false,
  },
});

userSchema.statics.isUsernameTaken = async function (username) {
  try {
    const existingUser = await this.findOne({ username });
    return !!existingUser;
  } catch (err) {
    console.log(err);
    return false;
  }
};

userSchema.pre("save", function (next) {
  if (this.isModified("password")) {
    bcrypt.hash(this.password, 10, (err, hash) => {
      if (err) return next(err);

      this.password = hash;
      next();
    });
  }
});

userSchema.methods.comparePassword = async function (password) {
  if (!password) throw new Error("Password is missing, cannot compare!");

  try {
    return await bcrypt.compare(password, this.password);
  } catch (err) {
    console.log("Error while comparing password", err.message);
  }
};

module.exports = mongoose.model("User", userSchema);

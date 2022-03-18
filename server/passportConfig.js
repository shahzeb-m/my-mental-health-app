const User = require("./models/user");
const bcrypt = require("bcrypt");
const localStrategy = require("passport-local").Strategy;
const _ = require("lodash");
const crypto = require("./cryptoConfig");

module.exports = function (passport) {
  passport.use(
    new localStrategy((username, password, done) => {
      let encryptedUsername = crypto.encryptData(username);
      User.findOne({ username: encryptedUsername }, (err, user) => {
        if (err) console.log(err);
        // if user does not exist
        if (!user)
          return done(null, `User with username: ${username} does not exist`);
        bcrypt.compare(password, user.password, (err, result) => {
          if (err) console.log(err);
          if (result) {
            return done(null, user);
          } else {
            console.log(user);
            return done(null, "Incorrect password");
          }
        });
      });
    })
  );

  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  });
  passport.deserializeUser((id, cb) => {
    User.findById(id, (err, user) => {
      cb(err, _.omit(user.toObject(), "password"));
      console.log("here!");
    });
  });
};

require("dotenv").config();
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const usersRouter = require("./routes/users");
const moodsRouter = require("./routes/moods");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const passport = require("passport");

const PORT = process.env.PORT || 3001;

const app = express();

// Middleware
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: false, // true according to tutorial
  })
);
app.use(cookieParser(process.env.SESSION_SECRET));
app.use(passport.initialize());
app.use(passport.session());
require("./passportConfig")(passport);

// connect to our MongoDB Atlas DataBase
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// make Node serve the files for the built React app
app.use(express.static(path.resolve(__dirname, "../client/build")));

app.use("/api/users", usersRouter);
app.use("/api/mood", moodsRouter);

// handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

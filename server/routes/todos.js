const express = require("express");
const router = express.Router();
const Todo = require("../models/todo");
const crypto = require("../cryptoConfig");
const _ = require("lodash");

module.exports = router;

// get all todos for user
router.get("/get-all", async (req, res) => {
  try {
    const all = await Todo.find({ user_id: req.user._id });
    const refined = _.forEach(all, (todo) => {
      _.set(todo, "task", crypto.decryptData(todo.task));
    });
    res.send(refined);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// add todo
router.post("/add", async (req, res) => {
  try {
    const todo = new Todo({
      user_id: req.user._id,
      task: crypto.encryptData(req.body.todo.task),
      completed: false,
      date: req.body.todo.date,
    });
    const newTodo = await todo.save();
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// delete todo
router.delete("/delete/:id", async (req, res) => {
  const todo = Todo.findById(req.params.id);
  try {
    await todo.deleteOne();
    res.json({ message: "Deleted ToDo" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// update todo
router.patch("/update/:id", async (req, res) => {
  const todo = Todo.findById(req.params.id);
  try {
    await todo.updateOne({ completed: req.body.completed });
    res.json({ message: "Updated To-Do" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

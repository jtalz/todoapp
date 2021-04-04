var Task = require("../models/tasks");

const removeTask = async (req, res, next) => {
  try {
    const tasks = await Task.findByIdAndDelete(req.query.id).then((e) =>
      Task.find({})
    );
    res.json(tasks);
  } catch (e) {
    res.json(e)
  }
};

const addTask = async (req, res, next) => {
  try {
    var newTask = new Task({
      description: req.query.desc,
      completed: false,
    });
    const tasks = await newTask.save().then((e) => Task.find({}));
    res.json(tasks);
  } catch (e) {
    res.json(e)
  }
};

const completeTask = async (req, res, next) => {
  try {
    const tasks = await Task.findById(req.query.id)
      .then((task) =>
        Task.findByIdAndUpdate(task._id, { completed: !task.completed })
      )
      .then((e) => Task.find({}));
    res.json(tasks);
  } catch (e) {
    res.json(e)
  }
};

module.exports = { removeTask, addTask, completeTask };

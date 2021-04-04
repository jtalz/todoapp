var Task = require("../models/tasks");

const getTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find({});
    res.json(tasks)
  }catch(e){
    res.error(e)
  }
};

module.exports = { getTasks }

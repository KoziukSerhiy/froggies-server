const { readDataFromDB } = require("../core/utils");

exports.getAllTasks = (req, res, next) => {
  res.send({
    data: readDataFromDB("tasks"),
  });
};

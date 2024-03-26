const { readDataFromDB } = require("../core/utils");

exports.getAllUsers = (req, res, next) => {
  res.send({
    data: readDataFromDB("users"),
  });
};

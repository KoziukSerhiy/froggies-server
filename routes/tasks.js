const jsonServer = require("json-server");
const { readDataFromDB } = require("../core/utils");

const app = jsonServer.create();

app.get("/tasks", (req, res, next) => {
  res.send({
    data: readDataFromDB("tasks"),
  });
});

module.exports = app;

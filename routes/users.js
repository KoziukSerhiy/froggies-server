const jsonServer = require("json-server");
const { readDataFromDB } = require("../core/utils");

const app = jsonServer.create();

app.get("/users", (req, res, next) => {
  res.send({
    data: readDataFromDB("users"),
  });
});

module.exports = app;

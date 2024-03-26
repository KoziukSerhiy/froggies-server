const jsonServer = require("json-server");
const usersController = require("../controllers/usersController");

const app = jsonServer.create();

app.get("/", usersController.getAllUsers);

module.exports = app;

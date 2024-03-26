const jsonServer = require("json-server");
const tasksController = require("../controllers/tasksController");

const app = jsonServer.create();

app.get("/", tasksController.getAllTasks);

module.exports = app;

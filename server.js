const jsonServer = require("json-server");
const { DBFile } = require("./core/constants");

const users = require("./routes/users");
const tasks = require("./routes/tasks");

const server = jsonServer.create();
const router = jsonServer.router(DBFile);
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 3200;

server.use(middlewares);
server.use(jsonServer.bodyParser);

// routes
server.use(users);
server.use(tasks);

server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running: http://localhost:${port}/`);
});

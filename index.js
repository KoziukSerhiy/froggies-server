const jsonServer = require("json-server");
const { DBFile } = require("./core/constants");

const server = jsonServer.create();
const router = jsonServer.router(DBFile);
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 3200;

server.use(middlewares);
server.use(jsonServer.bodyParser);

// routes
server.use("/users", require("./routes/usersRoute"));
server.use("/tasks", require("./routes/tasksRoute"));

server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running: http://localhost:${port}/`);
});

const jsonServer = require("json-server"); // importing json-server library from npm install json server
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080; //  choose port from here like 8080, 3001

server.use(middlewares);
server.use(router);

server.listen(port);


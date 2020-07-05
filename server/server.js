const jsonServer = require('json-server');
const todoData = require('./mock-data');

const server = jsonServer.create();
const router = jsonServer.router(todoData);

server.use(router);
server.listen(3001, () => {
    console.log('JSON Server is running');
});

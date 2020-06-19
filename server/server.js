const jsonServer = require('json-server')
const todos = require('./mock-data');

const server = jsonServer.create()
const router = jsonServer.router(todos)
const middlewares = jsonServer.defaults()

console.log(todos);


server.use(middlewares)
server.use(router)
server.listen(3001, () => {
  console.log('JSON Server is running')
})

const jsonServer = require('json-server')
const todos = require('./mock-data');

const server = jsonServer.create()
const router = jsonServer.router(todos)
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(jsonServer.rewriter({
  '/api/todos': '/todos'
}));

server.post('/todo', (req, res) => {
  if (req.method === 'POST') {

    console.log("AAA", req.body);
    
    
    let todoId = req.body['id'];
    console.log('ENTER POST', todoId);

    if (todoId !== null && todoId >= 0) {
      let result = todos.find(item => {
        return item.id === todoId;
      })

      if (result) {
        let {id, ...todo} = result;
        res.status(200).jsonp(todo);
      } else {
        res.status(400).jsonp({
          error: "Bad userId"
        });
      }
    } else {
      res.status(400).jsonp({
        error: "No valid userId"
      });
    }
  }
});

server.use(router)
server.listen(3001, () => {
  console.log('JSON Server is running')
})

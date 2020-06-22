const jsonServer = require('json-server')
const todoData = require('./mock-data');

const server = jsonServer.create()
const router = jsonServer.router(todoData)
const middlewares = jsonServer.defaults()

server.use(jsonServer.bodyParser);
server.use(middlewares)
server.use(jsonServer.rewriter({
  '/api/todos': '/todos'
}));

server.post('/todo', (req, res) => {
  if (req.method === 'POST') {    
  
    let genId = Math.random().toString(36).substr(2, 5);

    if (req.body) {
      const newTodo = {
        id: genId,
        name: req.body['name'],
        date: req.body['date'],
        statusDone: false,
      }

      let result = !todoData.todos.find(item => item.id === newTodo.id);
      
      if (result) {
        let {id, ...todo} = result;        
        res.status(200).jsonp(todo);
      } else {
        res.status(400).jsonp({
          error: "Bad TODO id"
        });
      }
    } else {
      res.status(400).jsonp({
        error: "No valid TODO id"
      });
    }
  }
});

server.use(router)
server.listen(3001, () => {
  console.log('JSON Server is running')
})

const generateData = () => {
  const todos = []

  for (let i = 0; i < 4; i++) {
    todos.push({ 
      id: Math.random().toString(36).substr(2, 5), 
      name: `My todo task number: ${i}`, 
      date: Date.now(),
      statusDone: false
    })
  }
  return todos 
}

module.exports = {
  todos: generateData(),
}

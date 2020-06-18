const generateData = () => {
  const db = { todos: []}

  for (let i = 0; i < 3; i++) {
    db.todos.push({ id: i, name: `user${i}` })
  }
  return db
}

module.exports = {
  generateData
}

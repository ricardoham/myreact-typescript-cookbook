const generateData = () => {
  const db = { todos: []}

  for (let i = 0; i < 3; i++) {
    db.todos.push({ id: i, name: `task number: ${i}` })
  }
  return db
}

module.exports = {
  todos: generateData(),
}

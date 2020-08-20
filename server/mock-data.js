const faker = require('faker');

const generateTodos = () => {
  const todos = [];

  for (let i = 0; i < 10; i++) {
    todos.push({
      id: Math.random().toString(36).substr(2, 5),
      name: `My todo task number: ${i}`,
      date: Date.now(),
      statusDone: false,
    });
  }
  return todos;
};

const generateUsers = () => {
  const users = [];

  for (let i = 0; i < 10; i++) {
    users.push({
      id: Math.random().toString(36).substr(2, 5),
      name: faker.name.firstName(),
      surName: faker.name.lastName(),
      age: Math.floor(Math.random() * 31) + 20,
    });
  }

  return users;
};

module.exports = {
  todos: generateTodos(),
  users: generateUsers(),
};

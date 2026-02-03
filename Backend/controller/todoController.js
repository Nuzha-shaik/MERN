let todos = [
  { id: 1, task: "Reading", completed: false },
  { id: 2, task: "Reading", completed: false },
  { id: 3, task: "Reading", completed: false }
];

const getTodo = (req, res) => {
  res.json(todos);
};

const createTodo = (req, res) => {
  const newTodo = {
    id: todos.length ? todos[todos.length - 1].id + 1 : 1,
    task: req.body.task,
    completed: false
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
};

const updateTodo = (req, res) => {
  const id = Number(req.params.id);

  const todo = todos.find(t => t.id === id);
  if (!todo) {
    return res.status(404).json({ message: "Task not found" });
  }

  // idempotent update
  if (req.body.task !== undefined) {
    todo.task = req.body.task;
  }
  if (req.body.completed !== undefined) {
    todo.completed = req.body.completed;
  }

  res.json(todo);
};

const deleteTodo = (req, res) => {
  const id = Number(req.params.id);

  const index = todos.findIndex(t => t.id === id);
  if (index === -1) {
    return res.status(404).json({ message: "Task already deleted or not found" });
  }

  todos.splice(index, 1);
  res.json({ message: "Task Deleted Successfully" });
};

module.exports = {
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo
};

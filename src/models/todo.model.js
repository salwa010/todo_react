export const createTodo = (title, description) => ({
  id: Date.now(),
  title,
  description,
  completed: false,
  createdAt: new Date()
});

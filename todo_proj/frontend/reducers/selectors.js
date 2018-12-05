export const allTodos = ({todos}) => {
  const keys = Object.keys(todos);
  return keys.map(i => (todos[i]))
};


// export default allTodos;
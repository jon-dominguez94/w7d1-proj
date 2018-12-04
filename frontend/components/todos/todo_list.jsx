import React from 'react';

class TodoList extends React.Component {
  render() {
    const { todos, receiveTodo } = this.props;
    const todoTitles = todos.map(todo => <li>{todo.title}</li>);
    return (
      <ul>
        {todoTitles}
      </ul>
    );
  }
}

export default TodoList;
import React from 'react';
import TodoListItem from './todo_list_item';

class TodoList extends React.Component {
  render() {
    const { todos, receiveTodo } = this.props;
    const todoTitles = todos.map(todo => (
        <TodoListItem key={todo.id} todo={todo} receiveTodo={ receiveTodo } />
      )
    );
    return (
      <ul>
        {todoTitles}
      </ul>
    );
  }
}

export default TodoList;
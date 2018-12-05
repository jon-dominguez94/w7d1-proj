import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
  render() {
    const { todos, receiveTodo } = this.props;
    const todoTitles = todos.map(todo => (
        <TodoListItem key={todo.id} todo={todo} receiveTodo={ receiveTodo } />
      )
    );
    return (
      <>
        <ul className="todo-list">
          {todoTitles}
        </ul>
        <TodoForm receiveTodo={receiveTodo} />
      </>
    );
  }
}

export default TodoList;
import React from 'react';
import uniqueId from '../../util/unique_id';
import merge from 'lodash/merge';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      done: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(prop) {
    return e => this.setState({[prop]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const todo = merge({}, this.state, {id: uniqueId() });
    this.props.receiveTodo(todo);
    this.setState({
      title: "",
      body: ""
    });
  }

  render() {
    return (
      <form className="todo-form" onSubmit={this.handleSubmit}>
        <label>Title:
          <input 
            type="text" 
            className="input" 
            value={this.state.title}
            placeholder="todo title"
            onChange={this.update('title')}
            required
          />
        </label>
        <br></br>
        <label>Body:
          <textarea 
            className="input" 
            cols="30" 
            rows="10"
            value={this.state.body}
            placeholder="todo body"
            onChange={this.update('body')}
            required
          >
          </textarea>
          <button className="create-todo-btn">Create todo!</button>
        </label>
        
      </form>
    );
  }
}

export default TodoForm;
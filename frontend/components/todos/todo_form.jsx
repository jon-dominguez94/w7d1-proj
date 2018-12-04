import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      done: false
    };
  }

  render() {
    return (
      <form className="todo-form">
        <label>Title:
          <input type="text" value={this.state.title}/>
        </label>
        <label>Body:
          <input type="text" value={this.state.body}/>
        </label>
        <input type="submit" name="Submit" id=""/>
      </form>
    );
  }
}

export default TodoForm;
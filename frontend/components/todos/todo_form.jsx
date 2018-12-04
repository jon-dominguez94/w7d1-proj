import React from 'react';
import uniqueId from '../../util/unique_id';

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
          <input type="text" defaultValue={this.state.title}/>
        </label>
        <label>Body:
          <input type="text" defaultValue={this.state.body}/>
        </label>
        <input type="submit" name="" id="" value="Create Todo"/>
      </form>
    );
  }
}

export default TodoForm;
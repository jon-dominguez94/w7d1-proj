import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { receiveTodos, receiveTodo } from './actions/todo_actions';

const App = () => {
  return (
    <h1>Todos App</h1>
  );
};

const store = configureStore();
window.store = store;
window.receiveTodo = receiveTodo;
window.receiveTodos = receiveTodos;

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("content");
  ReactDOM.render(<App/>, root);
});
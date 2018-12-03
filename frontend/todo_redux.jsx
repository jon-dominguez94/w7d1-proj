import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

const App = () => {
  return (
    <h1>Todos App</h1>
  );
};

const store = configureStore();
window.store = store;

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("content");
  ReactDOM.render(<App/>, root);
});
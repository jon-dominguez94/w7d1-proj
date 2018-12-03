import React from 'react';
import ReactDOM from 'react-dom';
const App = () => {
  return (
    <h1>Todos App</h1>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("content");
  ReactDOM.render(<App/>, root);
});
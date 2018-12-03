import React from 'react';
import ReactDOM from 'react-dom';
const App = () => {
  return (
    <h1>React is working!</h1>
  );
};


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("content");
  ReactDOM.render(<App/>, root);
});
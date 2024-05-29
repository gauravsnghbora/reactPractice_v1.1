import React from "react";
import "./app.css";
import TodoList from "./todo/todoList";

const App = () => (
  <div className="App">
    <TodoList />
  </div>
);

// todos={[{ text: "hello" }]}
export default App;

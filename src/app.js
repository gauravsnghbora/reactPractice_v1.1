import React from "react";
import TodoList from "./todo/todoList";
import { styled } from "styled-components";

const AppContainer = styled.div`
  margin: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  color: #222222;
`;
const App = () => (
  <AppContainer>
    <TodoList />
  </AppContainer>
);

// todos={[{ text: "hello" }]}
export default App;

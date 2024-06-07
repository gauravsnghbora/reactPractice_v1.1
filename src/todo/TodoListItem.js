import React from "react";
import { styled } from "styled-components";

const TodoItemContainer = styled.div`
  background: #fff;
  border-radius: 8px;

  margin-top: 8px;
  padding: 16px;
  position: relative;
  box-shadow: 0 4px 8px grey;
`;

export const getBorderStyleForDate = (startingDate, currentDate) =>
  startingDate > new Date(currentDate - 8640000 * 5) ? "none" : "2px solid red";

const TodoItemContainerWarning = styled(TodoItemContainer)`
  border-bottom: ${(props) => getBorderStyleForDate()};
`;

const ButtonContainer = styled.div`
  position: absolute;
  right: 12px;
  bottom: 12px;
`;

const button = styled.button`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  display: inline-block;
`;

const CompletedButton = styled(button)`
  background-color: #22ee22;
`;
const RemoveButton = styled(button)`
  background-color: #ee2222;
  margin-left: 8px;
`;

const TodoListItem = ({ todo, onRemovePressed, onMarkAsCompletePressed }) => {
  const Container = todo.isCompleted
    ? TodoItemContainer
    : TodoItemContainerWarning;
  return (
    <Container createdAt={todo.createdAt}>
      <h2>{todo.text}</h2>
      <p>
        Created at: &nbsp;
        {new Date(todo.createdAt).toLocaleDateString()}
      </p>
      <ButtonContainer>
        {todo.isCompleted ? null : (
          <CompletedButton onClick={() => onMarkAsCompletePressed(todo.id)}>
            Mark as complete
          </CompletedButton>
        )}
        <RemoveButton onClick={() => onRemovePressed(todo.id)}>
          Remove
        </RemoveButton>
      </ButtonContainer>
    </Container>
  );
};

export default TodoListItem;

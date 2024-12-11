import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import TodoItem from "../TodoItem";
import { TodoColumnContainer, TodoColumnTitle, AddButton } from "./TodoColumn.styles";

const TodoColumn = ({
  title,
  todos,
  addTodo,
  markAsCompleted,
  updateTodo,
  provided,
}) => {
  return (
    <TodoColumnContainer ref={provided.innerRef} {...provided.droppableProps}>
      <TodoColumnTitle>{title}</TodoColumnTitle>
      {todos.map((todo, index) => (
        <Draggable key={todo.id} draggableId={todo.id.toString()} index={index}>
          {(provided) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              markAsCompleted={markAsCompleted}
              updateTodo={updateTodo}
              provided={provided}
            />
          )}
        </Draggable>
      ))}
      <AddButton onClick={addTodo}>+</AddButton>
      {provided.placeholder}
    </TodoColumnContainer>
  );
};

export default TodoColumn;

import React from "react";
import { TodoItemContainer, TodoText, TodoCircle } from "./TodoItem.styles";

const TodoItem = ({ todo, markAsCompleted, updateTodo, provided }) => {
  return (
    <TodoItemContainer ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
      <TodoCircle onClick={() => markAsCompleted(todo.id)} completed={todo.status === "completed"} />
      <TodoText onClick={() => updateTodo(todo)}>{todo.text || "Nova Tarefa"}</TodoText>
    </TodoItemContainer>
  );
};

export default TodoItem;

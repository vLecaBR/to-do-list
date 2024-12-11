// src/draganddrop.js
import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import TodoColumn from './components/TodoColumn/TodoColumn';

const DragAndDrop = ({ todos, setTodos, addTodo, markAsCompleted, updateTodo }) => {

  const handleDragEnd = (result) => {
    const { destination, source } = result;

    if (!destination) {
      return;
    }

    // Se a posição de origem for a mesma da posição de destino, não faz nada
    if (destination.index === source.index && destination.droppableId === source.droppableId) {
      return;
    }

    const updatedTodos = [...todos];
    const [removed] = updatedTodos.splice(source.index, 1);
    removed.status = destination.droppableId; // Atualiza o status da tarefa ao mover entre as colunas

    updatedTodos.splice(destination.index, 0, removed);
    setTodos(updatedTodos); // Atualiza o estado com os novos valores
  };

  const columns = {
    pending: todos.filter(todo => todo.status === "pending"),
    inProgress: todos.filter(todo => todo.status === "in-progress"),
    completed: todos.filter(todo => todo.status === "completed"),
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
        <Droppable droppableId="pending">
          {(provided) => (
            <TodoColumn
              title="Pendente"
              todos={columns.pending}
              addTodo={() => addTodo("pending")}
              markAsCompleted={markAsCompleted}
              updateTodo={updateTodo}
              provided={provided}
            />
          )}
        </Droppable>
        <Droppable droppableId="in-progress">
          {(provided) => (
            <TodoColumn
              title="Em andamento"
              todos={columns.inProgress}
              addTodo={() => addTodo("in-progress")}
              markAsCompleted={markAsCompleted}
              updateTodo={updateTodo}
              provided={provided}
            />
          )}
        </Droppable>
        <Droppable droppableId="completed">
          {(provided) => (
            <TodoColumn
              title="Concluída"
              todos={columns.completed}
              addTodo={() => addTodo("completed")}
              markAsCompleted={markAsCompleted}
              updateTodo={updateTodo}
              provided={provided}
            />
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
};

export default DragAndDrop;

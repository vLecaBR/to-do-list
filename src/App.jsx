// src/App.js
import React, { useState, useEffect } from 'react';
import TodoColumn from './components/TodoColumn/TodoColumn';
import GlobalStyle from './globalStyles';
import { DragDropContext } from 'react-beautiful-dnd';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      status: 'pending', // Inicialmente todas as tarefas começam como "pendente"
    };
    setTodos([...todos, newTodo]);
  };

  const updateStatus = (id, newStatus) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, status: newStatus } : todo));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const onDragEnd = (result) => {
    const { destination, source } = result;

    if (!destination) return;

    const newTodos = Array.from(todos);
    const movedTodo = newTodos[source.index];
    movedTodo.status = destination.droppableId;
    newTodos.splice(source.index, 1);
    newTodos.splice(destination.index, 0, movedTodo);

    setTodos(newTodos);
  };

  const columns = {
    pending: todos.filter(todo => todo.status === 'pending'),
    inProgress: todos.filter(todo => todo.status === 'in-progress'),
    completed: todos.filter(todo => todo.status === 'completed'),
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <GlobalStyle />
      <div style={{ display: 'flex', gap: '20px' }}>
        <TodoColumn
          title="Pendente"
          todos={columns.pending}
          columnId="pending"
          updateStatus={updateStatus}
          deleteTodo={deleteTodo}
        />
        <TodoColumn
          title="Em andamento"
          todos={columns.inProgress}
          columnId="inProgress"
          updateStatus={updateStatus}
          deleteTodo={deleteTodo}
        />
        <TodoColumn
          title="Concluída"
          todos={columns.completed}
          columnId="completed"
          updateStatus={updateStatus}
          deleteTodo={deleteTodo}
        />
      </div>
    </DragDropContext>
  );
}

export default App;

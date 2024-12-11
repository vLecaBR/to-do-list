// src/App.jsx
import React, { useState } from 'react';
import TodoColumn from './components/TodoColumn';
import GlobalStyle from './globalStyles';

function App() {
  const [todos, setTodos] = useState([]);

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

  // Organiza as tarefas em três grupos (pendente, em andamento, concluída)
  const columns = {
    pending: todos.filter(todo => todo.status === 'pending'),
    inProgress: todos.filter(todo => todo.status === 'in-progress'),
    completed: todos.filter(todo => todo.status === 'completed'),
  };

  return (
    <>
      <GlobalStyle />
      <div style={{ display: 'flex', gap: '20px' }}>
        <TodoColumn
          title="Pendente"
          todos={columns.pending}
          updateStatus={updateStatus}
          deleteTodo={deleteTodo}
        />
        <TodoColumn
          title="Em andamento"
          todos={columns.inProgress}
          updateStatus={updateStatus}
          deleteTodo={deleteTodo}
        />
        <TodoColumn
          title="Concluída"
          todos={columns.completed}
          updateStatus={updateStatus}
          deleteTodo={deleteTodo}
        />
      </div>
    </>
  );
}

export default App;

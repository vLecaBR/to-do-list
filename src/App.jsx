// src/App.js
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TodoColumn from './components/TodoColumn';
import GlobalStyle from './globalStyles';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      const newTodoItem = {
        id: Date.now(),
        text: newTodo,
        status: 'pending', // Inicialmente todas as tarefas começam como "pendentes"
      };
      setTodos([...todos, newTodoItem]);
      setNewTodo("");
    }
  };

  const updateStatus = (id, status) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, status } : todo));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <GlobalStyle />
      <Header newTodo={newTodo} setNewTodo={setNewTodo} addTodo={addTodo} />
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', height: '100%' }}>
        <TodoColumn title="Pendente" todos={todos.filter(todo => todo.status === 'pending')} updateStatus={updateStatus} deleteTodo={deleteTodo} />
        <TodoColumn title="Em Progresso" todos={todos.filter(todo => todo.status === 'in-progress')} updateStatus={updateStatus} deleteTodo={deleteTodo} />
        <TodoColumn title="Concluídas" todos={todos.filter(todo => todo.status === 'completed')} updateStatus={updateStatus} deleteTodo={deleteTodo} />
      </div>
    </div>
  );
}

export default App;

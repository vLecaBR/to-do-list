// src/App.jsx
import React, { useState } from 'react';
import TodoColumn from './components/TodoColumn';
import { GlobalStyles } from './globalStyles';
import { handleDragStart, handleDrop, handleDragOver } from './utils/dragAndDrop';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todoCounter, setTodoCounter] = useState(1);

  const addTodo = (status) => {
    const newTodo = {
      id: todoCounter,
      text: `Tarefa ${todoCounter}`,
      status,
      startDate: '',
      endDate: '',
    };
    setTodos([...todos, newTodo]);
    setTodoCounter(todoCounter + 1);
  };

  const updateStatus = (id, newStatus) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, status: newStatus } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <>
      <GlobalStyles />
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
        <TodoColumn
          title="Por Fazer"
          todos={todos.filter((todo) => todo.status === 'todo')}
          addTodo={() => addTodo('todo')}
          updateStatus={updateStatus}
          deleteTodo={deleteTodo}
          handleDragStart={handleDragStart}
          handleDrop={(e) => handleDrop(e, updateStatus)}
          handleDragOver={handleDragOver}
        />
        <TodoColumn
          title="Em Andamento"
          todos={todos.filter((todo) => todo.status === 'in-progress')}
          addTodo={() => addTodo('in-progress')}
          updateStatus={updateStatus}
          deleteTodo={deleteTodo}
          handleDragStart={handleDragStart}
          handleDrop={(e) => handleDrop(e, updateStatus)}
          handleDragOver={handleDragOver}
        />
        <TodoColumn
          title="Concluído"
          todos={todos.filter((todo) => todo.status === 'completed')}
          addTodo={() => addTodo('completed')}
          updateStatus={updateStatus}
          deleteTodo={deleteTodo}
          handleDragStart={handleDragStart}
          handleDrop={(e) => handleDrop(e, updateStatus)}
          handleDragOver={handleDragOver}
        />
      </div>
    </>
  );
};

export default App;

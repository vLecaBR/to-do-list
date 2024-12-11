// src/App.jsx
import React, { useState } from 'react';
import TodoColumn from './components/TodoColumn';
import { GlobalStyles } from './globalStyles';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todoCounter, setTodoCounter] = useState(1);

  // Função para adicionar uma nova tarefa
  const addTodo = (status) => {
    const newTodo = {
      id: todoCounter,
      text: `Tarefa ${todoCounter}`,
      status: status,
      startDate: '',
      endDate: '',
    };
    setTodos([...todos, newTodo]);
    setTodoCounter(todoCounter + 1);
  };

  // Função para editar uma tarefa
  const editTodo = (id, updatedTask) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, ...updatedTask } : todo
    );
    setTodos(updatedTodos);
  };

  // Função para atualizar o status de uma tarefa
  const updateStatus = (id, newStatus) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, status: newStatus } : todo
    );
    setTodos(updatedTodos);
  };

  // Função para deletar uma tarefa
  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <GlobalStyles />
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
        <TodoColumn
          title="Por Fazer"
          status="todo"
          todos={todos.filter((todo) => todo.status === 'todo')}
          addTodo={() => addTodo('todo')}
          editTodo={editTodo}
          updateStatus={updateStatus}
          deleteTodo={deleteTodo}
        />
        <TodoColumn
          title="Em Andamento"
          status="in-progress"
          todos={todos.filter((todo) => todo.status === 'in-progress')}
          addTodo={() => addTodo('in-progress')}
          editTodo={editTodo}
          updateStatus={updateStatus}
          deleteTodo={deleteTodo}
        />
        <TodoColumn
          title="Concluído"
          status="completed"
          todos={todos.filter((todo) => todo.status === 'completed')}
          addTodo={() => addTodo('completed')}
          editTodo={editTodo}
          updateStatus={updateStatus}
          deleteTodo={deleteTodo}
        />
      </div>
    </DndProvider>
  );
};

export default App;

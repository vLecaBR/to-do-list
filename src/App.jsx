import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import TodoColumn from "./components/TodoColumn";
import Modal from "./components/Modal";
import GlobalStyle from "./globalStyles";

function App() {
  const [todos, setTodos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);

  const addTodo = (column) => {
    const newTodo = {
      id: Date.now(),
      text: "",
      status: column,
      startDate: null,
      endDate: null,
    };
    setTodos([...todos, newTodo]);
  };

  const updateTodo = (id, updatedTodo) => {
    setTodos(todos.map(todo => (todo.id === id ? updatedTodo : todo)));
    setShowModal(false);
  };

  const markAsCompleted = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, status: "completed" } : todo
    ));
  };

  const handleDragEnd = (result) => {
    const { destination, source } = result;
    if (!destination) return;

    const updatedTodos = [...todos];
    const [removed] = updatedTodos.splice(source.index, 1);
    removed.status = destination.droppableId;
    updatedTodos.splice(destination.index, 0, removed);

    setTodos(updatedTodos);
  };

  const columns = {
    pending: todos.filter(todo => todo.status === "pending"),
    inProgress: todos.filter(todo => todo.status === "in-progress"),
    completed: todos.filter(todo => todo.status === "completed"),
  };

  return (
    <>
      <GlobalStyle />
      <DragDropContext onDragEnd={handleDragEnd}>
        <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
          <Droppable droppableId="pending">
            {(provided) => (
              <TodoColumn
                title="Pendente"
                todos={columns.pending}
                addTodo={() => addTodo("pending")}
                markAsCompleted={markAsCompleted}
                updateTodo={setCurrentTodo}
                provided={provided}
              />
            )}
          </Droppable>
          <Droppable droppableId="inProgress">
            {(provided) => (
              <TodoColumn
                title="Em andamento"
                todos={columns.inProgress}
                addTodo={() => addTodo("in-progress")}
                markAsCompleted={markAsCompleted}
                updateTodo={setCurrentTodo}
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
                updateTodo={setCurrentTodo}
                provided={provided}
              />
            )}
          </Droppable>
        </div>
      </DragDropContext>

      {showModal && (
        <Modal
          todo={currentTodo}
          updateTodo={updateTodo}
          setShowModal={setShowModal}
        />
      )}
    </>
  );
}

export default App;

import React, { useState } from "react";

const Modal = ({ todo, updateTodo, setShowModal }) => {
  const [updatedTodo, setUpdatedTodo] = useState({ ...todo });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedTodo({ ...updatedTodo, [name]: value });
  };

  const handleSave = () => {
    updateTodo(updatedTodo.id, updatedTodo);
  };

  return (
    <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(0, 0, 0, 0.5)" }}>
      <div style={{ background: "#fff", padding: "20px", margin: "50px auto", width: "300px" }}>
        <h3>Editar Tarefa</h3>
        <input
          type="text"
          name="text"
          value={updatedTodo.text}
          onChange={handleChange}
          placeholder="Nome da tarefa"
        />
        <select name="status" value={updatedTodo.status} onChange={handleChange}>
          <option value="pending">Pendente</option>
          <option value="in-progress">Em andamento</option>
          <option value="completed">Concluída</option>
        </select>
        <input
          type="date"
          name="startDate"
          value={updatedTodo.startDate || ""}
          onChange={handleChange}
        />
        <input
          type="date"
          name="endDate"
          value={updatedTodo.endDate || ""}
          onChange={handleChange}
        />
        <button onClick={handleSave}>Salvar</button>
        <button onClick={() => setShowModal(false)}>Fechar</button>
      </div>
    </div>
  );
};

export default Modal;

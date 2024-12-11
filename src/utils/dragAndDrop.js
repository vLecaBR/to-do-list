// src/utils/dragAndDrop.js
export const handleDragStart = (e, id) => {
    e.dataTransfer.setData('taskId', id);
  };
  
  export const handleDrop = (e, updateStatus) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData('taskId');
    updateStatus(taskId, e.target.dataset.status); // Atualiza o status baseado na coluna
  };
  
  export const handleDragOver = (e) => {
    e.preventDefault();
  };
  
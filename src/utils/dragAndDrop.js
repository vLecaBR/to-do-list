// src/utils/dragAndDrop.js
import { useDrag, useDrop } from 'react-dnd';

// Definir o tipo de item que será arrastado
const ITEM_TYPE = 'TODO_ITEM';

// Hook para tornar o item arrastável
export const useDragItem = (todo) => {
  const [, drag] = useDrag(() => ({
    type: ITEM_TYPE,
    item: { id: todo.id, status: todo.status },
  }));
  return drag;
};

// Hook para tornar a área da coluna receptiva ao item
export const useDropColumn = (columnStatus, updateStatus) => {
    const [, drop] = useDrop({
      accept: 'TODO',
      drop: (item) => {
        updateStatus(item.id, columnStatus); // Atualiza o status da tarefa
      },
    });
  
    return drop;
  };
import React, { useState } from "react";
import { Container, Input, Button } from "./Checklist.styles";

const Checklist = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  const addItem = () => {
    if (newItem.trim()) {
      setItems([...items, { text: newItem, checked: false }]);
      setNewItem("");
    }
  };

  const toggleCheck = (index) => {
    setItems(
      items.map((item, i) =>
        i === index ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <Container>
      <h3>Checklist</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => toggleCheck(index)}
            />
            {item.text}
          </li>
        ))}
      </ul>
      <Input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Novo item"
      />
      <Button onClick={addItem}>Adicionar</Button>
    </Container>
  );
};

export default Checklist;

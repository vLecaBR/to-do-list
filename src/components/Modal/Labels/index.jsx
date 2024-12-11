import React, { useState } from "react";
import { Container, Input, Button } from "./Labels.styles";

const Labels = () => {
  const [labels, setLabels] = useState(["Urgente", "Em Progresso"]);
  const [newLabel, setNewLabel] = useState("");

  const addLabel = () => {
    if (newLabel.trim()) {
      setLabels([...labels, newLabel]);
      setNewLabel("");
    }
  };

  return (
    <Container>
      <h3>Rótulos</h3>
      <ul>
        {labels.map((label, index) => (
          <li key={index}>{label}</li>
        ))}
      </ul>
      <Input
        type="text"
        value={newLabel}
        onChange={(e) => setNewLabel(e.target.value)}
        placeholder="Novo rótulo"
      />
      <Button onClick={addLabel}>Adicionar</Button>
    </Container>
  );
};

export default Labels;

import { useState } from "react";

function TaskForm({ onAddTask }) {
  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [statut, setStatut] = useState("A faire");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: Date.now(),
      titre,
      description,
      statut,
    };

    onAddTask(newTask);

    setTitre("");
    setDescription("");
    setStatut("A faire");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      
      <div>
        <label>Titre :</label><br />
        <input
          type="text"
          value={titre}
          onChange={(e) => setTitre(e.target.value)}
        />
      </div>

      <div>
        <label>Description :</label><br />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="4"
          cols="30"
        />
      </div>

      <div>
        <label>Statut :</label><br />
        <select value={statut} onChange={(e) => setStatut(e.target.value)}>
          <option>A faire</option>
          <option>En cours</option>
          <option>Termine</option>
        </select>
      </div>

      
      <div style={{ marginTop: "10px" }}>
        <button type="submit">Ajouter</button>
      </div>

    </form>
  );
}

export default TaskForm;
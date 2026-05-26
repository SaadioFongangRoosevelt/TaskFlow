import { useState } from "react";
import "../styles/TaskForm.css";

function TaskForm({ onAddTask }) {
  const [open, setOpen] = useState(false);
  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");
  const [statut, setStatut] = useState("A faire");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!titre.trim()) return;

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
    setOpen(false);
  };

  return (
    <div>
      {!open ? (
        <button className="btn-toggle" onClick={() => setOpen(true)}>
          + Nouvelle tâche
        </button>
      ) : (
        <div className="task-form">
          <p className="task-form-title">Nouvelle tâche</p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Titre</label>
              <input
                type="text"
                value={titre}
                onChange={(e) => setTitre(e.target.value)}
                placeholder="Ex : Conception de l'ontologie"
                required
              />
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Décrivez la tâche..."
                rows={3}
              />
            </div>

            <div className="form-group">
              <label>Statut</label>
              <select value={statut} onChange={(e) => setStatut(e.target.value)}>
                <option value="A faire">À faire</option>
                <option value="En cours">En cours</option>
                <option value="Termine">Terminé</option>
              </select>
            </div>

            <div className="form-actions">
              <button type="submit" className="btn-primary">Ajouter</button>
              <button type="button" className="btn-secondary" onClick={() => setOpen(false)}>
                Annuler
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default TaskForm;
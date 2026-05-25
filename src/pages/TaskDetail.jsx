import { useParams } from "react-router-dom";

function TaskDetail() {
  const { id } = useParams();

  const tasks = JSON.parse(localStorage.getItem("taskflow_data")) || [];

  const task = tasks.find((t) => t.id === Number(id));

  if (!task) {
    return <p>Tâche non trouvée</p>;
  }

  return (
    <div>
      <h2>Détail de la tâche</h2>
      <h3>{task.titre}</h3>
      <p>{task.description}</p>
      <p><strong>Statut :</strong> {task.statut}</p>
    </div>
  );
}

export default TaskDetail;
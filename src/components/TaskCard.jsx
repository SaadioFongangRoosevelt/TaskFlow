import { Link } from "react-router-dom";

function TaskCard({ task }) {
  return (
    <Link to={`/task/${task.id}`} style={{ textDecoration: "none", color: "black" }}>
      <div style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
        <h3>{task.titre}</h3>
        <p>{task.description}</p>
        <p><strong>Statut :</strong> {task.statut}</p>
      </div>
    </Link>
  );
}

export default TaskCard;
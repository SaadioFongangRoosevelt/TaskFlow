import { Link } from "react-router-dom";
import "../styles/TaskCard.css";

const STATUS_MAP = {
  'A faire':  { label: 'À faire',  className: 'todo' },
  'En cours': { label: 'En cours', className: 'inprogress' },
  'Termine':  { label: 'Terminé',  className: 'done' },
};

function TaskCard({ task }) {
  const status = STATUS_MAP[task.statut] || STATUS_MAP['A faire'];

  return (
    <Link to={`/task/${task.id}`} className={`task-card ${status.className}`}>
      <div className="task-card-header">
        <h3>{task.titre}</h3>
        <span className={`task-badge ${status.className}`}>
          <span className="task-badge-dot" />
          {status.label}
        </span>
      </div>
      <p>{task.description}</p>
    </Link>
  );
}

export default TaskCard;
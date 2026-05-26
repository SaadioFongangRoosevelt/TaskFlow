import { useParams, Link } from "react-router-dom";
import "../styles/TaskDetail.css";

const STATUS_MAP = {
  'A faire':  { label: 'À faire',  className: 'todo' },
  'En cours': { label: 'En cours', className: 'inprogress' },
  'Termine':  { label: 'Terminé',  className: 'done' },
};

function TaskDetail() {
  const { id } = useParams();

  const tasks = JSON.parse(localStorage.getItem("taskflow_data")) || [];
  const task = tasks.find((t) => t.id === Number(id));

  if (!task) {
    return (
      <div className="task-not-found">
        <h2>404</h2>
        <p>Tache introuvable</p>
        <Link to="/" style={{ color: 'var(--color-accent-2)', fontSize: '0.85rem' }}>
          Revenir au Dashboard
        </Link>
      </div>
    );
  }

  const status = STATUS_MAP[task.statut] || STATUS_MAP['A faire'];

  return (
    <div className="task-detail">
      <Link to="/" className="task-detail-back">
        Revenir au Dashboard
      </Link>

      <div className={`task-detail-card ${status.className}`}>
        <span className={`task-detail-badge ${status.className}`}>
          <span className="task-detail-badge-dot" />
          {status.label}
        </span>

        <h2 className="task-detail-title">{task.titre}</h2>

        <div className="task-detail-section">
          <div className="task-detail-section-label">Description</div>
          <div className="task-detail-section-value">
            {task.description || 'Aucune description fournie.'}
          </div>
        </div>

        <div className="task-detail-section">
          <div className="task-detail-section-label">Identifiant</div>
          <div className="task-detail-section-value">#{task.id}</div>
        </div>
      </div>
    </div>
  );
}

export default TaskDetail;
import TaskCard from "../components/TaskCard";
import TaskForm from "../components/TaskForm";
import useLocalStorage from "../hooks/useLocalStorage";
import "../styles/Dashboard.css";

function Dashboard() {
  const [tasks, setTasks] = useLocalStorage("taskflow_data", []);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Les taches de <span>l'equipe</span></h2>
        <p className="dashboard-subtitle">Gerez et suivez vos livrables en temps reel.</p>
        <span className="task-count">{tasks.length} tâche{tasks.length !== 1 ? 's' : ''}</span>
      </div>

      <TaskForm onAddTask={handleAddTask} />

      <div className="task-list">
        {tasks.length === 0 ? (
          <div className="empty-state">Aucune tache pour l'instant. Ajoutez-en une !</div>
        ) : (
          tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))
        )}
      </div>
    </div>
  );
}

export default Dashboard;
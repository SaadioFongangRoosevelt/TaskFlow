import TaskCard from "../components/TaskCard";
import TaskForm from "../components/TaskForm";
import useLocalStorage from "../hooks/useLocalStorage";

function Dashboard() {
  const [tasks, setTasks] = useLocalStorage("taskflow_data", []);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div>
      <h2>Dashboard</h2>

      <TaskForm onAddTask={handleAddTask} />

      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default Dashboard;
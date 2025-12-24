import { useTasks } from "../store/taskContext";

const Stats = () => {
  const { tasks } = useTasks();

  const completed = tasks.filter(t => t.completed).length;
  const remaining = tasks.length - completed;

  return (
    <div>
      <h2>Stats</h2>
      <p>Total: {tasks.length}</p>
      <p>Completed: {completed}</p>
      <p>Remaining: {remaining}</p>
    </div>
  );
};

export default Stats;

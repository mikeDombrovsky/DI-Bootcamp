import "./Tasks.css";

function Tasks(props) {
  const { tasks, removeTask } = props;
  return tasks.length > 0 ? (
    <div>
      {tasks.map((task, i) => {
        return (
          <div className="task">
            <span id={i} onClick={(e) => removeTask(e.target.id)}>
              {task}
            </span>
          </div>
        );
      })}
    </div>
  ) : (
    <div className="void">Nothing to do, bro!</div>
  );
}

export default Tasks;

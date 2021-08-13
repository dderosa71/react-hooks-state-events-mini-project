import React from "react";

function Task({task, category, deleteTask}) {
  function onDelete(){
    deleteTask(task)
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{task}</div>
      <button onClick={onDelete} className="delete">X</button>
    </div>
  );
}

export default Task;

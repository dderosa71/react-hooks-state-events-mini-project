import React from "react";
import Task from "./Task.js"

function TaskList({tasks, deleteTask}) {
  const taskArray = tasks.map(task=>
    (<Task key={task.text} category={task.category} task={task.text} deleteTask={deleteTask}/>)
  )

  return (
    <div  className="tasks">
      {taskArray}
    </div>
  );
}

export default TaskList;

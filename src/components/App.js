import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });



function App() {
  const [tasksArray, setTasksArray] = useState(TASKS)
  const [currentCategory, setCategory] = useState('All')

  const filteredTasksArray = tasksArray.filter((task) => {
    if (currentCategory === 'All'){
      return true
    }
    return task.category === currentCategory
  })

  function deleteTask(deletedTask){
      setTasksArray((tasksArray)=> tasksArray.filter((task)=>task.text !== deletedTask))
  }

  function onTaskFormSubmit(newTask){
    setTasksArray((tasksArray)=>[...tasksArray, newTask])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} currentCatgory={currentCategory} setCategory={setCategory}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={filteredTasksArray} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;

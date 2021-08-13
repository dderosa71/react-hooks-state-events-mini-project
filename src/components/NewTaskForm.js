import React, { useState } from "react";



function NewTaskForm({categories, onTaskFormSubmit}) {
  const categoryOptions = categories.filter(category=> category !== 'All')
                                   .map(category => <option key={category}>{category}</option>)
  const [selectedCategory, setCategory] = useState('')
  const [currentText, setText] = useState('')

  function handleCategory(event){
    console.log(event)
    setCategory(event.target.value)
  }
  function handleText(event){
    console.log(event)
    setText(event.target.value)
  }

  function handleSubmit(event){
    event.preventDefault()
    const newTask = {text: currentText,
    category: selectedCategory}
    onTaskFormSubmit(newTask)
  }
  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input onChange={handleText} value={currentText} type="text" name="text" />
      </label>
      <label>
        Category
        <select onChange={handleCategory} value={selectedCategory} name="category">
          {categoryOptions}
        </select>
      </label>
      <input  type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;

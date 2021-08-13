import React, { useState } from "react";

function CategoryFilter({ currentCatgory, setCategory, categories }) {
  // const [selectedStatus, setSelectedStatus] = useState(false)
  const button = categories.map((category) => {

    return (<button onClick={onFilterSelection}
      className={currentCatgory === category ? "selected" : ''}
      key={category}>
      {category}
    </button>
    )
  })

  function onFilterSelection(event) {
    event.preventDefault()
    setCategory(event.target.outerText)
  }



  return (
    <div className="categories">
      <h5>Category filters</h5>
      {button}
    </div>
  );
}

export default CategoryFilter;

import React from "react";

function CategoryFilter({ currentCategory, setCategory, categories }) {
  // const [selectedStatus, setSelectedStatus] = useState(false)
  const button = categories.map((category) => {
  const className = category === currentCategory ? "selected" : null;
    return (<button onClick={onFilterSelection}
      className={className}
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

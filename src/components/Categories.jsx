import React from "react";

function Categories({ categories, selected, handleClick }) {
  return (
    <div className="categories">
      <h5>Category Filters</h5>
      {categories.map((category) => (
        <button
          onClick={() => handleClick(category)}
          key={category}
          className={selected === category ? "selected" : null}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default Categories;

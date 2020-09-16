import React from "react";

function TaskForm({ categories, text, selected, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <input
        type="text"
        name="text"
        onChange={handleChange}
        placeholder="New task"
        value={text}
      />
      <select name="category" onChange={handleChange}>
        {categories.map((category) => (
          <option key={category}>{category}</option>
        ))}
      </select>
      <input type="submit" value="Add Task" />
    </form>
  );
}

export default TaskForm;

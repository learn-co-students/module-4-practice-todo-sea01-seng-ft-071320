import React from "react";
import Task from "./Task";

function Tasks({ tasks, filter, handleClick }) {
  if (!!filter) {
    tasks = tasks.filter((task) => task.category === filter);
  }

  return (
    <>
      <div>
        {tasks.map((task) => (
          <Task key={task.text} handleClick={handleClick} {...task} />
        ))}
      </div>
    </>
  );
}

export default Tasks;

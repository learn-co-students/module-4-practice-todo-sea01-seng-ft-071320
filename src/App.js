import React from "react";
import "./App.css";
import { categories, tasks } from "./data";
import Categories from "./components/Categories";
import TaskForm from "./components/TaskForm";
import Tasks from "./components/Tasks";

class App extends React.Component {
  state = {
    categories: categories,
    tasks: tasks,
    filter: "All",
    form: {
      text: "",
      category: "",
    },
  };

  deleteTask = (text) => {
    this.setState({
      tasks: this.state.tasks.filter((task) => task.text !== text),
    });
  };

  selectCategory = (category) => {
    this.setState({
      filter: category,
    });
  };

  handleChange = (event) => {
    console.log(event.target);
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value,
      },
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      tasks: [
        ...this.state.tasks,
        { text: this.state.form.text, category: this.state.form.category },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <h2>Taskiron School</h2>
        <Categories
          categories={this.state.categories}
          selected={this.state.filter}
          handleClick={this.selectCategory}
        />
        <div className="tasks">
          <h5>Tasks</h5>
          <TaskForm
            categories={this.state.categories.filter(
              (category) => category !== "All"
            )}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            {...this.state.form}
          />
          <Tasks
            filter={this.state.filter !== "All" ? this.state.filter : false}
            tasks={this.state.tasks}
            categories={this.state.categories}
            handleClick={this.deleteTask}
          />
        </div>
      </div>
    );
  }
}

export default App;

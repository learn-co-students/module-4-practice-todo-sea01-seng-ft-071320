import React from 'react';
import './App.css';
import { CATEGORIES } from './data'
import Tasks from './containers/Tasks'
import Filter from './components/Filter'


class App extends React.Component {

  state = {
    tasks: [
      {
        text: 'Buy rice',
        category: 'Food'
      },
      {
        text: 'Save a tenner',
        category: 'Money'
      },
      {
        text: 'Build a todo app',
        category: 'Code'
      },
      {
        text: 'Build todo API',
        category: 'Code'
      },
      {
        text: 'Get an ISA',
        category: 'Money'
      },
      {
        text: 'Cook rice',
        category: 'Food'
      },
      {
        text: 'Tidy house',
        category: 'Misc'
      }
    ],

    categories: CATEGORIES,
    category: 'All',
    newTask: {
      text: "",
      category: "Code"
    }

  }
  handelCategory = (e) => {
    this.setState({ category: e.target.value })
  }

  filterByCatagory = () => {

    if (this.state.category !== 'All') {
      let list = this.state.tasks.filter(task => task.category === this.state.category)
      return list
    }

    return this.state.tasks
  }

  deleteTask = (task) => {
    let newList = this.state.tasks.filter(t => t !== task)
    this.setState({ tasks: newList })

  }

  handleOnChange = (e) => {
    this.setState({ newTask: { ...this.state.newTask, [e.target.name]: e.target.value } })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let newTask = this.state.newTask

    this.setState({ tasks: [...this.state.tasks, newTask] })

    this.setState({ newTask: { text: '', category: 'Code' } })

  }




  render() {
    return (
      <div className="App">
        <h2>My tasks</h2>

        <div > <Filter categories={this.state.categories}
          category={this.state.category}
          handelCategory={this.handelCategory} /></div>

        <div className="tasks" >
          <Tasks tasks={this.filterByCatagory()} deleteTask={this.deleteTask}
            newTask={this.state.newTask} handleOnChange={this.handleOnChange}
            handleSubmit={this.handleSubmit}
            categories={this.state.categories}
          />

        </div>


      </div>
    );
  }
}


export default App;

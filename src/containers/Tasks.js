import React from 'react';
import Form from '../components/Form'
import Task from '../components/Task'

const Tasks = (props) => {
    return (
        <div >
            <h5>Tasks </h5>
            <div> <Form
                newTask={props.newTask}
                handleOnChange={props.handleOnChange}
                handleSubmit={props.handleSubmit}
                categories={props.categories}
            /> </div>
            {props.tasks.map(task => <Task task={task} key={task.text} deleteTask={props.deleteTask} />)}
        </div>

    )
}

export default Tasks;
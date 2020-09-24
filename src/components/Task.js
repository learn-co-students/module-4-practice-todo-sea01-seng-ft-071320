import React from 'react';

class Task extends React.Component {

    render() {
        const { task } = this.props;
        return (
            <div className="task">
                <div className="label"> {task.category}  </div>
                <div className="text"> {task.text}   </div>
                <button className="delete" onClick={() => this.props.deleteTask(task)}>X </button>

            </div>
        )
    }
}
export default Task
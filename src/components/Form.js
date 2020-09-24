import React from 'react';

class Form extends React.Component {

    render() {

        const { categories, handleSubmit, newTask, handleOnChange } = this.props;
        const categoryoptions = categories.filter(category => category !== 'All')
        return (
            <div>
                <form className="new-task-form"
                    onSubmit={handleSubmit} >
                    <input type="text" placeholder="New task details"
                        name="text" value={newTask.text}
                        onChange={handleOnChange}></input>
                    <select name="category" onChange={handleOnChange}>
                        {categoryoptions.map(
                            category =>
                                <option value={category}
                                    key={category}> {category}</option>)}

                    </select>
                    <input type="submit" value="AddTask"></input>
                </form>
            </div >
        )
    }
}

export default Form


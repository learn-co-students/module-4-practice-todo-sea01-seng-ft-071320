import React from 'react';

export default class Filter extends React.Component {
    render() {
        return (
            <div >
                <h5> Category filters </h5>
                <div className="categories">
                    {this.props.categories.map(category =>
                        <button onClick={(e) => this.props.handelCategory(e)}
                            className={this.props.category === category ? "selected" : null}
                            key={category}
                            value={category}
                        > {category} </button>)}
                </div>
            </div>

        )
    }

}
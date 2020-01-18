import React from 'react';

const TodoItem = (props) => {
    let todo = props.todo;
    const { id, title, completed } = todo;
    const toDoStyle = {
        fontStyle: 'italic',
        color: '#cdcdcd',
        textDecoration: 'line-through'
    }

    return (
        <p style={completed ? toDoStyle : null}>
            <input type='checkbox' checked={completed} onChange={(event) => props.markComplete(id)} />{' '} {title}
            <button style={btnStyle} >x</button>
        </p>
    );

};



const btnStyle = {
    background: '#ff0000',
    color: 'white',
    border: 'none',
    padding: '1px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem;
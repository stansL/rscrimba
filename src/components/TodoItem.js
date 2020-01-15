import React from 'react';

const TodoItem = (props) => {
    let todo = props.todo;
    const {id,text,completed} = todo;
    return (
        <p>
            <input type='checkbox' checked = {completed} onChange = {(event) => props.markComplete(id)} />{' '} {text}
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
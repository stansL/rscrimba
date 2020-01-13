import React from 'react';

const TodoItem = (props) => {
    let todo = props.todo;
    return (
        <p>
            <input type='checkbox' checked = {todo.completed} onChange = {props.checkItem}/>{' '} {todo.text}
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
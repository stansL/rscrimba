import React from 'react';

const TodoItem = () => {
    return (
        <p><input type='checkbox' />{' '}ToDo Item 1 
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
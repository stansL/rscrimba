import React from 'react';
import TodoItem from './TodoItem';

const MainContent = () => {
    const firstName = 'Stanslaus';
    const lastName = 'Odhiambo';
    return (
        <main>
            <h1> {firstName} {lastName}</h1>
            <p>A software eng with a potential that he has not harnessed in a long time and is ready to explore</p>
            <h3>Todo List</h3>
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </main>
    );

};

export default MainContent;
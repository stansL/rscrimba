import React from 'react';
import TodoItem from './TodoItem';
import todosData from './todosData';



// const MainContent = () => {
//     const firstName = 'Stanslaus';
//     const lastName = 'Odhiambo';

//     function checkItem(){

//     }

//     let todosItems = todosData.map(todoItem => <TodoItem  key = {todoItem.id} todo ={todoItem} checkItem = {checkItem}/>);
//     return (
//         <main>
//             <h1> {firstName} {lastName}</h1>
//             <p>A software eng with a potential that he has not harnessed in a long time and is ready to explore</p>
//             <h3>Todo List</h3>
//             {todosItems}
//         </main>
//     );

// };

class MainContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todosItems: []
        }
    }
    checkItem() {

    }

    render() {
        const firstName = 'React';
        const lastName = 'Native';

        return (
            <main>
                <h1> {firstName} {lastName}</h1>
                <p>A software eng with a potential that he has not harnessed in a long time and is ready to explore</p>
                <h3>Todo List</h3>
                {this.state.todosItems}
            </main>
        );

    }

    componentDidMount(){
        let todosItems = todosData.map(todoItem => <TodoItem key={todoItem.id} todo={todoItem} checkItem={this.checkItem} />);
        this.setState({
            todosItems : todosItems
        })

    }
}

export default MainContent;
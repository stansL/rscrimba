import React from 'react';

class Forms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: ''

        }
    }

    processInput = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });

        // this.setState({
        //     firstName: event.target.value,
        //     lastName: event.target.value
        // });
    }

    render() {
        return (
            <div>
                <input name="firstName" type='text' value={this.state.firstName} placeholder="First Name" onChange={this.processInput} />
                <input name="lastName" type='text' value={this.state.lastName} placeholder="Last Name" onChange={this.processInput} />
                <p>{this.state.firstName} {" "} {this.state.lastName}</p>
            </div>
        );
    }
}
export default Forms;
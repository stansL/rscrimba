import React from 'react';

class Forms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            isFriendly: false,
            gender: 'Male',
            textInput:'',
            favFruit:''
        }
    }

    handleSubmit(event){
        event.preventDefault();
        alert("Submitted the Form");
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

    // Take a look at the Formik library

    render() {
        return (
            <form onSubmit={this.handleSubmit}> 
                <input name="firstName" type='text' value={this.state.firstName} placeholder="First Name" onChange={this.processInput} />
                <input name="lastName" type='text' value={this.state.lastName} placeholder="Last Name" onChange={this.processInput} />
                <p>{this.state.firstName} {" "} {this.state.lastName}</p>
                <textarea value={this.state.value} onChange={this.processInput} name ="textInput" />
                <br />

                <label>
                    <input type="checkbox" checked={this.state.isFriendly} onChange={this.processInput} name="isFriendly" /> Some Tst
                </label>
                <br />
                <label>
                    <input type="radio" checked={this.state.gender === "Female"} onChange={this.processInput} name="gender" value="Female" /> Female
                </label>
                <label>
                    <input type="radio" checked={this.state.gender === "Male"} onChange={this.processInput} name="gender" value = "Male"/> Male
                </label> <br />

                <label>
                    Pick your favorite flavor:
                    <select value={this.state.favFruit} onChange={this.processInput} name = "favFruit">
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label> <br />
                <button>Submit</button>
            </form>
        );
    } 
}
export default Forms;
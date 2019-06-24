import React, { Component } from 'react'

export class Form extends Component {
    state = {
        name: '',
        age: '',
        height: ''
    }

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addSmurf = e => {
        e.preventDefault();
        this.props.postSmurfs({name: this.state.name, age: Number(this.state.age), height: this.state.height});
        this.setState({
            name: '',
            age: '',
            height: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addSmurf}>
                <input onChange={this.handleChanges} name="name" placeholder="name" value={this.state.name} />
                <input onChange={this.handleChanges} name="age" placeholder="age" value={this.state.age} />
                <input onChange={this.handleChanges} name="height" placeholder="height" value={this.state.height} />
                <button>Add Smurf</button>
                </form>
            </div>
        )
    }
}

export default Form

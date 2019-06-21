import React, { Component } from 'react'

export class Form extends Component {
    render() {
        return (
            <div>
                <form>
                <input placeholder="name"/>
                <input placeholder="age"/>
                <input placeholder="height"/>
                <button>Add Smurf</button>
                </form>
            </div>
        )
    }
}

export default Form

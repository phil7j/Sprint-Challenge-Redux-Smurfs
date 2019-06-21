import React, { Component } from 'react';
import Smurfs from './Smurfs'
import Form from './Form'
import './App.css';
import { connect } from 'react-redux'
import { getSmurfs } from '../actions'
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own.
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {


  componentDidMount() {
    this.props.getSmurfs()
}

  render() {
    return (
      <div className="App">
        { this.props.fetchingSmurfs ? <h1>Loading...</h1> : <Smurfs smurfs={this.props.smurfs}/> }

        <Form />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  fetchingSmurfs: state.fetchingSmurfs,
  creatingSmurf: state.creatingSmurf,
  error: state.error,
  smurfs: state.smurfs
})

export default connect(mapStateToProps, {getSmurfs})(App)

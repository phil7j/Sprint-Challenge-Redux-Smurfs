import React, { Component } from 'react';
import Smurfs from './Smurfs'
import Form from './Form'
import './App.css';
import { connect } from 'react-redux'
import { getSmurfs } from '../actions'
import { postSmurfs} from '../actions'
import { deleteSmurf} from '../actions'
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
      <div className="app">
        <h1>Smurf Village</h1>
        { this.props.fetchingSmurfs ? <h1>Loading...</h1> : <Smurfs smurfs={this.props.smurfs} deleteSmurf={this.props.deleteSmurf}/> }
        { this.props.error ? <h2>{this.props.error}</h2> : null }
        <Form postSmurfs={this.props.postSmurfs}/>
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

export default connect(mapStateToProps, {getSmurfs, postSmurfs, deleteSmurf})(App)

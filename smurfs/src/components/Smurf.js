import React, { Component } from 'react';



class Smurf extends Component {


    delete = id => {
        this.props.deleteSmurf(id);
    }

    update = id => {
        this.props.findSmurf(id)
    }

     render(){
        const id = this.props.smurf.id
         return (
             <div className="smurf">
                 <h3>{this.props.smurf.name}</h3>
                 <p>Age: {this.props.smurf.age}</p>
                 <p>Height: {this.props.smurf.height}</p>
                 <button onClick={()=>this.delete(id)}>Delete</button>
                 <button onClick={()=>this.update(id)}>Update</button>
             </div>
         )
     }
}

export default Smurf

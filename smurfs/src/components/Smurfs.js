import React from 'react'
import Smurf from './Smurf'
function Smurfs(props) {
    return (
        <div className="smurf-list">
            {props.smurfs.map( smurf => {
                return <Smurf  smurf={smurf} key={smurf.id} deleteSmurf={props.deleteSmurf} findSmurf={props.findSmurf} />
            })}
        </div>
    )
}

export default Smurfs

import React from 'react'
import Smurf from './Smurf'
function Smurfs(props) {
    return (
        <div>
            {props.smurfs.map( smurf => {
                return <Smurf  smurf={smurf} key={smurf.id} />
            })}
        </div>
    )
}

export default Smurfs

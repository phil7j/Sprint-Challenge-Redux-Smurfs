/*
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

import axios from 'axios'

export const FETCHING = 'FETCHING'
export const CREATING = 'CREATING'
export const DELETING = 'DELETING'
export const UPDATING = 'UPDATING'
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const POST_SUCCESS = 'POST_SUCCESS';
export const POST_FAILURE = 'POST_FAILURE';
export const DELETE_SUCCESS = 'DELETE_SUCCESS'
export const DELETE_FAILURE = 'DELETE_FAILURE'
export const UPDATE_SUCCESS = 'UPDATE_SUCCESS'
export const UPDATE_FAILURE = 'UPDATE_FAILURE'

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCHING });
  axios
    .get(`http://localhost:3333/smurfs`)
    .then(res => {
      dispatch({ type: FETCH_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err }));
};

export const postSmurfs = data => dispatch => {
  dispatch({ type: CREATING});

  axios
    .post(`http://localhost:3333/smurfs`, data )
      .then( res=> {
        console.log(res, 'Data sent back from server')
        dispatch({type: POST_SUCCESS, payload: res.data})
      })
      .catch( err => {
        console.log(err, 'error from server')
        dispatch({ type:POST_FAILURE, payload: err })
      })
}

export const deleteSmurf = id => dispatch => {
  dispatch({ type: DELETING });
  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
      dispatch({ type: DELETE_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: DELETE_FAILURE, payload: err }));
};

export const updateSmurf = smurf => dispatch => {
  dispatch({ type: UPDATING });
  axios
    .put(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
    .then(res => {
      dispatch({ type: UPDATE_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: UPDATE_FAILURE, payload: err }));
};
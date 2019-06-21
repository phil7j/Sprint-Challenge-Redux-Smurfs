/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  FETCHING,
  CREATING,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  POST_SUCCESS,
  POST_FAILURE

} from '../actions';

 const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   creatingSmurf: false,
   error: null
  //  updatingSmurf: false,
  //  deletingSmurf: false,
 }


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer.
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

const reducer = (state = initialState, action) => {
  switch (action.type){
    case FETCHING:
      return {
        ...state,
        fetchingSmurfs: true
      }
      case FETCH_SUCCESS:
        return {
          ...state,
          fetchingSmurfs: false,
          smurfs: action.payload
        }
        case FETCH_FAILURE:
          return {
            ...state,
            error: "Oh no something bad happened! :(",
            fetchingSmurfs: false
          }
          case CREATING:
          return {
            ...state,
            creatingSmurf: true
          }
          case POST_SUCCESS:
              const newSmurf = { name: action.payload.name, age: action.payload.age, height: action.payload.height}
            return {
              ...state,
              creatingSmurf: false,
              smurfs: {...state.smurfs, newSmurf}
            }
            case POST_FAILURE:
              return {
                ...state,
                creatingSmurf: false,
                error: 'Couldnt add Smurf! Sorry!!'
              }
              default:
                  return state;
    }


}


export default reducer;
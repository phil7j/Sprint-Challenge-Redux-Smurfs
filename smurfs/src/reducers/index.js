/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  FETCHING,
  CREATING,
  DELETING,
  UPDATING,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  POST_SUCCESS,
  POST_FAILURE,
  DELETE_SUCCESS,
  DELETE_FAILURE,
  UPDATE_SUCCESS,
  UPDATE_FAILURE

} from '../actions';

 const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   creatingSmurf: false,
   deletingSmurf: false,
   updatingSmurf: false,
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
            error: action.payload,
            fetchingSmurfs: false
          }
          case CREATING:
          return {
            ...state,
            creatingSmurf: true
          }
          case POST_SUCCESS:
            return {
              ...state,
              creatingSmurf: false,
              smurfs: action.payload,
              error: null
            }
            case POST_FAILURE:
              return {
                ...state,
                creatingSmurf: false,
                error: action.payload.response.data.Error
              }
            case DELETING:
              return {
                ...state,
                deletingSmurf: true
              }
            case DELETE_SUCCESS:
              return {
                ...state,
                smurfs: action.payload,
                deletingSmurf: false
              }
            case DELETE_FAILURE:
                return {
                  ...state,
                  deletingSmurf: false,
                  error: action.payload.response.data.Error
                }
            case UPDATING:
              return {
                ...state,
                updatingSmurf: true
              }
            case UPDATE_SUCCESS:
              return {
                ...state,
                updatingSmurf: false,
                smurfs: action.payload
              }
            case UPDATE_FAILURE:
              return {
                ...state,
                updatingSmurf: false,
                error: action.payload.response.data.Error
              }
              default:
                  return state;
    }


}


export default reducer;
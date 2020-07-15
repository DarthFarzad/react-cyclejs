import * as ActionTypes from '../ActionTypes';

const initialState:any = [];
export default function searchResults(state = initialState, action:any){
    switch(action.type) {
        case ActionTypes.RECEIVED_MOVIES:
            return action.payload.movies;
        case ActionTypes.CLEARED_SEARCH_RESULTS:
            return initialState;
        default:
            return state;
    }
}
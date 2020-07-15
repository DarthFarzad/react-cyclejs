import * as ActionTypes from '../ActionTypes';

const initialState = {}
export default function selectMovie (state ={}, action:any){
    switch(action.type){
        case ActionTypes.SELECT_MOVIE:
            return action.payload.movie;
        case ActionTypes.DESELECT_MOVIE:
            return initialState;
        default:
            return state;
    }
}
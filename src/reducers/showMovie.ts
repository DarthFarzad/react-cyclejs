import * as ActionTypes from '../ActionTypes';

export default function showMovie(state = false, action:any){
    switch(action.type) {
        case ActionTypes.DESELECT_MOVIE:
        case ActionTypes.HIDE_MOVIE:
            return false;
        case ActionTypes.SELECT_MOVIE:
        case ActionTypes.SHOW_MOVIE:
            return true;
        default:
            return state;
    }
}
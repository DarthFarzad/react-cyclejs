import { REQUESTED_POPULAR_MOVIES, RECEIVED_POPULAR_MOVIES } from "../ActionTypes";

export default function popularMoviesLoading(state = false, action:any){
    switch(action.type) {
        case REQUESTED_POPULAR_MOVIES:
            return true
        case RECEIVED_POPULAR_MOVIES:
            return false;
        default:
            return state;
    }
}
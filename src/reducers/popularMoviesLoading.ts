import { REQUESTED_UPCOMING_MOVIES, RECEIVED_UPCOMING_MOVIES } from "../ActionTypes";

export default function upcomingMoviesLoading(state = false, action:any){
    switch(action.type) {
        case REQUESTED_UPCOMING_MOVIES:
            return true
        case RECEIVED_UPCOMING_MOVIES:
            return false;
        default:
            return state;
    }
}
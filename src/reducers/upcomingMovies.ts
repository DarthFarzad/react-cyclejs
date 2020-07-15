import { REQUESTED_UPCOMING_MOVIES, RECEIVED_UPCOMING_MOVIES } from "../ActionTypes";
import {Movie} from "../models/Movie";
export default function popularMovies(state:Array<Movie> = [], action:any){
    switch(action.type){
        case REQUESTED_UPCOMING_MOVIES:
            return state;
        case RECEIVED_UPCOMING_MOVIES:
            return action.payload.movies;
        default:
            return state;
    }
}
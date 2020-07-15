import { REQUESTED_POPULAR_MOVIES, RECEIVED_POPULAR_MOVIES } from "../ActionTypes";
import {Movie} from "../models/Movie";

export default function popularMovies(state:Array<Movie> = [], action:any){
    switch(action.type){
        case REQUESTED_POPULAR_MOVIES:
            return state;
        case RECEIVED_POPULAR_MOVIES:
            return action.payload.movies;
        default:
            return state;
    }
}
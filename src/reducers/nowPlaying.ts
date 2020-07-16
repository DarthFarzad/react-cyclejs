import * as ActionTypes from '../ActionTypes';
import {Movie} from "../models/Movie";

export default function nowPlaying(state:Array<Movie> = [], action:any) {
    switch(action.type){
        case ActionTypes.RECEIVED_NOW_PLAYING:
        case ActionTypes.REQUESTED_NOW_PLAYING:
        default:
            return state;
    }
}
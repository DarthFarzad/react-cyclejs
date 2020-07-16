import * as ActionTypes from '../ActionTypes';
import {Cast} from "../models/Cast";

const initialState: Cast[] = [];
export default function cast(state:Array<Cast> = initialState, action:any){
    switch(action.type){
        case ActionTypes.RECEIVED_CAST:
            return action.payload.cast;
        case ActionTypes.DESELECT_MOVIE:
            return initialState;
        default:
            return state;
    }
}
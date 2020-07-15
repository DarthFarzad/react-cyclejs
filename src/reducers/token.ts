import { REQUESTED_TOKEN, RECEIVED_TOKEN } from '../ActionTypes';

export default function token(state="", action:any){
    switch(action.type){
        case RECEIVED_TOKEN:
            return action.payload.token;
        case REQUESTED_TOKEN:
        default:
            return state;
    }
}
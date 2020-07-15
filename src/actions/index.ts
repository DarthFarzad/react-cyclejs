import * as ActionTypes from '../ActionTypes';
import {Movie} from "../models/Movie";

export function requestToken(){
    return {
        type: ActionTypes.REQUESTED_TOKEN
    }
}
export function receiveToken(token: string) {
    return {
        type: ActionTypes.RECEIVED_TOKEN,
        payload: { token }
    }
}

export function requestMovieDetails(movie: Movie){
    return {
        type: ActionTypes.REQUESTED_MOVIE,
        payload: { movie }
    }
}
export function receiveMovieDetails(movie:Movie) {
    return {
        type: ActionTypes.RECEIVED_MOVIE,
        payload: { movie }
    }
}

export function searchPopularMovies(){
    return {
        type: ActionTypes.REQUESTED_POPULAR_MOVIES,
    }
}
export function receivePopularMovies(movies:Array<Movie>){
    return {
        type: ActionTypes.RECEIVED_POPULAR_MOVIES,
        payload: { movies }
    }
}
export function requestUpcomingMovies() {
    return {
        type: ActionTypes.REQUESTED_UPCOMING_MOVIES,
    }
}

export function receiveUpcomingMovies(movies:Array<Movie>) {
    return {
        type: ActionTypes.RECEIVED_UPCOMING_MOVIES,
        payload: { movies }
    }
}

export function receiveSearchMovies(movies:Array<Movie>){
    console.log('receiveSearchMovies', movies);
    return {
        type: ActionTypes.RECEIVED_MOVIES,
        payload: { movies }
    }
}

export function searchMovies(query:string) {
    return {
        type: ActionTypes.SEARCH_MOVIES,
        payload: { query }
    }
}

export function clearSearchResults(){
    return {
        type: ActionTypes.CLEARED_SEARCH_RESULTS
    }
}
export function showMovie(){
    return {
        type: ActionTypes.SHOW_MOVIE
    }
}
export function hideMovie() {
    return {
        type: ActionTypes.HIDE_MOVIE
    }
}

export function selectMovie(movie:Movie){
    return {
        type: ActionTypes.SELECT_MOVIE,
        payload: { movie }
    }
}
export function deselectMovie(){
    return {
        type: ActionTypes.DESELECT_MOVIE
    }
}
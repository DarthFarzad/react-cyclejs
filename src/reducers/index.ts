import { combineReducers } from "redux";

import token from './token';
import popularMovies from './popularMovies';
import searchResults from './searchResults';
import popularMoviesLoading from './popularMoviesLoading';
import upcomingMovies from './upcomingMovies';
import upcomingMoviesLoading from './popularMoviesLoading';
import showMovie from './showMovie';
import selectMovie from './selectMovie';
import nowPlaying from './nowPlaying';
import cast from './cast';

export default combineReducers({
    token,
    popularMovies,
    popularMoviesLoading,
    upcomingMovies,
    upcomingMoviesLoading,
    searchResults,
    showMovie,
    selectMovie,
    nowPlaying,
    cast
});
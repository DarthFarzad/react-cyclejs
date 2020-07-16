import * as actions from '../actions';
import * as ActionTypes from '../ActionTypes';
import Cookie from '../utils/cookie';

import { combineCycles } from 'redux-cycles';
import xs from 'xstream';

function getResourceUrl(path:string, params:any = null):string {
    const options = {'api_key': process.env.REACT_APP_TMDB_API_KEY, ...params};
    return process.env.REACT_APP_TMDB_API_URL + path + '?' + Object.keys(options).map((key:any) => key + '=' + options[key]).join('&');
}

function withAuthToken(resource:string, path:string, params:{} = {}) {
    const { request_token } = Cookie.retrieve("TMDb") ;
    return {
        url: getResourceUrl(path, params),
        headers: {
            'Authorization': 'Bearer ' + request_token,
            'Content-Type': 'application/json;charset=utf-8'
        },
        method: "GET",
        category: resource
    };
}

export function fetchToken(sources: any){
    const cookie = Cookie.retrieve('TMDb')
    if(cookie) {
        const action$ = sources.ACTION
            .filter((action:any) => action.type === ActionTypes.REQUESTED_TOKEN)
            .map((action:any) => actions.receiveToken(cookie.request_token));
        return {
            ACTION: action$
        }
    }
    const token$ = sources.ACTION
        .filter((action:any) => action.type === ActionTypes.REQUESTED_TOKEN);

    const request$ = token$
        .map((entry:any) => ({
            url: getResourceUrl('authentication/token/new', { api_key: "1e859dc9f92ec822aa44af583dfc67fc" }),
            category: 'token'
        }));

    const response$ = sources.HTTP
        .select('token')
        .flatten();

    const action$ = xs.combine(response$, token$)
        .map((entry:any) => {
            const response = entry[0].body;
            Cookie.invoke('TMDb', response, { expires: 1})
            return actions.receiveToken(response.request_token)
        });

    return {
        ACTION: action$,
        HTTP: request$
    }
}

export function fetchPopularMovies(sources: any){
    const filters = {
        'release_date.gte':'2019-01-01',
        'release_date.lte': '2020-01-01',
        'sort_by':'popularity.desc'
    }
    const movies$ = sources.ACTION
        .filter((action:any) => action.type === ActionTypes.RECEIVED_TOKEN);

    const request$ = movies$
        .map((movie:any) => (withAuthToken('popular','discover/movie', filters)))

    const response$ = sources.HTTP
        .select('popular')
        .flatten();

    const action$ = xs.combine(response$, movies$)
        .map((entry:any) => actions.receivePopularMovies(entry[0].body.results));

    return {
        ACTION: action$,
        HTTP: request$
    }
}

export function fetchUpcomingMovies(sources: any){
    const movies$ = sources.ACTION
        .filter((action:any) => action.type === ActionTypes.RECEIVED_TOKEN);

    const request$ = movies$
        .map((movie:any) => (withAuthToken('upcoming', 'movie/upcoming')));

    const response$ = sources.HTTP
        .select('upcoming')
        .flatten();

    const action$ = xs.combine(response$, movies$)
        .map((entry:any) => actions.receiveUpcomingMovies(entry[0].body.results));

    return {
        ACTION: action$,
        HTTP: request$
    }
}

export function searchMovies(sources: any) {
    const query$ = sources.ACTION
        .filter((action:any) => action.type === ActionTypes.SEARCH_MOVIES)
        .map((action:any) => action.payload.query)
        .filter((q:string) => !!q)
        .map((q:string) =>
        sources.Time.periodic(800)
            .take(1)
            .mapTo(q)
            .endWhen(
                sources.ACTION.filter((action:any) => action.type === ActionTypes.CLEARED_SEARCH_RESULTS)
            )).flatten();

    const request$ = query$
        .map((q:string) => withAuthToken('search', 'search/movie', {query: q}));

    const response$ = sources.HTTP
        .select('search')
        .flatten()
        .map((res:any)  => res.body.results)
        .map(actions.receiveSearchMovies);
    return {
        ACTION: response$,
        HTTP: request$,
    }
}

export function clearSearchResults(sources: any){
    const clear$ = sources.ACTION
        .filter((action:any) => action.type === ActionTypes.SEARCH_MOVIES)
        .filter((action:any) => !action.payload.query)
        .map(actions.clearSearchResults)
    return {
        ACTION: clear$
    }
}

export function requestMovieDetails(sources: any) {
    const movie$ = sources.ACTION
        .filter((action:any) => action.type === ActionTypes.SELECT_MOVIE);

    const request$ = movie$
        .map((action:any) => withAuthToken('movie_details', 'movie/'+ action.payload.movie.id, {append_to_response: 'videos,with_cast'}));

    const response$ = sources.HTTP
        .select('movie_details')
        .flatten();

    const action$ = xs.combine(response$, movie$)
        .map((res:any) => actions.receiveMovieDetails(res[0].body))
    return {
        ACTION: action$,
        HTTP: request$
    }
}
export function requestNowPlaying(sources:any) {
    const movie$ = sources.ACTION
        .filter((action:any) => action.type === ActionTypes.REQUESTED_NOW_PLAYING);

    const request$ = movie$
        .map((action:any) => withAuthToken('now_playing', 'movie/now_playing'));

    const response$ = sources.HTTP
        .select('now_playing')
        .flatten();

    const action$ = xs.combine(response$, movie$)
        .map((res:any) => actions.receivedNowPlaying(res[0].body.results));

    return {
        ACTION: action$,
        HTTP: request$
    }
}

// TODO Make a nested list for the genres

// @ts-ignore
export default combineCycles(
    fetchToken,
    fetchPopularMovies,
    fetchUpcomingMovies,
    clearSearchResults,
    searchMovies,
    requestMovieDetails,
    requestNowPlaying);
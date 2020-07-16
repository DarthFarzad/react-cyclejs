import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import PlaceholderImage from '../film-poster-placeholder.png';
import MovieSearchInput from './movieSearchInput';
import Loader from './loader';
import {searchMovies} from "../actions";
import {Movie} from "../models/Movie";

class SearchResults extends PureComponent<any, any> {
    constructor(props:any) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            query: ''
        };
    }

    handleChange(query: any) {
        this.setState({query}, () => this.props.searchMovies(query));
    }

    render() {
        const { query } = this.state;
        const { searchResults } = this.props;
        const search_result_classes = ['search__results'];
        if(!query)
            search_result_classes.push('search__results--collapsed');
        const results = (<div className="card">
            <ul className="list-group list-group-flush">
                {(query && searchResults.length < 1) ? <li className="list-group-item">Loading ...</li> : null}
                {searchResults ? searchResults.map((movie:Movie) => (<li className="list-group-item p-0">
                        <img src={movie.poster_path ?`https://image.tmdb.org/t/p/w200${movie.poster_path}` : PlaceholderImage}
                             className="card-img-top search__poster mr-3"
                             alt={`Poster for ${movie.title}`}
                        />
                            {movie.title}
                        </li>)
                ) : null}
            </ul>
        </div>);
        return (
            <div className="search__container">
                <MovieSearchInput onChange={this.handleChange} defaultValue={query} value="" />
                <div className={search_result_classes.join(' ')}>
                    {results}
                </div>
            </div>
        );
    }
}

export default connect(({searchResults}: any)=>({searchResults}),{ searchMovies })(SearchResults);
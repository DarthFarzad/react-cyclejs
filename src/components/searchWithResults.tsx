import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
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
        const results = (<ul>
            {(query && searchResults.length < 1) ? <div className="row"><div className="col"><Loader /></div></div> : null}
            {searchResults ? searchResults.map((movie:Movie) => {
                const poster_path = 'https://image.tmdb.org/t/p/w200' + movie.poster_path;
                return (
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="row">
                                    <div className="col-1 p-0"><img className="search__poster" src={poster_path} alt=""/></div>
                                    <div className="col-10">
                                        <div className="card-body">{movie.title}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }) : null}
        </ul>);
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
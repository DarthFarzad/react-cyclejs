import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import MovieSearchInput from "./movieSearchInput";
import {searchMovies} from "../actions";

class SearchResults extends PureComponent<any, any> {
    constructor(props:any) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            
        };
    }

    handleChange(query: any) {
        this.props.searchMovies(query);
    }

    render() {
        const { query } = this.props;
        return (
            <div>
                <MovieSearchInput onChange={this.handleChange} defaultValue={query} value="" />
                <div className="result-wrapper">
                    {/*some stuff here*/}
                </div>
            </div>
        );
    }
}

export default connect(({}: any)=>({
    query: ''
}),{ searchMovies })(SearchResults);
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { requestToken, selectMovie, searchMovies } from '../actions';
import Modal from './Modal';
import MovieSearchInput from '../components/movieSearchInput';
import UpcomingMoviesList from '../components/upcomingMoviesList';
import PopularMoviesList from '../components/popularMoviesList';
import {Movie} from '../models/Movie';
import MovieModal from '../components/MovieModal';

class HomePage extends Component<any, any>{
    constructor(props: any) {
        super(props);
        this.handleMovieSelect = this.handleMovieSelect.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
        props.requestToken();
    }
    componentWillReceiveProps(nextProps: { query: any; }){
        if(this.props.query !== nextProps.query)
            this.handleSearchChange(nextProps.query)
    }

    handleMovieSelect(movie:Movie) {
        this.props.selectMovie(movie);
    }

    handleSearchChange(query: any) {
        this.props.searchMovies(query);
    }

    render() {
        const {
            query,
            upcomingResults,
            upcomingLoading,
            popularResults,
            popularMoviesLoading,
            showModal,
            selectedMovie
        } = this.props;
        const modal = showModal ? (<Modal>
            <MovieModal {...selectedMovie} />
        </Modal>) : null;
        return (
            <React.Fragment>
                <section className="jumbtotron">
                    <MovieSearchInput onChange={this.handleSearchChange} defaultValue={query} />
                </section>
                <UpcomingMoviesList collection={upcomingResults} loading={upcomingLoading} />
                <PopularMoviesList collection={popularResults} loading={popularMoviesLoading} onClick={this.handleMovieSelect}/>
                {modal}
            </React.Fragment>
        );
    }
}
export default connect(
    ({
         upcomingMovies, upcomingLoading,popularMovies, popularMoviesLoading, showMovie, selectMovie,
         searchResults}:any)=> ({
        query: '',
        upcomingResults: upcomingMovies,
        upcomingLoading,
        popularResults: popularMovies,
        popularMoviesLoading,
        showModal: showMovie,
        selectedMovie: selectMovie,
        searchResults
    }),
    { requestToken, selectMovie, searchMovies }
)(HomePage);
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
                <section className="jumbotron mb-5">
                    <MovieSearchInput onChange={this.handleSearchChange} defaultValue={query} />
                </section>

                <section className="container mb-5">
                    <h4 className="section__heading"> Upcoming Movies</h4>
                    <UpcomingMoviesList collection={upcomingResults} loading={upcomingLoading} onClick={this.handleMovieSelect} />
                </section>

                <section className="container">
                    <h4 className="section__heading">popular movies</h4>
                    <PopularMoviesList collection={popularResults} loading={popularMoviesLoading} onClick={this.handleMovieSelect} />
                </section>
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
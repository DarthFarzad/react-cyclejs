import React, {Component} from 'react';
import { connect } from 'react-redux';
import { requestToken, selectMovie } from '../actions';
import Modal from './Modal';
import Search from '../components/searchWithResults';
import MoviesList from '../components/moviesList';
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
            upcomingResults,
            upcomingLoading,
            popularResults,
            popularMoviesLoading,
            showModal,
            selectedMovie,
            cast
        } = this.props;
        const modal = showModal ? (<Modal>
            <MovieModal {...selectedMovie} cast={cast} />
        </Modal>) : null;
        return (
            <React.Fragment>
                <section className="jumbotron mb-5">
                    <Search />
                </section>

                <section className="container mb-5">
                    <h4 className="section__heading">Upcoming Movies</h4>
                    <MoviesList collection={upcomingResults} loading={upcomingLoading} onClick={this.handleMovieSelect} />
                </section>

                <section className="container">
                    <h4 className="section__heading">top rated movies</h4>
                    <MoviesList collection={popularResults} loading={popularMoviesLoading} onClick={this.handleMovieSelect} />
                </section>
                {modal}
            </React.Fragment>
        );
    }
}
export default connect(
    ({
         upcomingMovies, upcomingLoading, popularMovies, popularMoviesLoading, showMovie, selectMovie, cast}:any)=> ({
        upcomingResults: upcomingMovies,
        upcomingLoading,
        popularResults: popularMovies,
        popularMoviesLoading,
        showModal: showMovie,
        selectedMovie: selectMovie,
        cast
    }),
    { requestToken, selectMovie }
)(HomePage);
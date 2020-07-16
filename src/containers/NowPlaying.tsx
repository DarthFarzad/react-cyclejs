import React, {Component} from 'react';
import { connect } from 'react-redux';
import {requestNowPlaying, selectMovie} from "../actions";
import Modal from './Modal';
import Loading from '../components/loader';
import MoviesList from '../components/moviesList';
import {Movie} from "../models/Movie";
import MovieModal from "../components/MovieModal";
import Search from "../components/searchWithResults";

class NowPlaying extends Component<any, any>{
    constructor(props: any) {
        super(props);
        this.handleMovieSelect = this.handleMovieSelect.bind(this);
    }
    componentDidMount() {
        this.props.requestNowPlaying();
    }

    handleMovieSelect(movie:Movie){
        this.props.selectMovie(movie);
    }

    render() {
        const { nowPlaying ,selectedMovie, showModal, cast } = this.props;
        const isLoading = nowPlaying.length != 0;
        const content = isLoading ? <MoviesList collection={nowPlaying} onClick={this.handleMovieSelect} loading={false}/> : <Loading/>;
        const modal = showModal ? (<Modal>
            <MovieModal {...selectedMovie} cast={cast}  />
        </Modal>) : null;
        return (
            <React.Fragment>
                <section className="jumbotron mb-5">
                    <Search />
                </section>

                <section className="container mb-5">
                    <h4 className="section__heading">Now Playing</h4>
                    {content}
                </section>
                {modal}
            </React.Fragment>
        );
    }
}

export default connect(({nowPlaying,selectMovie,showMovie,cast}:any)=>({
    nowPlaying,
    showModal: showMovie,
    selectedMovie: selectMovie,
    cast
}),{requestNowPlaying,selectMovie})(NowPlaying)
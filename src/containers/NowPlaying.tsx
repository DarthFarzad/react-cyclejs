import React, {Component} from 'react';
import { connect } from 'react-redux';
import {requestNowPlaying, selectMovie} from "../actions";
import Modal from './Modal';
import Loading from '../components/loader';
import NowPlayingList from '../components/nowPlayingList';
import {Movie} from "../models/Movie";
import MovieModal from "../components/MovieModal";

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
        const { nowPlaying ,selectedMovie, showModal } = this.props;
        const isLoading = nowPlaying.length > 0;
        const content = isLoading ? <NowPlayingList collection={nowPlaying} onClick={this.handleMovieSelect} loading={isLoading}/> : <Loading/>;
        const modal = showModal ? (<Modal>
            <MovieModal {...selectedMovie} />
        </Modal>) : null;
        return (
            <React.Fragment>
                <section className="container mb-5">
                    <h4 className="section__heading">Now Playing</h4>
                    {content}
                </section>
                {modal}
            </React.Fragment>
        );
    }
}

export default connect(({nowPlaying,selectMovie,showMovie}:any)=>({
    nowPlaying,
    showModal: showMovie,
    selectedMovie: selectMovie
}),{requestNowPlaying,selectMovie})(NowPlaying)
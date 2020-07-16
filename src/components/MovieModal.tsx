import React, { Component } from 'react';
import {Genre} from "../models/Genre";
import {Cast as iCast} from "../models/Cast";
import Cast from '../components/cast';
import ReactPlayer from "react-player";

class MovieModal extends Component<any, any>{
    constructor(props:any) {
        super(props);
        this.state = {key: 'overview'};
        this.handleTabChange = this.handleTabChange.bind(this);
    }
    componentDidMount() {
        const root = document.documentElement;
        root.style.setProperty("--selected-movie-backdrop", 'url(https://image.tmdb.org/t/p/w500/' + this.props.backdrop_path+')');
    }

    componentWillUnmount() {
        const root = document.documentElement;
        root.style.setProperty("--selected-movie-backdrop", '');
    }

    handleTabChange(key: any){
        console.log('handle tab', key);
        this.setState({key: key});
    }

    render() {
        const {poster_path, genres, overview, cast, videos, release_dates} = this.props;
        const {key} = this.state;
        const poster = 'https://image.tmdb.org/t/p/w300/' + poster_path;
        const poster_description = 'Cover Art for ' + poster_path;
        let certification = "n/a";
        if (release_dates) {
            certification = release_dates.results[0].release_dates[0].certification;
        }

        const genre_pils = genres ? genres.map((genre:Genre) =><span key={genre.id} className="badge badge-pill badge-light">{genre.name}</span>): null;
        return (
            <React.Fragment>
                <section className="modal__container">
                    <img className="poster poster--small" src={poster} alt={poster_description}/>
                    <article className="modal__hero">
                        <h2 className="modal__title offset-sm-4 col d-flex align-items-center">{this.props.title}
                        <span className="badge badge-pill badge-warning u-text--small ml-3">{certification}</span>
                        </h2>
                        <div className="modal__rating">ratings</div>
                    </article>
                    <div className="container">
                        <div className="row">
                            <article className="col modal__genres">{genre_pils}</article>
                            <article className="col-8 modal__details">
                                <h5 className="detail-heading">Overview</h5>
                                <p>{overview}</p>
                                <h5 className="detail-heading">Cast</h5>
                                <div className="row">
                                    {cast ? cast.map((person:iCast)=> <Cast {...person} />) : null}
                                </div>
                                <h5 className="detail-heading">Trailers</h5>
                                {videos? videos.results.map((video:any) => (<div className="row">
                                    <div className="col mb-1">
                                        <ReactPlayer url={`https://www.youtube.com/watch?v=${video.key}`} width="490px"/>
                                    </div>
                                </div>)): null}
                            </article>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default MovieModal;
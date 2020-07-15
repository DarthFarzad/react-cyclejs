import React, { Component } from 'react';
import {Genre} from "../models/Genre";

class MovieModal extends Component<any, any>{
    constructor(props:any) {
        super(props);
    }
    componentDidMount() {
        const root = document.documentElement;
        root.style.setProperty("--selected-movie-backdrop", 'url(https://image.tmdb.org/t/p/w500/' + this.props.backdrop_path+')');
    }

    componentWillUnmount() {
        const root = document.documentElement;
        root.style.setProperty("--selected-movie-backdrop", '');
    }

    render() {
        const {poster_path, genres, overview} = this.props;
        const poster = 'https://image.tmdb.org/t/p/w300/' + poster_path;
        const poster_description = 'Cover Art for ' + poster_path;
        const genre_pils = genres ? genres.map((genre:Genre) =><span key={genre.id} className="badge badge-pill badge-light">{genre.name}</span>): null;
        return (
            <React.Fragment>
                <section className="modal__container">
                    <img className="poster poster--small" src={poster} alt={poster_description}/>
                    <article className="modal__hero">
                        <h2 className="title">{this.props.title}</h2>
                    </article>
                    <div className="container">
                        <div className="row modal__row">
                            <article className="col align-self-end">{genre_pils}</article>
                            <article className="col-7">
                                <p>{overview}</p>
                            </article>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default MovieModal;
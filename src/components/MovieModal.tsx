import React, { Component } from 'react';

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
        const {poster_path} = this.props;
        const poster = 'https://image.tmdb.org/t/p/w300/' + poster_path;
        const poster_description = 'Cover Art for ' + poster_path;
        return (
            <React.Fragment>
                <section className="modal__container">
                    <img className="poster" src={poster} alt={poster_description}/>
                    <article className="modal__hero">
                        <h2 className="title">{this.props.title}</h2>
                    </article>
                </section>
            </React.Fragment>
        );
    }
}

export default MovieModal;
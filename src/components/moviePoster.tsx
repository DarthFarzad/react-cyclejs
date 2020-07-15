import React from 'react';
import { Movie } from '../models/Movie';

enum Sizes {
    sm = 'w200',
    lg = 'w500',
};

interface Props {
    movie: Movie,
    size?: string
    onClick: (movie: Movie) => void
}

export default function MoviePoster({movie, size, onClick}: Props) {
    const sizes = [];
    // @ts-ignore
    const img_url = 'https://image.tmdb.org/t/p/' + Sizes[size] + '/' + movie.poster_path;
    const img_description = 'Cover Art for ' + movie.title;
    return (
        <article className="movie-card movie-card--fade d-inline-block float-none mr-2" onClick={() => onClick(movie)}>
            <img className="poster" src={img_url} alt={img_description}/>
            {movie.id} | {movie.title}
        </article>
    )
}
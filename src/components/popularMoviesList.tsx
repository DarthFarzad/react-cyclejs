import React from 'react';
import MoviePoster from './moviePoster';
import {Movie} from "../models/Movie";

interface Props {
    collection: Array<Movie>,
    loading: boolean,
    onClick: (movie:Movie) => void
}

export default function PopularMoviesList({collection, loading, onClick}: Props) {
    return (
        <div style={{opacity: loading ? 0.3 : 1 }} className="scaffold scaffold--horizontal-scroll">
            <div className="row d-inline-block float-none">
                {collection.map((item:Movie) => <MoviePoster key={item.id} movie={item} size="lg" onClick={onClick} />)}
            </div>
        </div>
    )
}
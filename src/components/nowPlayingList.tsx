import React from 'react';
import MoviePoster from './moviePoster';
import {Movie} from "../models/Movie";

interface Props {
    collection: Array<Movie>,
    loading: boolean,
    onClick: (movie:Movie) => void
}

export default function NowPlayingList({collection, loading, onClick}: Props) {
    return (
        <div className="scaffold">
    <div className="row">
        {collection.map((item:Movie) => <MoviePoster key={item.id} movie={item} size="lg" onClick={onClick} />)}
    </div>
    </div>
)
}
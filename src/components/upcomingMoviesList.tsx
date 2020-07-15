import React from 'react';
import '../scss/poster.scss';
import {Movie} from "../models/Movie";

interface Props {
    collection: Array<Movie>,
    loading: boolean
}

export default function UpcomingMoviesList({collection, loading}: Props) {
    return (
        <ul style={{opacity: loading ? 0.3 : 1 }}>
    {collection.map((item:Movie) => (
        <li className="poster" key={item.id}>{item.title}</li>
    ))}
    </ul>
)
}
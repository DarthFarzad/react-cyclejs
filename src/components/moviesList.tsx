import React from 'react';
import {Movie} from "../models/Movie";

interface Props {
    collection: Array<Movie>,
    loading: boolean,
    onClick: (movie:Movie) => void
}

export default function MoviesList({collection, loading, onClick}: Props) {
    return (
        <div style={{opacity: loading ? 0.3 : 1 }} className="scaffold scaffold--horizontal-scroll">
            <div className="row">
                {collection.map((movie:Movie) => (
                    <div key={movie.id} className="card outline-0 col-2 ml-1 mr-1 mb-2 p-0" onClick={()=> onClick(movie)}>
                        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} className="card-img-top" alt={`Poster for ${movie.title}`} />
                        <div className="card-body p-1">
                            <h5 className="card-title text-left text-wrap">{movie.title}</h5>
                            <p className="card-text text-muted text-left">{movie.release_date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
import React, { useState } from 'react';
import {Cast as iCast} from "../models/Cast";
import Profile from '../profile.png';

export default function Cast(cast:iCast) {
    const [src, setImagePath] = useState('https://image.tmdb.org/t/p/w300/' + cast.profile_path);
    // const image_path = 'https://image.tmdb.org/t/p/w300/' + cast.profile_path;
    const description = "Profile image of "+ cast.name;
    return (
        <div className="avatar ml-1 mr-1 mb-2">
            <a href="#" data-tooltip={cast.name} data-placement="top">
                <img src={src} alt={description} onError={() => setImagePath(Profile)}/>
            </a>
        </div>
    )
}
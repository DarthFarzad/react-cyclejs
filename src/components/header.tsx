import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(){
    return (
        <header>
            <nav className="navbar navbar-expand-lg">
                <a href="#" className="navbar-brand">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/now-playing">Now Playing</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Popular</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
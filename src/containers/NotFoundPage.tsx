import React from 'react';
import {Link} from "react-router-dom";

export default function NotFoundPage() {
    return (
        <section className="four-oh-four">
            <h2 className="four-oh-four__message">
                The page you were looking for could not be found.
            </h2>
            <h1 className="four-oh-four__code">four oh four</h1>
            <p className="four-oh-four__actions">
                Please go home  <Link className="nav-link" to="/">Home</Link>
            </p>
        </section>);
}
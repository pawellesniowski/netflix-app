import React from 'react';
import Button from "../../components/ui-elements/Button/Button";
import './NotFound.scss';
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found-container">
            <h1>Page not found</h1>
            <Link to="/">
                <Button message="Go Home"/>
            </Link>
        </div>
    );
};

export default NotFound;

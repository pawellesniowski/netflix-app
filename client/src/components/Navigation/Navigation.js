import React from 'react';

import './Navigation.scss';
import Button from "../ui-elements/Button/Button";
import {Link} from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navigation" data-cy="navigation">
        <ul>
            <li>
                <Link to="/">
                    <Button message="New search"/>
                </Link>
            </li>
        </ul>

    </nav>
  )
};

export default Navigation;

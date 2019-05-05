import React from 'react';
import './Header.scss';
import logo from "../../common/images/netflix-logo.png";

const Header = () => {
    return (
        <header className="header" data-cy="header">
            <div className="logo-container">
                    <img className="logo" src={logo} alt="netflix logo"/>
            </div>
        </header>
    );
};

export default Header;

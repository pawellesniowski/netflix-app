import React from 'react';

import './Navigation.scss';
import Button from "../ui-elements/Button/Button";

const Navigation = () => {
  return (
    <nav className="navigation" data-cy="navigation">
      <Button message="New search"/>
    </nav>
  )
};

export default Navigation;

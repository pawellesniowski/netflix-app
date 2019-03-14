import React from 'react';
import Button from "../ui-elements/Button/Button";
import './SearchPanel.scss';

const SearchPanel = () => {
  return (
    <div className="search-panel">
      <label htmlFor="titleInput">
        <span className="label-text">Find Your Movie</span>
        <input className="input" placeholder="Find Your Movie"/>
      </label>
      <div className="search-option-container">
        <span className="search-option-text">Search by</span>
        <Button message="title" mode="default"/>
        <Button message="genre" mode="default"/>
        <Button message="search" mode="submit"/>
      </div>
    </div>
  );
};

export default SearchPanel;

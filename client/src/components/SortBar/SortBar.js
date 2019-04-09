import React from 'react';
import './SortBar.scss';

const SortBar = ({moviesNumber=0}) => {
  return (
    <div className="sort-bar" data-cy="sort-bar">
      <span className="sort-bar-info">{moviesNumber} movies found</span>
      <div className="sort-bar-menu">
        <span>Sort by</span>
        <ul className="sort-bar-menu-options">
          <li key="release-date" className="sort-bar-menu-item">release date</li>
          <li key="rating" className="sort-bar-menu-item">rating</li>
        </ul>
      </div>
    </div>
  );
};

export default SortBar;

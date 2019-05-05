import React from 'react';
import './SortBar.scss';

const SortBar = ({moviesNumber = 0, sorting, sortedBy}) => {
    const handleSorting = (sortBy) => () => {
        sorting(sortBy);
    };
    return (
        <div className="sort-bar" data-cy="sort-bar">
          <span className="sort-bar-info">
              {moviesNumber === 0
                  ? (<>no movies found</>)
                  : (<>{moviesNumber} movies found</>)}
          </span>
            {moviesNumber === 0
                ? null
                : (
                    <div className="sort-bar-menu">
                        <span>Sort by</span>
                        <ul className="sort-bar-menu-options">
                            <li
                                key="release-date"
                                className={`sort-bar-menu-item ${sortedBy === "release_date" ? "active" : ""}`}
                                onClick={handleSorting("release_date")}
                            >release date
                            </li>
                            <li
                                key="rating"
                                className={`sort-bar-menu-item ${sortedBy === "vote_count" ? "active" : ""}`}
                                onClick={handleSorting("vote_count")}
                            >rating
                            </li>
                        </ul>
                    </div>
                )}

        </div>
    );
};

export default (SortBar);

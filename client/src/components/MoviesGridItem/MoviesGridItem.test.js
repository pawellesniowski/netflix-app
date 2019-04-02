import React from 'react';
import {shallow} from 'enzyme';
import MoviesGridItem from './MoviesGridItem';

describe("MoviesGridItem Component", () => {
    let component;
    beforeEach(() => {
        component = shallow(<MoviesGridItem/>);
    });

    it("Renders the container", () => {
        expect(component.find('[data-cy="movies-grid-item"]')).toHaveLength(1);
    });

    it("Renders all the elements", () => {
        expect(component.find('.movies-grid-item-image')).toHaveLength(1);
        expect(component.find('.movies-grid-item-header')).toHaveLength(1);
        expect(component.find('.movies-grid-item-header')).toHaveLength(1);
        expect(component.find('MovieTitle')).toHaveLength(1);
        expect(component.find('MovieReleaseDate')).toHaveLength(1);
        expect(component.find('MovieGenres')).toHaveLength(1);
    });

    it("Matches the snapshot", () => {
        expect(component).toMatchSnapshot();
    });
});

import React from 'react';
import { shallow } from 'enzyme';
import MovieTitle from './MovieTitle';

describe("MovieTitle Component with props", () => {
    let component;
    beforeEach(() => {
        component = shallow(<MovieTitle title="Rambo"/>);
    });

    it("Renders the container", () => {
        expect(component.find('[data-cy="movie-title"]')).toHaveLength(1);
    });

    it("Renders correct title", () => {
        expect(component.text()).toBe("Rambo");
    });

    test("Matches the snapshot", () => {
        expect(component).toMatchSnapshot();
    });
});

describe("MovieTitle  with NO props", () => {
    let component;
    beforeEach(() => {
        component = shallow(<MovieTitle />);
    });

    it("Renders the container", () => {
        expect(component.find('[data-cy="movie-title"]')).toHaveLength(1);
    });

    it("Renders correct title", () => {
        expect(component.text()).toBe("");
    });

    test("Matches the snapshot", () => {
        expect(component).toMatchSnapshot();
    });

});

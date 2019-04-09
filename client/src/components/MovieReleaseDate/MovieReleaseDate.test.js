import React from "react";
import {shallow} from 'enzyme';
import MovieReleaseDate from "./MovieReleaseDate";


describe("MovieReleaseDate Component", () => {
    const releaseDate = "1999-02-02";
    let component;
    beforeEach(() => {
        component = shallow(<MovieReleaseDate release_date={releaseDate}/>);
    });

    it("Renders the container", () => {
        expect(component.find('[data-cy="movie-release-date"]')).toHaveLength(1);
    });

    it("Shows correct date", () => {
        expect(component.text()).toBe("1999");
    });

    it("Matches the snapshot", () => {
        expect(component).toMatchSnapshot();
    });

});

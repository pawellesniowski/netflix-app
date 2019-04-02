import React from 'react';
import {shallow} from "enzyme/build";
import SortBar from "./SortBar";

describe('SortBar Component', () => {
    let component;
    beforeEach(() => {
        component = shallow(<SortBar/>);
    });

    it("Should have container", () => {
        expect(component.find('[data-cy="sort-bar"]')).toHaveLength(1);
    });

    test("Snapshot test", () => {
        expect(component).toMatchSnapshot();
    });
});

describe('SortBar Component with props', () => {
    it('Shows message "0 movies found" if no props send', () => {
        const component = shallow(<SortBar />);
        expect(component.text()).toMatch("0 movies foundSort");
    });

    it('Shows message "3 movies found" if no props send', () => {
        const component = shallow(<SortBar moviesNumber="3"/>);
        expect(component.text()).toMatch("3 movies foundSort");
    });
});


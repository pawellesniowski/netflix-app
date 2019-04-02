import React from 'react';
import {shallow} from "enzyme/build";
import SearchPanel from "./SearchPanel";

describe("SearchPanel Component", () => {
    let component;
    beforeEach(() => {
        component = shallow(<SearchPanel/>);
    });

    it("Renders the container", () => {
        expect(component.find('[data-cy="search-panel"]')).toHaveLength(1);
    });

    it("Renders all the elements", () => {
        expect(component.find('[data-cy="search-input"]')).toHaveLength(1);
        expect(component.find('.label-text')).toHaveLength(1);
        expect(component.find('.input')).toHaveLength(1);
        expect(component.find('[data-cy="search-option-container"]')).toHaveLength(1);
        expect(component.find('.search-option-text')).toHaveLength(1);
        expect(component.find('Button')).toHaveLength(3);
    });

    it("Matches the snapshot", () => {
        expect(component).toMatchSnapshot();
    });
});

import React from 'react';
import {shallow} from 'enzyme';
import Navigation from "./Navigation";

describe("Navigation Component", () => {
    let component;
    beforeEach(() => {
        component = shallow(<Navigation/>);
    });

    it("Renders the container", () => {
       expect(component.find('[data-cy="navigation"]')).toHaveLength(1);
    });

    it("Renders children elements", () => {
        expect(component.find('Button')).toHaveLength(1);
    });

    it("Renders Navigation Component", () => {
        expect(component).toMatchSnapshot();
    });
});



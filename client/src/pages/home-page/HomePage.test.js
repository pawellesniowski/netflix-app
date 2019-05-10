import React from 'react';
import {shallow} from "enzyme/build";
import HomePage from "./HomePage";


describe('HomePage snapshot', () => {
    it("Renders HomePage Component", () => {
        const component = shallow(<HomePage />);
        expect(component).toMatchSnapshot();
    });
});
// HomePage content tests done in cypress integration.

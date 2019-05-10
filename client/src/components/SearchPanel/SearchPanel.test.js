import React from 'react';
import {shallow} from "enzyme/build";
import {SearchPanel} from "./SearchPanel";

describe("SearchPanel Component", () => {
    let component;
    beforeEach(() => {
        component = shallow(<SearchPanel/>);
    });
    it("Matches the snapshot", () => {
        expect(component).toMatchSnapshot();
    });
});

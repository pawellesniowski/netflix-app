import React from 'react';
import App from './App';
import {shallow} from "enzyme"

describe('App Component', () => {
    let component;
    beforeEach(() => {
        component = shallow(<App/>);
    });

    it('Renders App Component Snapshot', () => {
        expect(component).toMatchSnapshot();
    });
});

import React from 'react';
import {shallow} from "enzyme/build";
import PageLayout from "./PageLayout";

it("Renders PageLayout Component", () => {
  const component = shallow(<PageLayout/>);
  expect(component).toMatchSnapshot();
});

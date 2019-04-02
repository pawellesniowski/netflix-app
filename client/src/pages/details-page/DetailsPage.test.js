import React from 'react';
import {shallow} from "enzyme/build";
import DetailsPage from "./DetailsPage";

it("Renders DetailsPage Component", () => {
  const component = shallow(<DetailsPage/>);
  expect(component).toMatchSnapshot();
});

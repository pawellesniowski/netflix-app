import React from "react";
import {shallow} from "enzyme/build";
import Header from "./Header";


describe("MoviesGridItem Component", () => {
  let component;
  beforeEach(() => {
    component = shallow(<Header />);
  });

  it("Renders the container", () => {
    expect(component.find('[data-cy="header"]')).toHaveLength(1);
  });

  it("Renders all the elements", () => {
    expect(component.find('.logo-container')).toHaveLength(1);
    expect(component.find('.logo')).toHaveLength(1);
  });

  it("Matches the snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
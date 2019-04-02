import React from "react";
import Footer from "./Footer";
import {shallow} from "enzyme";

describe("Footer Component", () => {
  let component;
  beforeEach(() => {
    component = shallow(<Footer />);
  });

  it("Renders the container", () => {
    expect(component.find('[data-cy="footer"]')).toHaveLength(1);
  });

  it("Matches the snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});

import React from 'react';
import {shallow} from "enzyme/build";
import HomePage from "./HomePage";
import moviesMock from "../../../__mocks__/moviesMock";

it("Renders HomePage Component", (done) => {
  global.fetch = () => Promise.resolve({
    json: () => Promise.resolve({
      data: moviesMock
    })
  });
  const component = shallow(<HomePage/>);
  setTimeout(() => {
    expect(component.state('movies').length).toEqual(3);
    expect(component).toMatchSnapshot();
    expect(component.state('movies')).toEqual(moviesMock);
    done();
  }, 0)
});

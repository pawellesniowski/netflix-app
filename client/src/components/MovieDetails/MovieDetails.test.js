import React from "react";
import {shallow} from "enzyme";
import movieMock from "../../../__mocks__/movieMock"
import MovieDetails from "./MovieDetails";


describe("MovieDetails Component", () => {
  let component;
  beforeEach(() => {
    component = shallow(<MovieDetails selectedMovie={movieMock}/>);
  });

  it("Renders the container", () => {
    expect(component.find('[data-cy="movie-details"]')).toHaveLength(1);
  });

  it("Renders all the elements", () => {
    expect(component.find('.left-side-container')).toHaveLength(1);
    expect(component.find('[data-cy="movie-details-poster"]')).toHaveLength(1);
    expect(component.find('.right-side-container')).toHaveLength(1);
    expect(component.find('.title')).toHaveLength(1);
    expect(component.find('.category')).toHaveLength(1);
    expect(component.find('.production-year')).toHaveLength(1);
    expect(component.find('.duration')).toHaveLength(1);
    expect(component.find('.description')).toHaveLength(1);
  });

  it("Matches the snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});

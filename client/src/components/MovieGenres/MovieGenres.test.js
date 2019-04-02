import React from "react";
import { shallow } from 'enzyme';
import MovieGenres from "./MovieGenres";


describe("MovieGenres with props", () => {
  const genres = ["drama", "horror"];
  let component;
  beforeEach(() => {
    component = shallow(<MovieGenres genres={genres}/>);
  });

  it("Displays list of genres", () => {
    expect(component.find('.movie-genres')).toHaveLength(1);
  });

  it("List has correct number of items", () => {
    expect(component.find('.item')).toHaveLength(genres.length);
  });

  it("Match the snapshot", () => {
    expect(component).toMatchSnapshot();
  });

});

describe("MovieGenres with NO props", () => {
  let component;
  beforeEach(() => {
    component = shallow(<MovieGenres />);
  });

  it("Displays list of genres", () => {
    expect(component.find('.movie-genres')).toHaveLength(1);
  });

  it("List has correct number of items", () => {
    expect(component.find('.item')).toHaveLength(0);
  });

  it("Match the snapshot", () => {
    expect(component).toMatchSnapshot();
  });

});
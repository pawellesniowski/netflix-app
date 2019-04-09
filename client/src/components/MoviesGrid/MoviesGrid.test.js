import React from 'react';
import moviesMock from '../../../__mocks__/moviesMock';

import MoviesGrid from './MoviesGrid';
import {shallow} from "enzyme";


describe('MoviesGrid component', () => {
  let component;
  beforeEach(() => {
     component = shallow(<MoviesGrid movies={moviesMock}/>);
  });

  it("Renders the container", () => {
    expect(component.find('[data-cy="movies-grid"]')).toHaveLength(1);
  });

  it('Renders MovieGrid Component with movie list', () => {
    expect(component.find('ul MoviesGridItem')).toHaveLength(3);
  });
});

describe('MoviesGrid component without props', () => {
  let component;
  beforeEach(() => {
    component = shallow(<MoviesGrid />);
  });

  it('Renders MovieGrid Component without any MovieListItems', () => {
    expect(component.find('ul MoviesGridItem')).toHaveLength(0);
  });
});

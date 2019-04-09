import React from 'react';
import { shallow } from 'enzyme';

import ErrorBoundary from './ErrorBoundary';
import Footer from '../Footer/Footer';

describe('Error Boundary Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ErrorBoundary><Footer/></ErrorBoundary>);
  });

  test("Snapshot test", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Should display error message is displayed when hasError is true", () => {
    wrapper.setState({ hasError: true });
    expect(wrapper.text()).toEqual('Something went wrong')
  });
});

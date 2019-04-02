//expect(element.html()).toEqual('<button class="btn">Search</button>');

import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button Component', () => {
  test("Snapshot test", () => {
    const button = shallow(<Button />);
    expect(button).toMatchSnapshot();
  });

  it("Should display 'submit' message by default", () => {
    const button = shallow(<Button />);
    expect(button.html()).toEqual('<button class="button option-button">Submit</button>');
  });

  it("Should have label like given in props", () => {
    const button = shallow(<Button message="go"/>);
    expect(button.html()).toEqual('<button class="button option-button">go</button>');
  });
});

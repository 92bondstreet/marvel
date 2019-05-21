import React from 'react';
import Navigation from './index';
import {cleanup, render} from 'react-testing-library';
import 'jest-dom/extend-expect';

afterEach(cleanup);

describe('<Navigation />', () => {
  it('should notify the right menu', () => {
    const onClick = jest.fn();

    const {container} = render(<Navigation content='Home' onClick={onClick} />);
    const tab = container.querySelector('.uik-tab__item');

    tab.click();

    expect(onClick).toBeCalled();
  });
});

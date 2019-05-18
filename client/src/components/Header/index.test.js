import React from 'react';
import Header from './index';
import {cleanup, render} from 'react-testing-library';
import 'jest-dom/extend-expect';

afterEach(cleanup);

describe('<Header />', () => {
  it('should render the Header section', () => {
    const {getByText} = render(<Header />);

    expect(getByText(/Marvel characters/)).toBeInTheDocument();
  });
});

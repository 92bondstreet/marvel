import React from 'react';
import Header from './index';
import {cleanup, render} from 'react-testing-library';
import 'jest-dom/extend-expect';

afterEach(cleanup);

describe('<Header />', () => {
  it('should render the Header section', () => {
    const {getByText} = render(<Header total={1234}/>);

    expect(getByText(/Marvel characters/)).toBeInTheDocument();
  });

  it('should render the total tag', () => {
    const {getByText} = render(<Header total={1234}/>);

    expect(getByText(/1234/)).toBeInTheDocument();
  });
});

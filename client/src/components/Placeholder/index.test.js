import React from 'react';
import Placeholder from './index';
import {cleanup, render} from 'react-testing-library';
import 'jest-dom/extend-expect';

afterEach(cleanup);

const LIMIT = 25;

describe('<Placeholder />', () => {
  it('should render a grid view of placeholder', () => {
    const {getAllByTestId} = render(<Placeholder limit={LIMIT}/>);
    const widgets = getAllByTestId('placeholder-widget');

    expect(widgets.length).toBe(LIMIT);
  });
});

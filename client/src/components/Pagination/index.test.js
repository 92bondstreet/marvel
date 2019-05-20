import React from 'react';
import Pagination from './index';
import {cleanup, render} from 'react-testing-library';
import 'jest-dom/extend-expect';

afterEach(cleanup);

const ITEMS = [...Array(100).keys()].map(i => ({
  'page': i + 1
}));

describe('<Pagination />', () => {
  it('should render the Pagination section with the default click-to-action', () => {
    const onChangePage = jest.fn();
    const {getByText, queryByText} = render(<Pagination items={ITEMS} onChangePage={onChangePage} />);

    expect(getByText(/1/)).toBeInTheDocument();
    expect(getByText(/2/)).toBeInTheDocument();
    expect(getByText(/3/)).toBeInTheDocument();
    expect(getByText(/4/)).toBeInTheDocument();
    expect(queryByText(/9/)).toBe(null);
  });
});

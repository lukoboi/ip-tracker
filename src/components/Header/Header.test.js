import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

describe('when <Header /> renders', () => {
  it('should render a heading', () => {
    const { getByText } = render(<Header />);
    const Heading = getByText(/ip address tracker/i);
    expect(Heading.textContent).toBe('IP Address Tracker');
  });
});

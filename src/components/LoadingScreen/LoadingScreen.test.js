import React from 'react';
import { render } from '@testing-library/react';
import LoadingScreen from './LoadingScreen';

describe('when <LoadingScreen /> renders', () => {
  it('should render a loading message', () => {
    const { getByText } = render(<LoadingScreen />);
    const LoadingMessage = getByText(/fetching your ip/i);
    expect(LoadingMessage).toBeInTheDocument();
  });
});

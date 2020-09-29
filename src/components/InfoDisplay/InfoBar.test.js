import React from 'react';
import { render } from '@testing-library/react';
import InfoBar from './InfoBar';

describe('when <InfoBar /> renders', () => {
  it('should render the title that is passed', () => {
    const mockTitle = 'my title';
    const { getByText } = render(<InfoBar title={mockTitle} />);
    const Title = getByText(mockTitle);
    expect(Title).toBeInTheDocument();
  });

  it('should render the text that is passed', () => {
    const mockText = 'my text';
    const { getByText } = render(<InfoBar text={mockText} />);
    const Text = getByText(mockText);
    expect(Text).toBeInTheDocument();
  });
});

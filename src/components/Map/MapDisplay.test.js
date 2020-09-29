import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MapDisplay from './MapDisplay';

describe('when <MapDisplay /> renders', () => {
  it('should display a popup, when clicked showing the lat, lng coordinates', () => {
    const mockLocation = { lat: 10, lng: 20 };
    const { getByRole, getByText } = render(
      <MapDisplay location={mockLocation} />
    );

    const Popup = getByRole('img');
    userEvent.click(Popup);

    const PopupText = getByText(/position/i);
    expect(PopupText.textContent).toBe('Position is Lat: 10 Lng: 20');
  });
});

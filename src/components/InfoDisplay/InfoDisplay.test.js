import React from 'react';
import { render } from '@testing-library/react';
import { TEST_INFO_BARS } from '../../Test/TestData/MockInfoBars';
import InfoDisplay from './InfoDisplay';

describe('when <InfoDisplay /> renders', () => {
  describe('and the some InfoBars are passed', () => {
    it('should render the InfoBars that are passed', () => {
      const { queryAllByTestId, getByText } = render(
        <InfoDisplay infoBars={TEST_INFO_BARS} />
      );

      const InfoBars = queryAllByTestId('InfoBar');
      expect(InfoBars.length).toBe(4);

      const title1 = getByText(/ip address/i);
      const title2 = getByText(/location/i);
      const title3 = getByText(/timezone/i);
      const title4 = getByText(/isp/i);

      expect(title1.textContent).toBe('ip address');
      expect(title2.textContent).toBe('location');
      expect(title3.textContent).toBe('timezone');
      expect(title4.textContent).toBe('isp');

      const text1 = getByText(/value1/i);
      const text2 = getByText(/value2/i);
      const text3 = getByText(/value3/i);
      const text4 = getByText(/value4/i);

      expect(text1.textContent).toBe('value1');
      expect(text2.textContent).toBe('value2');
      expect(text3.textContent).toBe('value3');
      expect(text4.textContent).toBe('value4');
    });
  });

  describe('and no InfoBars are passed', () => {
    it('should not render the InfoDisplay', () => {
      const { queryByTestId } = render(<InfoDisplay />);
      const InfoDisplayComponent = queryByTestId('InfoDisplay');
      expect(InfoDisplayComponent).toBeNull();
    });
  });
});

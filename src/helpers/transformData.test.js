import { IP_DATA } from '../Test/TestData/MockIpData';
import { extractIpData } from './transformData';

describe('when extractIpData is called with data', () => {
  it('should format the data correctly', () => {
    const result = extractIpData(IP_DATA);

    expect(result.location.lat).toBe(37.4223);
    expect(result.location.lng).toBe(-122.085);

    expect(result.infoBars.length).toBe(4);

    expect(result.infoBars[0].title).toBe('ip address');
    expect(result.infoBars[1].title).toBe('location');
    expect(result.infoBars[2].title).toBe('timezone');
    expect(result.infoBars[3].title).toBe('isp');

    expect(result.infoBars[0].value).toBe('8.8.8.8');
    expect(result.infoBars[1].value).toBe('Mountain View, California, US');
    expect(result.infoBars[2].value).toBe('UTC -07:00');
    expect(result.infoBars[3].value).toBe('Google LLC');
  });
});

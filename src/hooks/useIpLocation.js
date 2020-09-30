import { useEffect, useState } from 'react';
import { IP_CURRENT_ENDPOINT, IP_LOCATION_ENDPOINT } from '../config';
import { extractIpData } from '../helpers/transformData';

const useIpLocation = () => {
  const [startLoading, setStartLoading] = useState(true);
  const [startError, setStartError] = useState(null);

  const [loadingLocation, setLoadingLocation] = useState(false);
  const [locationError, setLocationError] = useState(null);
  const [locationData, setLocationData] = useState(null);

  const fetchCurrentIp = () =>
    fetch(`${IP_CURRENT_ENDPOINT}?format=json`).then((res) => res.json());

  const fetchIpLocation = (ipAddress) =>
    fetch(
      `${IP_LOCATION_ENDPOINT}?apiKey=${process.env.REACT_APP_IP_LOCATION_API_KEY}&ipAddress=${ipAddress}`
    ).then((res) => res.json());

  const getIpLocationData = async (ipAddress) => {
    setLoadingLocation(true);
    setLocationError(null);
    try {
      const locationResponse = await fetchIpLocation(ipAddress);

      if (locationResponse.code === 422)
        throw new Error('Incorrect IP address');

      const extractedLocationData = extractIpData(locationResponse);
      setLocationData(extractedLocationData);
    } catch (error) {
      setLocationError(error.message);
    }
    setLoadingLocation(false);
  };

  const onStartUp = async () => {
    setStartError(null);
    setStartLoading(true);
    try {
      const { ip } = await fetchCurrentIp();
      getIpLocationData(ip);
    } catch (error) {
      setStartError(error.message);
    }
    setStartLoading(false);
  };

  useEffect(() => {
    onStartUp();
  }, []);

  return {
    startLoading,
    startError,
    loadingLocation,
    locationError,
    locationData,
    getIpLocationData,
  };
};

export default useIpLocation;

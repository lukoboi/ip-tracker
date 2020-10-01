import { useEffect, useReducer } from 'react';
import { IP_CURRENT_ENDPOINT, IP_LOCATION_ENDPOINT } from '../config';
import { extractIpData } from '../helpers/transformData';
import { useIpLocationReducer } from './useIpLocationReducer';

const useIpLocation = () => {
  const initialState = {
    startLoading: true,
    startError: null,
    loadingLocation: false,
    locationError: null,
    locationData: null,
    getIpLocationData: null,
  };

  const [
    { startLoading, startError, loadingLocation, locationError, locationData },
    dispatch,
  ] = useReducer(useIpLocationReducer, initialState);

  const fetchCurrentIp = () =>
    fetch(`${IP_CURRENT_ENDPOINT}?format=json`).then((res) => res.json());

  const fetchIpLocation = (ipAddress) =>
    fetch(
      `${IP_LOCATION_ENDPOINT}?apiKey=${process.env.REACT_APP_IP_LOCATION_API_KEY}&ipAddress=${ipAddress}`
    ).then((res) => res.json());

  const getIpLocationData = async (ipAddress) => {
    dispatch({ type: 'ON_FETCH_LOCATION_BEGIN' });
    try {
      const locationResponse = await fetchIpLocation(ipAddress);

      if (locationResponse.code === 422)
        throw new Error('Incorrect IP address');

      const extractedLocationData = extractIpData(locationResponse);

      dispatch({
        type: 'ON_FETCH_LOCATION_SUCCESS',
        locationData: extractedLocationData,
      });
    } catch (error) {
      dispatch({ type: 'ON_FETCH_LOCATION_FAILURE', message: error.message });
    }
  };

  const onStartUp = async () => {
    dispatch({ type: 'ON_START_UP_BEGIN' });
    try {
      const { ip } = await fetchCurrentIp();
      getIpLocationData(ip);
    } catch (error) {
      dispatch({ type: 'ON_START_FAILURE', message: error.message });
    }
    dispatch({ type: 'ON_START_UP_SUCCESS' });
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

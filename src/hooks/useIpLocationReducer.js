export const useIpLocationReducer = (state, action) => {
  switch (action.type) {
    case 'ON_START_UP_BEGIN': {
      return { ...state, startError: null, startLoading: true };
    }
    case 'ON_START_FAILURE': {
      return { ...state, startError: action.message };
    }
    case 'ON_START_UP_SUCCESS': {
      return { ...state, startLoading: false };
    }
    case 'ON_FETCH_LOCATION_BEGIN': {
      return { ...state, loadingLocation: true, locationError: null };
    }
    case 'ON_FETCH_LOCATION_SUCCESS': {
      return {
        ...state,
        locationData: action.locationData,
        loadingLocation: false,
      };
    }
    case 'ON_FETCH_LOCATION_FAILURE': {
      return {
        ...state,
        locationError: action.message,
        loadingLocation: false,
      };
    }
    default:
      return state;
  }
};

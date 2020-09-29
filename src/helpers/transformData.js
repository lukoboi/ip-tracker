export const extractIpData = ({
  ip,
  location: { city, region, country, lat, lng, timezone },
  isp,
}) => {
  return {
    location: {
      lat,
      lng,
    },
    infoBars: [
      { title: 'ip address', value: ip },
      { title: 'location', value: `${city}, ${region}, ${country}` },
      { title: 'timezone', value: `UTC ${timezone}` },
      { title: 'isp', value: isp },
    ],
  };
};

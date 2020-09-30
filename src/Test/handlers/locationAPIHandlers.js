import { rest } from 'msw';
import { IP_LOCATION_ENDPOINT } from '../../config';
import { LOCATION_DATA } from '../TestData/MockLocationData';
import { LOCATION_FAIL } from '../TestData/MockLocationFail';

export const LOCATION_SUCCESS = rest.get(
  `${IP_LOCATION_ENDPOINT}`,
  (req, res, ctx) => res(ctx.json(LOCATION_DATA))
);

export const LOCATION_FAILURE = rest.get(
  `${IP_LOCATION_ENDPOINT}`,
  (req, res, ctx) => res(ctx.json(LOCATION_FAIL))
);

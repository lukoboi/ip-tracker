import { rest } from 'msw';
import { IP_CURRENT_ENDPOINT } from '../../config';
import { TEST_CURRENT_IP } from '../TestData/MockCurrentIp';

export const CURRENT_IP_SUCCESS = rest.get(
  `${IP_CURRENT_ENDPOINT}`,
  (req, res, ctx) => res(ctx.json(TEST_CURRENT_IP))
);

export const CURRENT_IP_FAILURE = rest.get(
  `${IP_CURRENT_ENDPOINT}`,
  (req, res, ctx) => res(ctx.status(500))
);

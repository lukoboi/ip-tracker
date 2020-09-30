import React from 'react';
import { setupServer } from 'msw/node';
import { render, waitForElement } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  CURRENT_IP_SUCCESS,
  CURRENT_IP_FAILURE,
} from './Test/handlers/currentIpAPIHandlers';
import {
  LOCATION_SUCCESS,
  LOCATION_FAILURE,
} from './Test/handlers/locationAPIHandlers';
import App from './App';

const server = setupServer();

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe('when <App /> renders', () => {
  it('should render the loading screen', () => {
    server.use(CURRENT_IP_SUCCESS);
    server.use(LOCATION_SUCCESS);
    const { getByTestId } = render(<App />);
    const LoadingScreen = getByTestId('LoadingScreen');
    expect(LoadingScreen).toBeInTheDocument();
  });

  describe('and the current IP has been fetched', () => {
    it('should render the Header and InfoDisplay screen after loading', async () => {
      server.use(CURRENT_IP_SUCCESS);
      server.use(LOCATION_SUCCESS);

      const { getByTestId } = render(<App />);
      const Header = await waitForElement(() => getByTestId('Header'));
      const InfoDisplay = await waitForElement(() =>
        getByTestId('InfoDisplay')
      );
      expect(Header).toBeInTheDocument();
      expect(InfoDisplay).toBeInTheDocument();
    });
  });

  describe('and the current IP fails to fetch', () => {
    it('should render the Header and no display and no marker on the MapDisplay', async () => {
      server.use(CURRENT_IP_FAILURE);
      server.use(LOCATION_SUCCESS);
      const { getByTestId, queryByTestId, queryByRole } = render(<App />);
      const Header = await waitForElement(() => getByTestId('Header'));
      const InfoDisplay = queryByTestId('InfoDisplay');
      const Marker = queryByRole('img');

      expect(Header).toBeInTheDocument();
      expect(InfoDisplay).toBeNull();
      expect(Marker).toBeNull();
    });
  });

  describe('and a correct IP is searched', () => {
    it('should show a loading icon', async () => {
      server.use(CURRENT_IP_SUCCESS);
      server.use(LOCATION_SUCCESS);

      const { getByPlaceholderText, getByTestId } = render(<App />);
      const Input = await waitForElement(() =>
        getByPlaceholderText(/enter an ip address/i)
      );

      userEvent.type(Input, '8.8.8.8');

      const Button = getByTestId('InputButton');

      userEvent.click(Button);

      const Spinner = await waitForElement(() => getByTestId('Spinner'));
      expect(Spinner).toBeInTheDocument();
    });

    it('should display the IP location information on the InfoDisplay', async () => {
      server.use(CURRENT_IP_SUCCESS);
      server.use(LOCATION_SUCCESS);

      const { getByPlaceholderText, getByTestId, getAllByTestId } = render(
        <App />
      );

      const Input = await waitForElement(() =>
        getByPlaceholderText(/enter an ip address/i)
      );
      userEvent.type(Input, '8.8.8.8');

      const Button = getByTestId('InputButton');
      userEvent.click(Button);

      const InfoBars = await waitForElement(() => getAllByTestId('InfoBar'));
      expect(InfoBars.length).toBe(4);
    });
  });

  describe('and an invalid IP is searched', () => {
    it('should show an error message', async () => {
      server.use(CURRENT_IP_SUCCESS);
      server.use(LOCATION_FAILURE);

      const { getByPlaceholderText, getByTestId, getByText } = render(<App />);
      const Input = await waitForElement(() =>
        getByPlaceholderText(/enter an ip address/i)
      );
      userEvent.type(Input, 'not an ip');

      const Button = getByTestId('InputButton');
      userEvent.click(Button);

      const ErrorMessage = await waitForElement(() =>
        getByText(/location error/i)
      );
      expect(ErrorMessage).toBeInTheDocument();
    });
  });
});

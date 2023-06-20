import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import store from '../redux/index';
import MyReservations from '../pages/MyReservations';

describe('MyReservations', () => {
  let component;

  beforeEach(() => {
    component = render(
      <Provider store={store}>
        <BrowserRouter>
          <MyReservations />
        </BrowserRouter>
      </Provider>,
    );
  });

  test('displays correct title', () => {
    expect(component.getByText('My Reservations')).toBeInTheDocument();
  });

  test('check for the Car table head', () => {
    expect(component.getByText('Car Name')).toBeInTheDocument();
  });

  test('check for the Date table head', () => {
    expect(component.getByText('Date')).toBeInTheDocument();
  });

  test('check for the City table head', () => {
    expect(component.getByText('City')).toBeInTheDocument();
  });
});

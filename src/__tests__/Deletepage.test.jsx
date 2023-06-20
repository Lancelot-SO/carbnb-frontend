import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import store from '../redux/index';
import DeletePage from '../pages/DeletePage';

describe('DeletePage', () => {
  let component;

  beforeEach(() => {
    component = render(
      <Provider store={store}>
        <BrowserRouter>
          <DeletePage />
        </BrowserRouter>
      </Provider>,
    );
  });

  test('displays correct title', () => {
    expect(component.getByText('Delete Page')).toBeInTheDocument();
  });

  test('check for the ID table head', () => {
    expect(component.getByText('ID')).toBeInTheDocument();
  });

  test('check for the Name table head', () => {
    expect(component.getByText('Name')).toBeInTheDocument();
  });

  test('check for the Delete button', () => {
    expect(component.getByText('Delete')).toBeInTheDocument();
  });
});

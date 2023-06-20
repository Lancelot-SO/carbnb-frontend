import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import store from '../redux/index';
import Cars from '../components/Cars/details';

describe('App', () => {
  it('renders Cars', () => {
    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <Cars />
        </BrowserRouter>
      </Provider>,
    );

    expect(tree).toMatchSnapshot();
  });
});

import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { appStore } from './store/store';
import '@testing-library/jest-dom';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={appStore}>
      <App />
    </Provider>
  );

  expect(getByText(/dials/i)).toBeInTheDocument();
});

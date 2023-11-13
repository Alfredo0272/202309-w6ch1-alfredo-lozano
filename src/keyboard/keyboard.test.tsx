import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { appStore } from '../store/store';
import App from '../App';
import '@testing-library/jest-dom';

test('renders keiboard', () => {
  const { getByText } = render(
    <Provider store={appStore}>
      <App />
    </Provider>
  );

  expect(getByText('Delete')).toBeInTheDocument();
});

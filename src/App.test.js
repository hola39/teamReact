import { render, screen } from '@testing-library/react';
import App from './App';
import App2 from './components/App2';

test('renders learn react link', () => {
  render(<App2 />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './containers/App';
import { MemoryRouter } from 'react-router';

test('renders practice test', () => {
  render(<MemoryRouter><App /></MemoryRouter>);
  const linkElement = screen.getByText(/practice test/i); //We access this element thru a virtual screen (simulated browser). We identify the ele by the text rendered inside (case insensitive -- REGEX)
  expect(linkElement).toBeInTheDocument();  //Checks if the ele is in the document
});

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

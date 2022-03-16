import React from 'react';
import { render } from '@testing-library/react';
import PdfTest from './App';

test('renders learn react link', () => {
  const { getByText } = render(<PdfTest />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
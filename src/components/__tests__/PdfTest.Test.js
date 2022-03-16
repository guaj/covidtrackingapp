import React from 'react';
import { render } from '@testing-library/react';
import PdfTest from '../Dashboard/DoctorDashboard/PdfTest';

test('renders learn react link', () => {
  const { getByText } = render(<PdfTest />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
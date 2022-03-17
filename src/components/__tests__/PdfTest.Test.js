import React from 'react';
import { render, screen } from '@testing-library/react';
import PdfTest from '../Dashboard/DoctorDashboard/PdfTest';


test("Check that the Generate Pdf button is present", () => {
  render(<PdfTest/>);
  const button = screen.getByText("Generate Pdf");
    expect(button).toBeTruthy()
});


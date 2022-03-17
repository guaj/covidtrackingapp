import React from 'react';
import { render, screen } from '@testing-library/react';
import PdfScreenshot from '../Dashboard/DoctorDashboard/PdfScreenshot';
import PatientListTable from '../Dashboard/CommonTabs/patientListTable';


test("Check that the Generate Pdf button is present", () => {
  render(<PdfScreenshot/>);
  const button = screen.getByText("Generate Pdf");
    expect(button).toBeTruthy()
});

describe("Test Patient List Component for Pdf",()=>{
  it("renders Patient List without crashing", function(){
    render(<PatientListTable/>);
    expect(screen.getByText("My Patient List")).toBeInTheDocument();

  });
})





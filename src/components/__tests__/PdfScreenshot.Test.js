import React from 'react';
import { render, screen } from '@testing-library/react';
import DoctorTabs from "../Dashboard/DoctorDashboard/DoctorTabs";
import ImmigrationOfficerTabs from "../Dashboard/ImmigrantOfficerDashboard/ImmigrationOfficialTabs";
import HealthOfficialTabs from "../Dashboard/HealthOfficialDashboard/HealthOfficialTabs";


describe("Test if the buttons is generated in the Components",()=>{
  it("renders Doctor tabs with the buttons", function(){
    render(<DoctorTabs/>);
    const button = screen.getByText("Generate Pdf");
    expect(button).toBeTruthy()
  });

  it("renders Immigration officer tabs with the buttons", function(){
    render(<ImmigrationOfficerTabs/>);
    const button = screen.getByText("Generate Pdf");
    expect(button).toBeTruthy()
  });

  it("renders Health Officials tabs with the buttons", function(){
    render(<HealthOfficialTabs/>);
    const button = screen.getByText("Generate Pdf");
    expect(button).toBeTruthy()
  });

})





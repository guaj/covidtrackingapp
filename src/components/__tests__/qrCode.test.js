import {render, screen} from "@testing-library/react";
import QRCode from "react-qr-code";
import PatientSummaryPageQrCode from "../UserProfile/PatientProfile/PatientSummaryPageQrCode";
import * as React from "react";



test("Check qrCode Renders Correctly", () => {
    render(<QRCode value ="google.ca" data-testid={"qrcode"}/>);
    expect(screen.getByTestId("qrcode")).toBeInTheDocument();
})

test("Check QR-code redirects to patient summary", () => {
    render(<PatientSummaryPageQrCode/>);
   expect(screen.getByTestId("patientSummary")).toBeInTheDocument();
})




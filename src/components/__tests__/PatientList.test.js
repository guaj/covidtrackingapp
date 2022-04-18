import { render, screen } from "@testing-library/react";
import PatientListTable, {CustomTable} from "../Dashboard/CommonTabs/patientListTable";
import {getAllPatients} from "../../databaseServices";


it("if the patient list table component renders", () => {
    render(<PatientListTable />)
    expect(screen.getByText("Patients")).toBeTruthy();
});

it("Table can load some data", () => {
    const handleMock = jest.fn();
    const mockData = [
        {
            covidResult: "positive",
            email: "mariajordan@gmail.com",
            firstName: "Maria",
            flag: true,
            lastName: "Jordan",
            priorityNum: 0,
            ramQNumber: "MJ9460158"
        }
    ];
    render(<CustomTable data={mockData}
                        rowsPerPage={1}
                        page={1}
                        orderBy={""}
                        order={"asc"}
                        dense={false}
                        handleRequestSort={handleMock}
    />);
    expect(screen.getByRole('cell')).toBeTruthy();

});


it('Check if the patient list service is functional', async () => {
    const mockSetter = jest.fn();
    await getAllPatients(mockSetter);
    expect(mockSetter).toHaveBeenCalledTimes(1)
})


import {render, screen} from "@testing-library/react"
//import Navbar from "../Navbar/Navbar"
//import {getAllPatients} from "../SearchEngine/PatientSearch/PatientSearchDatabaseServices";
//import * as React from 'react'
import PatientSearch from "../SearchEngine/PatientSearch/PatientSearch"

test("Check that the searchbar is rendered", () => {
    render(<PatientSearch/>)
    expect(screen.getByPlaceholderText('Search…')).toBeInTheDocument();
})


/*test("Check if searchbar can retrieve patient information for search", () => {
    React.useState = jest.fn().mockReturnValue([data], {})
    const [data, setData] = React.useState(null)
    // const data = null
    const email = "janeSmith@gmail.com";
    getAllPatients(setData);
    // const stateSetter = jest.fn();
    // jest.spyOn(React, 'useState').mockImplementationOnce(data => [data='null',setData])
    expect(data).toBeTruthy();
})*/

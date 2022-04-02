import './PatientSearch.css';
import {useEffect, useState} from 'react'
import {styled} from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import {getAllPatients} from './PatientSearchDatabaseServices'
import * as React from "react";
import {renderIntoDocument} from "react-dom/test-utils";

const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

export default function PatientSearch() {
    const [searchTerm, setSearchTerm] = useState('')
    const [data, setData] = useState(null)

    useEffect(() => (async () => await getAllPatients(setData))(), [])

    const searchBarInFocus = document.querySelector(".searchbar") //const that stores the searchbar element
    document.addEventListener("click", (event) => { //event listener for mouse clicks
            if (searchBarInFocus !== null)
                if (!searchBarInFocus.contains(event.target)) { //if click event is not on searchbar, reset searchTerm value
                    setSearchTerm('')
                    searchBarIsActive(false)
                }
        }
    )

    function searchBarIsActive(status) {
        if (status)
            document.getElementById("search-list").setAttribute("style", "border-color:black;border-style: solid;border-top-color: white")
        else
            document.getElementById("search-list").setAttribute("style", "border-color:transparent;border-style: none;border-top-color: transparent") //clear black borders when searchbar is out of focus
    }

    return (
        <div>
            <StyledInputBase style={{color: "#b39ddb"}}
                             placeholder="Search…"
                             inputProps={{'aria-label': 'search'}}
                             onChange={(event) => {
                                 setSearchTerm(event.target.value);
                             }}
                             value={searchTerm}
                             className="searchbar"
                             onClick={() => {
                                 searchBarIsActive(true)
                             }}
            />

            <div id="search-list" className="PatientResultList">
                {data !== null ?
                    (data.filter((value) => {
                        if (searchTerm === "") {
                            return null
                        } else if (value.firstName.toLocaleLowerCase().includes(searchTerm.toLowerCase()) || value.lastName.toLocaleLowerCase().includes(searchTerm.toLowerCase()) || value.email.toLocaleLowerCase().includes(searchTerm.toLowerCase()) || (value.firstName.toLocaleLowerCase() + " " + value.lastName.toLocaleLowerCase()).includes(searchTerm.toLowerCase())) {
                            return value
                        } else
                            return null
                    }).map((value, key) => {
                        return (
                            <div key={key}>
                                <p onClick={() => {
                                    window.location.href = "/profile/" + value.email.split("@")[0]
                                }}>
                                    <a href={"/profile/" + value.email.split("@")[0]}>
                                        {value.firstName.trim() + " " + value.lastName + " [" + value.email + "]"}
                                    </a>
                                </p>
                            </div>
                        );
                    })) : null}
            </div>
        </div>
    );
}
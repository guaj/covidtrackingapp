import './PatientSearch.css';
import {useEffect, useState} from 'react'
import {styled} from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import {getAllPatients} from './PatientSearchDatabaseServices'
import * as React from "react";

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

function PatientSearch() {
    const [searchingTerm, setSearchTerm] = useState('')
    const [data, setData] = useState(null)

    useEffect(() => (async () => await getAllPatients(setData))(), [])

    return (
        <>
            <StyledInputBase style={{color: "#b39ddb"}}
                             placeholder="Search…"
                             inputProps={{'aria-label': 'search'}}
                             onChange={(event) => {
                                 setSearchTerm(event.target.value);
                             }}
            />

            <div className="PatientResultList">
                {data !== null ?
                    (data.filter((value) => {
                        if (searchingTerm === "") {
                            return null
                        } else if (value.firstName.toLocaleLowerCase().includes(searchingTerm.toLowerCase()) || value.lastName.toLocaleLowerCase().includes(searchingTerm.toLowerCase()) || value.email.toLocaleLowerCase().includes(searchingTerm.toLowerCase()) || (value.firstName.toLocaleLowerCase() + " " + value.lastName.toLocaleLowerCase()).includes(searchingTerm.toLowerCase())) {
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

        </>
    );
}

export default PatientSearch;

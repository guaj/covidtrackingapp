import './PatientSearch.css';
import {useEffect, useState} from 'react'
import {styled} from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import {getAllPatients} from './PatientSearchDatabaseServices'

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
        <div>
            <StyledInputBase style={{color: "#b39ddb"}}
                             placeholder="Search…"
                             inputProps={{'aria-label': 'search'}}
                             onChange={(event) => {
                                 setSearchTerm(event.target.value);
                             }}
            />

            {data !== null ? (data.filter((value) => {
                if (searchingTerm === "") {
                    return null
                } else if (value.firstName.toLocaleLowerCase().includes(searchingTerm.toLowerCase())) {
                    return value
                } else
                    return null
            }).map((value, key) => {

                return (
                    <div className="user" key={key}>
                        <p style={{paddingLeft: "15%"}}><a href={"/profile/" + value.email.split("@")[0]} style={{textDecoration:"none", color:"inherit"}}>{value.firstName}</a></p>
                    </div>
                );
            })) : <></>}


        </div>
    );
}

export default PatientSearch;

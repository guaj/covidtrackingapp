import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { visuallyHidden } from '@mui/utils';
import LinkIcon from '@mui/icons-material/Link';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import {getAllCovidPositivePatients, getAllPatients, isInNotificationList} from '../../databaseServices';
import {useState, useEffect} from 'react';
import FlagIcon from "@mui/icons-material/Flag";
import Link from "@material-ui/core/Link";
import Button from "@mui/material/Button";


function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

const headCells = [
    {
        id: 'firstName',
        disablePadding: false,
        label: 'First Name',
    },
    {
        id: 'lastName',
        disablePadding: false,
        label: 'Last Name',
    },
    {
        id: 'covidResult',
        disablePadding: false,
        label: 'Covid Positive',
    },

    {
        id: 'profileLink',
        disablePadding: false,
        label: 'Profile Link',
    },
    {
        id: 'contactTracing',
        disablePadding: false,
        label: 'Contact Tracing Form',
    },
    {
        id: 'notifyPatient',
        disablePadding: false,
        label: 'send notification',
    },
];


function EnhancedTableHead(props) {
    const { order, orderBy, onRequestSort } =
        props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (


        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};





export default function TracingListTable() {
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('calories');
    const [selected] = useState([]);
    const [page, setPage] = useState(0);
    const [dense, setDense] = useState(false);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [data, setData] = useState([]);
    const [email, setEmail] = useState([]);
    let valid = false;


    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangeDense = (event) => {
        setDense(event.target.checked);
    };

    const handleSubmitChange =(event)=>{
    //add patient info to notifications database
        alert("notification sent")
       // setValid(true);

    };

    useEffect(() => (async () =>await getAllCovidPositivePatients(setData))(), [])


    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

    function profileLink(email) {
        let url = email.split("@");
        return "/profile/" + url[0];
    }

    function isNotified(email){
        valid = isInNotificationList(email);
        console.log("hey");
        console.log(valid);
        return valid;
    }

    function tracingForm(email) {
        let url = email.split("@");
        return "/tracing-form/" + url[0];

    }

    return (
        <div>
            <h2>Patients</h2>
            <Box sx={{width: '75%'}}>
                <Paper sx={{width: '100%', mb: 2}}>
                    <TableContainer>
                        <Table
                            sx={{minWidth: 750}}
                            aria-labelledby="patientListTable"
                            size={dense ? 'small' : 'medium'}
                        >
                            <EnhancedTableHead
                                numSelected={selected.length}
                                order={order}
                                orderBy={orderBy}
                                onRequestSort={handleRequestSort}
                                rowCount={data.length}
                            />
                            <TableBody>
                                {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
                                {stableSort(data, getComparator(order, orderBy))
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((item) => {

                                        return (
                                            <TableRow
                                                hover
                                                role="checkbox"
                                                tabIndex={-1}
                                                key={item.name}
                                                id={item.name}
                                            >

                                                <TableCell>{item.firstName}</TableCell>
                                                <TableCell>{item.lastName}</TableCell>
                                                <TableCell>{item.covidResult}</TableCell>
                                                <TableCell numeric component="a"
                                                           href={profileLink(item.email)}><LinkIcon/></TableCell>
                                                <TableCell>

                                                </TableCell>
                                                <TableCell>
                                                    <Button
                                                        type="submit"
                                                        id={item.email}

                                                        //disabled={()=> {async() =>{return await isInNotificationList(item.email)}}}
                                                        //disabled= {isNotified(item.email)}
                                                        //disabled={console.log(isNotified(item.email))}
                                                        //disabled ={isNotified(item.email)}
                                                        disabled = {isInNotificationList(item.email)}
                                                        onClick={()=>{
                                                            handleSubmitChange();
                                                            //isInNotificationList(item.email)
                                                        }}
                                                    >
                                                        send
                                                    </Button>

                                                </TableCell>
                                            </TableRow>
                                        );
                                    })}
                                {emptyRows > 0 && (
                                    <TableRow
                                        style={{
                                            height: (dense ? 33 : 53) * emptyRows,
                                        }}
                                    >
                                        <TableCell colSpan={6}/>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={data.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>
                <FormControlLabel
                    control={<Switch checked={dense} onChange={handleChangeDense}/>}
                    label="Dense padding"
                />
            </Box>
        </div>

    );
}
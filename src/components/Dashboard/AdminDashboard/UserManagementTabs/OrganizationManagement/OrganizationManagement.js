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
import { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/styles';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { getAllOrgOfficials, deleteOrgOfficial } from '../../../../../databaseServices'
import OrganizationAdd from './OrganizationAdd'



const useStyles = makeStyles((theme) => ({
    pair: {
        '&:hover': {
            backgroundColor: 'rgba(63, 81, 181, 0.5)',
            color: '#fff',
        }
    },
    exitButton: {
        position: 'absolute',
        top: '5px',
        right: '5px',
        '&:hover': {
            backgroundColor: 'rgba(63, 81, 181, 0.5)',
            color: '#fff',
        }
    },
    modal: {
        height: "70%"
    }
    
})
);

//styling for the modal
const modalStyle = {
    //overflow: 'auto',
    marginTop: '30%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // width: ,
    bgcolor: 'background.paper',
    //border: '2px solid #000',
    boxShadow: 24,
    borderRadius: '1%',
    p: 4,
};







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
        id: 'email',
        disablePadding: false,
        label: 'email',
    },
    {
        id: 'employeeId',
        disablePadding: false,
        label: 'employee Id',
    },
    {
        id: 'orgId',
        disablePadding: false,
        label: 'organization Id',
    },
    {
        id: 'type',
        disablePadding: false,
        label: 'type',
    },
    {
        id: 'controls',
        disablePadding: false,
        label: '',
    },
    {
        id: 'controls',
        disablePadding: false,
        label: '',
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



// export const [patient, setPatient] = null;

export default function PatientListTable() {
    const classes = useStyles();
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('calories');
    const [selected] = useState([]);
    const [page, setPage] = useState(0);
    const [dense, setDense] = useState(false);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [data, setData] = useState([])
    // const [updateModalOpen, setUpdateModalOpen] = useState(false)
    const [addModalOpen, setAddModalOpen] = useState(false)
    



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

    useEffect(() => (async () => await getAllOrgOfficials(setData))(), [])

    // const updateModalHandleOpen = patient => {
    //     setPatient(patient)
    //     setUpdateModalOpen(true);

    // };
    // const updateModalHandleClose = () => {
    //     setUpdateModalOpen(false);
    // }

    const addModalHandleOpen = patient => {
        setAddModalOpen(true);

    };
    const addModalHandleClose = () => {
        setAddModalOpen(false);
    }


    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

    function profileLink(email) {
        let url = email.split("@");
        return "/profile/" + url[0];
    }


    return (
        <>
            
            <div>
            {/* <Modal
                open={updateModalOpen}
                onClose={updateModalHandleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{overflow: "scroll"}}
                className={classes.modal}
            >
                <Box sx={modalStyle}>
                    <Button className={classes.exitButton} onClick={updateModalHandleClose}><CloseIcon /></Button>
                    <PatientUpdate patient={patient} />
                </Box>
            </Modal> */}
            <Modal
                open={addModalOpen}
                onClose={addModalHandleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{overflow: "scroll"}}
                className={classes.modal}
            >
                <Box sx={modalStyle}>
                    <Button className={classes.exitButton} onClick={addModalHandleClose}><CloseIcon /></Button>
                    <OrganizationAdd />
                </Box>
            </Modal>
                <div style={{ minWidth: "100%", display: 'flex', flexDirection: "row" }}>
                    <h2>Organizational Officials</h2>
                    <Button variant="contained" color="primary" style={{ margin: "0 0 1% auto" }} onClick={addModalHandleOpen}>add organizational official</Button>
                </div>

                <Box sx={{ width: '100%' }}>

                    <Paper sx={{ width: '100%', mb: 2 }}>

                        <TableContainer>
                            <Table
                                sx={{ minWidth: 750 }}
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
                                                >
                                                   
                                                    <TableCell >{item.email}</TableCell>
                                                    <TableCell >{item.employeeId}</TableCell>
                                                    <TableCell >{item.orgId}</TableCell>
                                                    <TableCell >{item.type}</TableCell>
                                                    <TableCell ><Button onClick={{/*()=> updateModalHandleOpen(item)*/}}>update</Button></TableCell>
                                                    <TableCell ><Button onClick={() => deleteOrgOfficial(item.email, data, setData)}>delete</Button></TableCell>
                                                </TableRow>
                                            );
                                        })}
                                    {emptyRows > 0 && (
                                        <TableRow
                                            style={{
                                                height: (dense ? 33 : 53) * emptyRows,
                                            }}
                                        >
                                            <TableCell colSpan={6} />
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
                        control={<Switch checked={dense} onChange={handleChangeDense} />}
                        label="Dense padding"
                    />
                </Box>
            </div>
        </>

    );
}
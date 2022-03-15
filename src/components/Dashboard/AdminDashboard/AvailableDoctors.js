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
import mockedDatas from "../DoctorDashboard/doctorListTableMockData.json";
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/styles';
import AWS from 'aws-sdk';
import awsConfig from '../../../aws-config.json';

AWS.config.update(awsConfig);
const docClient = new AWS.DynamoDB.DocumentClient()

//database query for doctors with (< 10 patients) and (city = patient city)
const getAvailableDoctors = async () => {
    var params = {
        TableName: "doctors",
        FilterExpression: "#count < :max",
        ExpressionAttributeNames: {
            "#count": "patientCount"
        },
        ExpressionAttributeValues: {
            ":max": 10
        }
    }
      try {
        const data = await docClient.scan(params).promise()
        //console logged data
        alert(JSON.stringify(data))
        console.log(JSON.parse(JSON.stringify(data)))
        return { body: JSON.stringify(data) }
      } catch (err) {
        alert("could not retrieve data >:(")
      }
}

const useStyles = makeStyles((theme) => ({
    pair: {
        '&:hover': {
            backgroundColor: 'rgba(63, 81, 181, 0.5)',
            color: '#fff',
        }
    },
    modal:{
        backgroundColor:'#fff',
        position: 'absolute',
        top: '5px', 
        right: '5px' ,
        '&:hover': {
            backgroundColor: 'rgba(63, 81, 181, 0.5)',
            color: '#fff',
        }
    }
})
);

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
        id: 'licenseNumber',
        disablePadding: false,
        label: 'License Number',
    },
    {
        id: 'address',
        disablePadding: false,
        label: 'Address',
    },
    {
        id: 'email',
        disablePadding: false,
        label: 'Email',
    },
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
        id:'button',
        disablePadding: false,
        label: 'Select doctor',
    }
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


export default function AvailableDoctors() {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const classes = useStyles();


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


    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - mockedDatas.length) : 0;


    return (
        <div>
            <h2>Available doctors</h2>   
            <Box sx={{ width: '100%' }}>
                <Paper sx={{ width: '100%', mb: 2 }}>
                    <TableContainer>
                        <Table
                            sx={{ minWidth: 750 }}
                            aria-labelledby="doctorListTable"
                            size={dense ? 'small' : 'medium'}
                        >
                            <EnhancedTableHead
                                numSelected={selected.length}
                                order={order}
                                orderBy={orderBy}
                                onRequestSort={handleRequestSort}
                                rowCount={mockedDatas.length}
                            />
                            <TableBody>
                                {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
                                {stableSort(mockedDatas, getComparator(order, orderBy))
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((item) => {

                                        return (
                                            <TableRow
                                                hover
                                                role="checkbox"
                                                tabIndex={-1}
                                                key={item.name}
                                            >
                                                <TableCell align="center">{item.licenseNumber}</TableCell>
                                                <TableCell align="center">{item.address}</TableCell>
                                                <TableCell align="center">{item.email}</TableCell>
                                                <TableCell align="center">{item.firstName}</TableCell>
                                                <TableCell align="center">{item.lastName}</TableCell>
                                                <TableCell><Button className={classes.pair} onClick='#'>Select</Button></TableCell>
                                            </TableRow>
                                        );
                                    })}
                                {emptyRows > 0 && (
                                    <TableRow
                                        style={{
                                            height: (dense ? 33 : 53) * emptyRows,
                                        }}
                                    >
                                        <TableCell colSpan={12} />
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={mockedDatas.length}
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

    );
}
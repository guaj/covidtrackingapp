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
import {visuallyHidden} from '@mui/utils';
import LinkIcon from '@mui/icons-material/Link';
import { addSentContactTracingFormTime,
  getAllCovidPositivePatients, getCompletedCovidTracingForm,
    isInNotificationList, isInTracingList, getAllLocations
} from '../../databaseServices';
import {useState, useEffect} from 'react';
import AWS from "aws-sdk";
import awsConfig from "../../aws-config.json";
import '../ContractTracing/button.css';

//to connect to DynamoDB
AWS.config.update(awsConfig);
const docClient = new AWS.DynamoDB.DocumentClient();

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

function profileLink(email) {
    let url = email.split("@");
    return  url[0];
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
        label: 'Email',
    },
    {
        id: 'date',
        disablePadding: false,
        label: 'Date',
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
export default function CompletedListTable() {
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('calories');
    const [selected] = useState([]);
    const [page, setPage] = useState(0);
    const [dense, setDense] = useState(false);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [data, setData] = useState([]);
   
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

    const [tableValues, setTableValues] = useState([{ email: "", date: "" }]);

    const handleElementsRemove = (index) => {
        const list = [...tableValues];
        list.splice(index, 1);
        setTableValues(list);
    };
  

    // useEffect(() => (async () => await getAllLocations(setData))(), [])
    useEffect(() => (async () => await getCompletedCovidTracingForm(setData))(), [])
    useEffect(() => (async () => await isInTracingList(setData))(), [])

   // useEffect(() => (async () => await isInNotificationList(localStorage.getItem("email").split("\"")[1]))().then(console.log), [])

    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

    return (
        <div>
            <h2>Locations</h2>
            <Box sx={{ width: '75%' }}>
                <Paper sx={{ width: '100%', mb: 2 }}>
                    <TableContainer>
                        <Table
                            sx={{ minWidth: 750 }}
                            aria-labelledby="locationListTable"
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
                                        // const value = {'email': item.email,'value': isInNotificationList(item.email)}
                                        // setEnabled([value])

                                        return (
                                            <TableRow
                                                hover
                                                role="checkbox"
                                                tabIndex={-1}
                                                // key={item.name}
                                                // id={item.name}
                                                key={item.email}
                                            >

{/* // useEffect(() => (async () => await isInNotificationList(localStorage.getItem("email").split("\"")[1]))().then(console.log), []) */}

                                                {/* <TableCell>{profileLink(item.email) }</TableCell> */}
                                                <TableCell>{item.email}</TableCell>
                                                {/* <TableCell>{item.locationName}</TableCell> */}
                                                <TableCell>{item.date}</TableCell>
                                                {/* <TableCell>{item.time}</TableCell>
                                                <TableCell>{item.locationNumber}</TableCell> */}
                                                {/* <TableCell>{item.type}</TableCell> */}
                                    {/* <TableCell>{item.locationNumber}</TableCell> */}

                                                {/* <TableCell numeric component ="a" href={tracingForm(item.email)}><LinkIcon/> */}
                                                {/*contact tracing form : isFilled*/}
                                                {/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
                                                {/* </TableCell> */}
                                                {/* <TableCell>
                                                    <Button
                                                        type="submit"
                                                        id={item.email}
                                                        //onLoad={isEnabled(item.email)}
                                                        onClick={(event) => {
                                                            handleSubmitChange(event.target.id);
                                                            isInNotificationList(email);
                                                            console.log(event.target.id)
                                                            //isInNotificationList(item.email


                                                        //disabled={()=> {async() =>{return await isInNotificationList(item.email)}}}
                                                        //disabled= {isNotified(item.email)}
                                                        //disabled={console.log(isNotified(item.email))}
                                                        //disabled={isNotified(item.email)}
                                                        //disabled={false}
                                                        //disabled = {console.log(isInNotificationList(item.email))}
                                                        //onClick={(event)=>{
                                                            //console.log(isInNotificationList(event.target.id));
                                                            //handleSubmitChange(event.target.id);
                                                           // console.log(event.target.id)
                                                            //isInNotificationList(item.email)
                                                        }}
                                                    >
                                                        send
                                                    </Button>

                                                </TableCell> */}
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

    );
}
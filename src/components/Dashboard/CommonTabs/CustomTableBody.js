import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import LinkIcon from "@mui/icons-material/Link";
import FlagIcon from "@mui/icons-material/Flag";
import * as React from "react";
import TableBody from "@mui/material/TableBody";

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


export const CustomTableBody = ({data, order, orderBy, page, rowsPerPage, dense}) => {

    console.log(data);

    const profileLink = (email) => {
        let url = email.split("@")
        return ("/profile/" + url[0]);
    };

    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

    return (
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
                            <TableCell/>
                            <TableCell >{item.firstName}</TableCell>
                            <TableCell >{item.lastName}</TableCell>
                            <TableCell >{item.covidResult}</TableCell>
                            <TableCell
                            >{item.reviewed ? "yes" : "no"}</TableCell> {/* TODO: check the database attributes */}
                            <TableCell  numeric component="a"
                                        href={profileLink(item.email)}><LinkIcon/></TableCell>
                            <TableCell >{item.flag ?
                                <FlagIcon style={{fill: "orange"}}/> : ""}</TableCell>
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
    )
}
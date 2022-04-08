import * as React from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import NotificationsIcon from "@mui/icons-material/Notifications";
import Badge from "@mui/material/Badge";
import {useEffect} from "react";
import {retrieveNotifications} from "./NotificationsService";
import {makeStyles} from "@material-ui/styles";
import "./Notifications.css";
import {useNavigate} from 'react-router-dom';

const useStyles = makeStyles({
        listItem: {
            whiteSpace: "normal",
        },
        '@global': {
            '*::-webkit-scrollbar': {
                width: '0.4em'
            },
            '*::-webkit-scrollbar-track': {
                '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
            },
            '*::-webkit-scrollbar-thumb': {
                backgroundColor: 'rgba(0,0,0,.1)',
                outline: '1px solid slategrey'
            },
        }
    }
);

export default function NotificationList() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [notificationList, setNotificationList] = React.useState([])
    const [numberOfNotifications, setNumberOfNotifications] = React.useState(0)
    const open = Boolean(anchorEl);
    const ITEM_HEIGHT = 48;
    const classes = useStyles();
    const navigate = useNavigate();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    function notificationRedirect(item) {
        // const { myValue } = item.currentTarget.dataset;
        if (item.type === "quarantine information") {
            navigate("/quarantine");
        }
        // const { myValue } = item.currentTarget.dataset;
        // alert(myValue);

        if (item.type === "contact tracing")
            window.location.href = '/tracing-form'

        if (item.type === "patient profile update" || item.type === "patient symptoms update")
            window.location.href = '/profile/' + item.patientemail.split('@')[0]
    }

    function formatDate(date) {
        let temp = date.split("GMT")
        return temp[0];
    }

    useEffect(() => {
        (async () => {
            const dbData = await retrieveNotifications();
            setNumberOfNotifications(dbData.length);
            setNotificationList(dbData);
        })();

    }, []);
    let notificationItems = [
        notificationList.map((item, i) =>
            <>
                <MenuItem
                    key={i}
                    data-my-value={item.type}
                    onClick={(event) => {
                        event.preventDefault();
                        notificationRedirect(item)
                    }}
                    style={{whiteSpace: 'normal'}}
                >
                    <p className="notif-text">{item.content}
                        <br/><span className="date-text">{formatDate(item.date)}</span>
                    </p>

                </MenuItem>
            </>
        )
    ];
    return (
        <React.Fragment>
            <Box sx={{display: 'flex', alignItems: 'center', textAlign: 'center'}}>
                <Tooltip title="Account settings">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        {numberOfNotifications > 0 ?
                            <Badge badgeContent={numberOfNotifications} color="error">
                                <NotificationsIcon style={{color: "#673ab7"}}/>
                            </Badge>
                            : <NotificationsIcon style={{color: "#673ab7"}}/>

                        }
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '25%',
                    },

                }}
                transformOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
            >
                {notificationItems}

            </Menu>
        </React.Fragment>
    );
}

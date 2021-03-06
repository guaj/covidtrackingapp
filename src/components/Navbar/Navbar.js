import * as React from 'react';
import {styled, alpha} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import HomeIcon from '@mui/icons-material/Home';
import NotificationMenu from "./Notifications/Notification";
import PatientSearch from "../SearchEngine/PatientSearch/PatientSearch"


const Search = styled('div')(({theme}) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));


const usersWithSearchbar = [
    "doctor",
    "immigration official",
    "health official",
    "admin"
];

const usersWithNotifications = [
    "doctor",
    "patient"
];

const usersWithProfilePage = [
    "doctor",
    "patient"
]

export default function PrimarySearchAppBar() {
    const userEmail = JSON.parse(localStorage.getItem("email"));
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            {hasAccessProfilePage() ?
                <MenuItem data-testid = "profile-button" onClick={handleProfile}>Profile</MenuItem>
                : <></>
            }

            <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton href="/dashboard" size="large" aria-label="show 4 new mails" color="inherit">
                    <HomeIcon style={{color: "#673ab7"}}/>
                </IconButton>
                <p>Dashboard</p>
            </MenuItem>
            {/*Conditional rendering for notifications feature */}
            {hasNotification() ?
                <MenuItem>
                    <NotificationMenu data={userEmail} isMobile={true}/>
                    <p>Notifications</p>
                </MenuItem>
                : <></>
            }
            {hasAccessProfilePage ?
                <MenuItem onClick={handleProfileMenuOpen}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="primary-search-account-menu"
                        aria-haspopup="true"
                        color="inherit"
                        name="iconbutton"
                        key={1}
                        label="iconbutton2"
                    >
                        <AccountCircle style={{color: "#673ab7"}}/>
                    </IconButton>
                    <p>Profile</p>
                </MenuItem>
                : <> </>
            }

        </Menu>
    );

    function hasAccessProfilePage() {
        let user = JSON.parse(localStorage.getItem("type"));
        return usersWithProfilePage.includes(user);
    }

    function hasSearchBar() {
        let user = JSON.parse(localStorage.getItem("type"));
        return usersWithSearchbar.includes(user);
    }

    function hasNotification() {
        let user = JSON.parse(localStorage.getItem("type"));
        return usersWithNotifications.includes(user);
    }

    function handleLogout() {
        localStorage.setItem("type", JSON.stringify(""));
        localStorage.setItem("email", JSON.stringify(""));
        window.location = "/login#redirect";
    }

    function handleProfile() {
        let user = JSON.parse(localStorage.getItem("email"))
        let url = user.split("@");
        window.location = "/profile/" + url[0];
    }

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static" color="transparent">
                <Toolbar>

                    <Typography
                        color="#673ab7"
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{display: {xs: 'none', sm: 'block'}}}
                    >
                        <a href="/dashboard" style={{textDecoration: "none", color: "#673ab7"}}>
                            COVID Tracking App
                        </a>

                    </Typography>
                    {/*conditional rendering for the searchbar*/}
                    {hasSearchBar() ? <Search>
                            <SearchIconWrapper>
                                <SearchIcon style={{color: "#673ab7"}}/>
                            </SearchIconWrapper>
                            <PatientSearch/>
                        </Search>
                        : <></>}

                    <Box sx={{flexGrow: 1}}/>
                    <Box sx={{display: {xs: 'none', md: 'flex'}}}>
                        <IconButton href="/dashboard" size="large" aria-label="show 4 new mails" color="inherit">
                            <HomeIcon style={{color: "#673ab7"}}/>
                        </IconButton>

                        {/*conditional rendering for notifications */}
                        {hasNotification() ?
                            <NotificationMenu  data={userEmail} isMobile={false} data-testid="notification"/>
                            : <></>
                        }
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                            name="accountuser"
                            key={1}
                            label="accountuser2"
                        >
                            <AccountCircle style={{color: "#673ab7"}}/>
                        </IconButton>
                    </Box>
                    <Box sx={{display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                            name="more" key={1} label="more2" 
                        >
                            <MoreIcon name="more" key={1} label="more2" style={{color: "#673ab7"}}/>
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </Box>
    );
}

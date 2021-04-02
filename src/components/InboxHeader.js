import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AppBar from "@material-ui/core/AppBar";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import Spinner from "react-spinner-material";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            background: 'transparent'
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    logoutButton: {
        color: '#D31D00',
        marginLeft: 'auto',
    },
}));

function InboxHeader() {
    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const handleLogout = (e) => {
        setLoading(true);
        sessionStorage.removeItem("email");
        sessionStorage.removeItem("token");
        setLoading(false);
    };

    if (loading)
        return (
            <div className={classes.load}>
                <Spinner
                    size={120}
                    spinnerColor={"#333"}
                    spinnerWidth={2}
                    visible={true}
                    color={'#D31D00'}/>
            </div>
        );
    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    className={classes.menuButton}
                >
                    <MenuIcon />
                </IconButton>
                <Button
                    className={classes.logoutButton}
                    component={Link}
                    to=""
                    onClick={() => handleLogout()}
                    color="inherit"
                >
                    Logout
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default InboxHeader;

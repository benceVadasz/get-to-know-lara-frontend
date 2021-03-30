import React, {useState} from "react";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import axios from "axios";
import SendIcon from "@material-ui/icons/Send";
import IconButton from "@material-ui/core/IconButton";
import Spinner from "react-spinner-material";

export default function Navbar() {
    const useStyles = makeStyles((theme) => ({
        load: {
            position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)"
        },
        root: {
            background: "#F6F6F6",
            flexGrow: 1,
            marginBottom: "5px",
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
        navbarStyle: {
            background: "#003366",
        },
        img: {
            width: 150,
            marginTop: 5,
        },
    }));

    const isLoggedIn = sessionStorage.getItem("email") != null;
    let navRow;
    {
        (!isLoggedIn) ?
            navRow = (
                <div>
                    {" "}
                    <Button component={Link} to="/login" color="inherit">
                        {" "}
                        Login{" "}
                    </Button>
                    <Button component={Link} to="/register" color="inherit">
                        Register
                    </Button>
                </div>
            )
            :
            navRow = (
                <div>
                    <IconButton
                        component={Link}
                        to="/mail/compose"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <SendIcon/>
                    </IconButton>
                    <Button component={Link} to="/mail/inbox" color="inherit">
                        Inbox
                    </Button>
                    <Button component={Link} to="/mail/sent" color="inherit">
                        Sent
                    </Button>
                    <Button
                        component={Link}
                        to=""
                        onClick={() => handleLogout()}
                        color="inherit"
                    >
                        Logout
                    </Button>
                </div>
            );
    }

    return (
        <div className={classes.root}>
            <AppBar className={classes.navbarStyle} position="static">
                <Toolbar className={classes.toolbar}>
                    <Button component={Link} to="/" color="inherit">
                        Home
                    </Button>
                    <div>{navRow}</div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

import React, {useState} from "react";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import axios from "axios";
import SendIcon from "@material-ui/icons/Send";
import IconButton from "@material-ui/core/IconButton";
import Spinner from "react-spinner-material";

export default function Navbar() {

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

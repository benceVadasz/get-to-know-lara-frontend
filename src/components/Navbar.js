import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

export default function Navbar() {

    return (
        <div className={classes.root}>
            <AppBar className={classes.navbarStyle} position="static">
                <Toolbar className={classes.toolbar}>

                </Toolbar>
            </AppBar>
        </div>
    );
}

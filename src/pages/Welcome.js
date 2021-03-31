import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import Image from '../assets/bg.png';

function Welcome() {
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        paperContainer : {
            background: 'url(../assets/bg.png) no-repeat center center fixed',
        },
        paper: {
            background: 'transparent',
            boxShadow: 'none',
            padding: theme.spacing(2),
            margin: "auto",
            // width: "100%",
            // minHeight: "90vh",
            // background: "#FFFFFF",
            borderBottom: "none",
        },
        image: {
            width: 128,
            height: 128,
        },
        img: {
            marginTop: 90,
            display: "block",
            marginRight: 20,
            width: 800,
        },
        welcomeBlock: {
            marginTop: "190px",
            marginLeft: 0,
            display: 'flex'

        },
        welcomeWord: {
            marginLeft: 50,
            fontFamily: 'Fugaz One, cursive'
        },
        trait: {
            color: "#859DF4",
        },
        welcomeText: {
            fontFamily: 'Lato, sans-serif',
            fontSize: 16
        },
    }));

    const classes = useStyles();

    return (
        <div className={classes.paperContainer}>
            <div className={classes.root}>
                <CssBaseline/>

            </div>
        </div>
    );
}

export default Welcome;

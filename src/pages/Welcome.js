import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import Image from '../assets/bg.png';
import {Avatar, Button, Card, CardContent, TextField} from "@material-ui/core";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import {Link} from "react-router-dom";

function Welcome() {
    const useStyles = makeStyles((theme) => ({

        root: {
            flexGrow: 1,
            backgroundColor: "rgba(255, 255, 255, 0)",
            boxShadow: "none"
        },
        paperContainer: {
            border: 'none'
        },
        welcomeBlock: {
            width: 300,
            marginTop: "190px",
            marginLeft: 500,
            display: 'flex',
            border: 'none'

        },
        welcomeWord: {
            marginLeft: 650,
            fontFamily: 'Fugaz One, cursive'
        },
        trait: {
            color: "#859DF4",
        },
        welcomeText: {
            fontFamily: 'Lato, sans-serif',
            fontSize: 16
        },
        title: {
            marginTop: 55,
            fontFamily: 'Sarabun, sans-serif',
            width: 500,
            color: '#f8f8ff'
        },
        description: {
            fontFamily: 'Lato, sans-serif',
            fontSize: 15,
        },
        joinBtn: {
            marginTop: 55,
            marginLeft: 25,
            width: 200,
            fontWeight: "bolder",
        },
        box:{
            display: 'flex',
            flexFlow: 'column',
            marginTop: 88,
            marginLeft: 666,
        }
    }));

    const classes = useStyles();

    return (
        <div className={classes.paperContainer}>
            <Card className={classes.root}>
                <CardContent className={classes.box}>
                    <Typography
                        className={classes.title}
                        align="center"
                        gutterBottom
                        variant="h2"
                        component="h3"
                    >
                        Welcome to Lara!
                    </Typography>
                    <Button
                        color="primary"
                        variant="contained"
                        className={classes.joinBtn}
                        component={Link}
                        to="/register"
                    >
                        Sign up!
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}

export default Welcome;

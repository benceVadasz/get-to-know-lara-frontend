import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";

function Welcome() {
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            margin: "auto",
            width: "100%",
            minHeight: "90vh",
            background: "#FFFFFF",
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
        <div className={classes.root}>
            <CssBaseline/>
            <Paper className={classes.paper} width="15%">
                <Grid container spacing={2}>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid justify="flex-start" className={classes.welcomeBlock} item xs spacing={3}>
                                <Typography className={classes.welcomeWord} gutterBottom variant="h3">
                                    Welcome to <span className={classes.trait}>Lara!</span>
                                </Typography>

                            </Grid>
                            <Grid item>
                                <Typography
                                    variant="body2"
                                    style={{cursor: "pointer"}}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}

export default Welcome;

import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import {style} from "../styles";

function Welcome() {

    return (
        <div className="welcome">
            <Paper className={style.paper} width="15%">
                <Grid container spacing={2}>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Typography className={style.welcomeWord} gutterBottom variant="h3">
                                Welcome to <span className={style.trait}>Trait up!</span>
                            </Typography>
                            <Typography className={style.welcomeText} variant="body2" gutterBottom>
                                Your ultimate job hunt tool to find a job
                            </Typography>
                            <Typography className={style.welcomeText} variant="body2">
                                tailored perfectly to your unique personality archetype
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}

export default Welcome;

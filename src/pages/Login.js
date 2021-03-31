import React, {useState} from "react";
import axios from 'axios';
import {
    Grid,
    Paper,
    Avatar,
    Typography,
    TextField,
    Button,
} from "@material-ui/core";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import {BASE_URL} from "../constants";
import Spinner from "react-spinner-material";
import {makeStyles} from "@material-ui/core/styles";

function Login() {
    const useStyles = makeStyles((theme) => ({
        paperStyle: {padding: "30px 20px", height: 350, width: 500, margin: "70px auto", color: 'white', backgroundColor: "rgba(255, 255, 255, 0.2)",},
        formStyle: {height: 250, display: "flex", flexFlow: "column wrap", justifyContent: "space-between",},
        nameField: {marginTop: 25,},
        headerStyle: {margin: 0},
        avatarStyle: {backgroundColor: "#090F4B", marginBottom: 10},
        button: {backgroundColor: "#090F4B", color: "white"},
        load: {position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}
    }))
    const classes = useStyles();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const submit = (e) => {
        setLoading(true);
        e.preventDefault();
        axios
            .post(`${BASE_URL}/login`, {
                headers: {
                    "Content-Type": "application/json",
                },
                email,
                password,
            })
            .then((response) => {
                setLoading(false);
                window.location.href = "/";
            })
            .catch(function (error) {
                alert(error);
            });

    };

    if (loading)
        return (
            <div className={classes.load}>
                <Spinner
                    size={120}
                    spinnerColor={"#333"}
                    spinnerWidth={2}
                    visible={true}
                    color={'black'}/>
            </div>
        );

    return (
        <div>
            <Grid>
                <Paper elevation={20} className={classes.paperStyle}>
                    <Grid align="center">
                        <Avatar className={classes.avatarStyle}>
                            <AddCircleOutlineOutlinedIcon/>
                        </Avatar>
                        <h2 className={classes.headerStyle}>Sign Up</h2>
                    </Grid>
                    <form className={classes.formStyle} onSubmit={submit}>
                        <TextField
                            className={classes.nameField}
                            onChange={(e) => setEmail(e.target.value)}
                            fullWidth
                            label="Email"
                            placeholder="Enter your email"
                            color={"white"}
                        />
                        <TextField
                            onChange={(e) => setPassword(e.target.value)}
                            fullWidth
                            label="Password"
                            type="password"
                            placeholder="Enter your password"
                            color={"white"}
                        />
                        <Button type="submit" variant="contained" className={classes.button}>
                            Log in
                        </Button>
                    </form>
                </Paper>
            </Grid>
        </div>
    );
}

export default Login;

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

function Login() {

    const paperStyle = {
        padding: "30px 20px",
        height: 480,
        width: 500,
        margin: "70px auto",
    };
    const formStyle = {
        height: 350,
        display: "flex",
        flexFlow: "column wrap",
        justifyContent: "space-between",
    };

    const headerStyle = {margin: 0};
    const avatarStyle = {backgroundColor: "#090F4B", marginBottom: 10};
    const button = {backgroundColor: "#090F4B", color: "white"};
    const load = {position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}

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
            <div style={load}>
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
                <Paper elevation={20} style={paperStyle}>
                    <Grid align="center">
                        <Avatar style={avatarStyle}>
                            <AddCircleOutlineOutlinedIcon/>
                        </Avatar>
                        <h2 style={headerStyle}>Sign Up</h2>
                        <Typography variant="caption" gutterBottom>
                            Please fill this form to create an account !
                        </Typography>
                    </Grid>
                    <form style={formStyle} onSubmit={submit}>
                        <TextField
                            onChange={(e) => setEmail(e.target.value)}
                            fullWidth
                            label="Email"
                            placeholder="Enter your email"
                        />
                        <TextField
                            onChange={(e) => setPassword(e.target.value)}
                            fullWidth
                            label="Password"
                            type="password"
                            placeholder="Enter your password"
                        />
                        <Button type="submit" variant="contained" style={button}>
                            Log in
                        </Button>
                    </form>
                </Paper>
            </Grid>
        </div>
    );
}

export default Login;

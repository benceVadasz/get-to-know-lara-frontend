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

function Register() {

    const paperContainer = {
        background: 'url(../assets/bg.png) no-repeat center center fixed',
    };
    const paperStyle = {
        padding: "30px 20px",
        height: 520,
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

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const isValid = () => {
        let eMailError = "";
        let passWordError = "";
        let confirmPassWordError = "";
        if (!email.includes("@")) {
            eMailError = "Invalid email!";
        }
        if (password.length < 6) {
            passWordError = "Password must be 6 characters or longer!";
        }
        if (password !== confirmPassword) {
            confirmPassWordError = "Passwords do not match!";
        }

        if (eMailError) {
            setEmailError(eMailError);
            return false;
        }
        if (passWordError) {
            setPasswordError(passWordError);
            return false;
        }
        if (confirmPassWordError) {
            setConfirmPasswordError(confirmPassWordError);
            return false;
        }

        return true;
    }

    const submit = (e) => {
        if (isValid()) {

            if (password !== confirmPassword) alert("Passwords do not match");
            setLoading(true);
            e.preventDefault();
            axios
                .post(`${BASE_URL}/registration`, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    name,
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
        }
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
        <div style={paperContainer}>
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
                            onChange={(e) => setName(e.target.value)}
                            fullWidth
                            label="Name"
                            placeholder="Enter your name"
                        />
                        <TextField
                            onChange={(e) => setEmail(e.target.value)}
                            fullWidth
                            label="Email"
                            placeholder="Enter your email"
                            error={emailError !== ""}
                            helperText={emailError === "" ? '' : emailError}
                        />
                        <TextField
                            onChange={(e) => setPassword(e.target.value)}
                            fullWidth
                            label="Password"
                            type="password"
                            placeholder="Enter your password"
                        />
                        <TextField
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            fullWidth
                            label="Confirm Password"
                            type="password"
                            placeholder="Confirm your password"
                        />
                        <Button type="submit" variant="contained" style={button}>
                            Sign up
                        </Button>
                    </form>
                </Paper>
            </Grid>
        </div>
    );
}

export default Register;

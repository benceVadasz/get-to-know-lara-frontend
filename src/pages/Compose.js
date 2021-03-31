import React, { useState } from "react";
import { Grid, Paper, TextField, Button } from "@material-ui/core";
import axios from "axios";
import Spinner from "react-spinner-material";
import {BASE_URL} from "../constants";

function Compose() {
    const paperStyle = {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        padding: "30px 20px",
        height: 280,
        width: 500,
        margin: "70px auto",
    };
    const formStyle = {
        height: 260,
        display: "flex",
        flexFlow: "column wrap",
        justifyContent: "space-between",
    };
    const load = {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    };
    const messageStyle = { marginBottom: 20 };
    const button = { color: "white", backgroundColor: "#090F4B"};
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState("");

    const submit = (e) => {
        if (subject.length < 255) {
            alert("message cannot be longer than 255 characters");
        } else {
            const token = sessionStorage.getItem("token");
            setLoading(true);
            e.preventDefault();
            return axios({
                method: "post",
                url:
                    `${BASE_URL}/compose`,

                headers: { Authorization: "Bearer " + token },
                params: { email, subject, message },
            })
                .then((response) => {
                    setLoading(false);
                    console.log(response);
                    window.location.href = "/";
                })
                .catch(function (error) {});
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
                />
            </div>
        );

    return (
        <div>
            <Grid>
                <Paper elevation={20} style={paperStyle}>
                    <form id="form" style={formStyle} onSubmit={submit}>
                        <TextField
                            fullWidth
                            onChange={(e) => setEmail(e.target.value)}
                            label="To: (email)"
                            name="email"
                            placeholder="Enter your email"
                        />
                        <TextField
                            fullWidth
                            onChange={(e) => setSubject(e.target.value)}
                            label="Subject"
                            type="text"
                            name="subject"
                            placeholder="Subject..."
                        />
                        <TextField
                            fullWidth
                            style={messageStyle}
                            onChange={(e) => setMessage(e.target.value)}
                            label="Message"
                            type="text"
                            name="Message"
                            placeholder="Message..."
                        />
                        <Button type="submit" variant="contained" style={button}>
                            Send
                        </Button>
                    </form>
                </Paper>
            </Grid>
        </div>
    );
}

export default Compose;

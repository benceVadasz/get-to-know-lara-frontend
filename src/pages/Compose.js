import React, { useState } from "react";
import {
    Grid,
    Paper,
    TextField,
    Button, Link,
} from "@material-ui/core";
import axios from "axios";
import Spinner from "react-spinner-material";
import {BASE_URL} from "../constants";
import InboxHeader from "../components/InboxHeader";
import InboxSideBar from "../components/InboxSideBar";
import IconButton from "@material-ui/core/IconButton";
import SendIcon from "@material-ui/icons/Send";

function Compose() {
    const paperStyle = {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        padding: "30px 20px",
        height: 345,
        width: 920,
        margin: "70px auto",
    };
    const formStyle = {
        height: 290,
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
    const messageStyle = { marginBottom: 10};
    const button = { alignSelf: 'flex-end', color: "white", backgroundColor: "#090F4B", width: 70, borderRadius: 5, '&:hover': {background: "#D31D00"}};
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const submit = (e) => {
        if (message.length > 255) {
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
                .catch(function (error) {
                    alert('Email not found')
                    window.location.href = "/compose";
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
                />
            </div>
        );

    return (
        <div>
            <InboxHeader/>
            <InboxSideBar />
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
                            multiline
                            rows={5}
                        />
                        <IconButton
                            style={button}
                            component={Link}
                            to="/mail/compose"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <SendIcon />
                        </IconButton>
                    </form>
                </Paper>
            </Grid>
        </div>
    );
}

export default Compose;

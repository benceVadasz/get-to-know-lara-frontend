import React, {useState} from "react";
import {
    Grid,
    Paper,
    TextField,
    Button,
} from "@material-ui/core";
import axios from "axios";
import Spinner from "react-spinner-material";
import {BASE_URL} from "../constants";
import InboxHeader from "../components/InboxHeader";
import InboxSideBar from "../components/InboxSideBar";
import SendIcon from "@material-ui/icons/Send";
import DraftModal from "../components/DraftModal";

function Compose() {
    const paperStyle = {
        backgroundColor: "#f4f5f5",
        padding: "30px 20px",
        height: 345,
        width: 920,
        margin: "70px auto",
    };
    const buttonWrapper = {
        marginLeft: 745,
        display: 'flex',
        flexFlow: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        width: 150
    }
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
    const messageStyle = {marginBottom: 10};
    const button = {
        alignSelf: 'flex-end',
        color: "white",
        backgroundColor: "#090F4B",
        width: 70,
        borderRadius: 5,
        '&:hover': {background: "#D31D00"}
    };
    const token = sessionStorage.getItem("token");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [messageError, setMessageError] = useState("");
    const [loading, setLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);


    const submit = (e) => {
        setLoading(true);
        e.preventDefault();
        return axios({
            method: "post",
            url:
                `${BASE_URL}/compose`,

            headers: {Authorization: "Bearer " + token},
            params: {email, subject, message},
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
    };

    const someFieldHasText = () => {
        return (email !== "" || subject !== "" || message !== "");
    }

    const onTextChange = (e) => {
        e.target.value.length > 255 ? setMessageError('Message cannot be longer than 255 chars') :
        setMessageError('');
        setMessage(e.target.value);
    }

    const saveDraft = () => {
        if (someFieldHasText) {
            setLoading(true);
            return axios({
                method: "post",
                url:
                    `${BASE_URL}/draft`,

                headers: {Authorization: "Bearer " + token},
                params: {email, subject, message},
            })
                .then((response) => {
                    setLoading(false);
                    console.log(response);
                    window.location.href = "/";
                })
                .catch(function (error) {
                    alert('Could not save draft')
                    window.location.href = "/draft";
                });
        }
    }

    if (loading)
        return (
            <div style={load}>
                <Spinner
                    size={120}
                    spinnerColor={"#333"}
                    spinnerWidth={2}
                    visible={true}
                    color={'#D31D00'}
                />
            </div>
        );

    return (
        <div>
            <InboxHeader/>
            <InboxSideBar/>
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
                            onChange={onTextChange}
                            label="Message"
                            type="text"
                            name="Message"
                            placeholder="Message..."
                            multiline
                            rows={5}
                            error={messageError !== ""}
                            helperText={messageError === "" ? '' : messageError}
                        />
                        <div style={buttonWrapper}>

                            <Button
                                style={button}
                                type="submit"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                color="inherit"
                            >
                                <SendIcon/>
                            </Button>
                            <Button
                                style={button}
                                aria-haspopup="true"
                                color="inherit"
                                onClick={someFieldHasText() ? () => setIsModalOpen(true) : () => window.location.href = '/inbox'}
                            >
                                Cancel
                            </Button>
                        </div>
                    </form>
                </Paper>
            </Grid>
            <DraftModal open={isModalOpen} onClose={() => setIsModalOpen(false)} onDraftSave={saveDraft}/>
        </div>
    );
}

export default Compose;

import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import Spinner from "react-spinner-material";
import {makeStyles} from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Account from '@material-ui/icons/AccountCircle';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {BASE_URL} from '../constants';
import {Grid, Paper, TextField} from "@material-ui/core";

export default function MailDetail() {
    const token = sessionStorage.getItem("token");
    const useStyles = makeStyles({
        root: {
            maxWidth: "97%",
            height: 690,
            marginLeft: 20,
        },
        load: {
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
        },
        title: {
            // fontSize: ,
        },
        paperStyle: {
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            padding: "30px 20px",
            height: 645,
            width: 1200,
            margin: "70px auto",
            color: 'white',
        },
        box: {
            height: 645,
            display: 'flex',
            justifyContent: "space-around",
            alignItems: 'flex-start',
            flexFlow: 'column',
        },
        sender: {
            marginTop: -4,
            marginLeft: 10,
            fontWeight: 'bolder',
        },
        horizontalBox: {
            marginBottom: 30,
            display: 'flex',
            flexFlow: 'row',
        },
        message: {
            textAlign: 'left',
            width: 1000
        },
        senderMail: {
            marginTop: -4,
            marginLeft: 10,
        },
        markBtn: {
            marginLeft: 10,
        },
        subject: {
            marginTop: -5,
            marginRight: 690,
        },
        time: {
            color: '#C4C4C4'
        }
    });
    const classes = useStyles();
    let {id} = useParams();
    console.log(id)
    const [mailData, setMail] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get(
                `${BASE_URL}/getOneMail`,
                {
                    headers: {
                        Authorization: "Bearer " + sessionStorage.getItem("token"),
                    },
                    params: {
                        id
                    },
                }
            )
            .then((res) => {
                setLoading(false);
                setMail(res.data.mail[0]);
            });
    }, [id]);

    const markUnread = () => {
        axios({
            method: "get",
            url:
                `${BASE_URL}/markUnRead`,

            headers: {Authorization: "Bearer " + token},
            params: {
                id,
            }
        }).then(() => {
            window.location.href = "/inbox";
        });
    }

    if (loading) {
        return (
            <div className={classes.load}>
                <Spinner
                    size={120}
                    spinnerColor={"#333"}
                    spinnerWidth={2}
                    visible={true}
                    color={'#D31D00'}
                />
            </div>
        );
    }

    return (
        <div>

            <Grid>
                <Paper elevation={20} className={classes.paperStyle}>
                    <CardContent className={classes.box}>
                        <div className={classes.horizontalBox}>
                            <Typography className={classes.subject} variant="h4" component="h2">
                                {mailData.subject}
                            </Typography>
                            <Typography className={classes.time} variant="h6" component="h2">
                                {mailData.sent}
                            </Typography>
                        </div>
                        <div className={classes.horizontalBox}>
                            <Account/>
                            <Typography variant="h5" className={classes.sender}>
                                {mailData.name}
                            </Typography>
                            <Typography variant="h6" className={classes.senderMail}>
                                {'< ' + mailData.email + ' >'}
                            </Typography>
                        </div>
                        <Typography className={classes.message}>
                            {mailData.message}
                        </Typography>
                        <div className={classes.horizontalBox}>
                            <Button
                                // onClick={reply}
                                color="primary"
                                variant="contained"
                                className={classes.joinBtn}
                                component={Link}
                            >
                                Reply
                            </Button>
                            <Button
                                onClick={markUnread}
                                color="primary"
                                variant="contained"
                                className={classes.markBtn}
                                component={Link}
                            >
                                Mark as unread
                            </Button>
                        </div>
                    </CardContent>
                </Paper>
            </Grid>
        </div>
    );
}

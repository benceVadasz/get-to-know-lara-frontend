import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Spinner from "react-spinner-material";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {BASE_URL} from '../constants';

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
            fontSize: 14,
        },
    });
    const classes = useStyles();
    let { id } = useParams();
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

            headers: { Authorization: "Bearer " + token },
            params: {id,
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
            <Card className={classes.root}>
                <CardContent className={classes.box}>
                    <Typography
                        className={classes.title}
                        color="textSecondary"
                        gutterBottom
                    >
                        From
                    </Typography>
                    <Typography variant="h5" component="h2">
                        {mailData.name}
                    </Typography>
                    <Typography
                        className={classes.title}
                        color="textSecondary"
                        gutterBottom
                    >
                        Subject
                    </Typography>
                    <Typography variant="h5" component="h2">
                        {mailData.subject}
                    </Typography>
                    <Typography
                        className={classes.title}
                        color="textSecondary"
                        gutterBottom
                    >
                        Message
                    </Typography>
                    <Typography variant="h5" component="h2">
                        {mailData.message}
                    </Typography>
                    <Typography
                        className={classes.title}
                        color="textSecondary"
                        gutterBottom
                    >
                        Sent at
                    </Typography>
                    <Typography variant="h5" component="h2">
                        {mailData.sent}
                    </Typography>
                    <Button
                        onClick={markUnread}
                        color="primary"
                        variant="contained"
                        className={classes.joinBtn}
                        component={Link}
                    >
                        Mark unread
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}

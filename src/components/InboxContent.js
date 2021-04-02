import React, {useState, useEffect} from "react";
import {makeStyles} from "@material-ui/core/styles";
import axios from 'axios';
import Typography from "@material-ui/core/Typography";
import {BASE_URL} from '../constants';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            background: 'transparent'
        },
    },
    button: {backgroundColor: "#090F4B", color: "white", '&:hover': {background: "#D31D00"}},
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    title: {
        marginTop: 270,
        marginLeft: 160,
        fontFamily: 'Sarabun, sans-serif',
        width: 700,
        color: '#D31D00'
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
}));

function InboxHeader() {
    const token = sessionStorage.getItem("token");
    const classes = useStyles();
    const [mails, setMails] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get(`${BASE_URL}/inbox`, {
                headers: {
                    Authorization: "Bearer " + token,
                },
            })
            .then((res) => {
                setLoading(false);
                console.log(res.data);
                setMails(res.data.mail);
            });
        // eslint-disable-next-line
    }, []);
    if (loading)
        return (
            <main className={classes.content}>
                <div className={classes.toolbar}/>
                <div className={classes.load}>
                    <Typography
                        className={classes.title}
                        align="center"
                        gutterBottom
                        variant="h4"
                        component="h3"
                    >
                        Your mails are loading...
                    </Typography>
                </div>
            </main>
        );
    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <p>poop</p>
        </main>
    );
}

export default InboxHeader;

import React, { useState, useEffect } from "react";
import {makeStyles} from "@material-ui/core/styles";
import axios from 'axios';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            background: 'transparent'
        },
    },
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
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
}));

function InboxHeader() {
    const token = sessionStorage.getItem("token");
    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [mails, setMails] = useState([]);
    const baseUrl =
        "http://localhost:8888/get-to-know-lara/get-to-know-lara-backend/public/api/inbox";
    const [loading, setLoading] = useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    useEffect(() => {
        setLoading(true);
        axios
            .get(baseUrl, {
                headers: {
                    Authorization: "Bearer " + token,
                },
            })
            .then((res) => {
                setLoading(false);
                console.log(res.data);
                setMails(res.data.mail);
            });
    }, []);
    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <p>poop</p>
        </main>
    );
}

export default InboxHeader;

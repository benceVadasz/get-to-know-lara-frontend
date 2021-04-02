import React, {useState, useEffect} from "react";
import {makeStyles} from "@material-ui/core/styles";
import axios from 'axios';
import Typography from "@material-ui/core/Typography";
import {BASE_URL} from '../constants';
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";

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
        setMails([{'name': 'Ben', 'sent': '2010'}, {'name': 'Bob', 'sent': '2012'}]);
        axios
            .get(`${BASE_URL}/inbox`, {
                headers: {
                    Authorization: "Bearer " + token,
                },
            })
            .then((res) => {
                setLoading(false);
                console.log(res.data);
                // setMails(res.data.mail);

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
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Subject</TableCell>
                            <TableCell align="right">From</TableCell>
                            <TableCell align="right">Sent at</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {mails.map((mail, i) => (
                            <TableRow key={mail.id}>
                                {/*<TableCell className={classes.linkTitle}>*/}
                                {/*    {!mail.is_read ? (*/}
                                {/*        <i id="dot" class="fa fa-circle" aria-hidden="true"></i>*/}
                                {/*    ) : (*/}
                                {/*        ""*/}
                                {/*    )}*/}
                                {/*    <Link*/}
                                {/*        to={"view/" + mail.mailId}*/}
                                {/*        // onClick={openMail(mail.id)}*/}
                                {/*        className={classes.mailLink}*/}
                                {/*        align="left"*/}
                                {/*    >*/}
                                {/*        {mail.subject}*/}
                                {/*    </Link>*/}
                                {/*</TableCell>*/}
                                <TableCell align="right">{mail.name}</TableCell>
                                <TableCell align="right">{mail.sent}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </main>
    );
}

export default InboxHeader;

import React, {useState, useEffect} from "react";
import axios from 'axios';
import {Link} from "react-router-dom";
import {withStyles, makeStyles} from '@material-ui/core/styles';
import {BASE_URL} from '../constants';
import emptySent from "../assets/emptySent.png";
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
    table: {
        backgroundColor: "#151969",
        color: "black",
        width: 1020,
    },
    tableHead: {
        color: "white",
        backgroundColor: '#151868 !important',
    },
    last: {
        marginRight: 50
    },
    mailLink: {
        cursor: 'pointer',
        textDecoration: "none",
        border: "none",
    },
}));
const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: '#151868 !important',
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: 'white',
        },
        '&:nth-of-type(even)': {
            backgroundColor: '#f4f5f5',
        },
    },
}))(TableRow);

function SentContent() {
    const token = sessionStorage.getItem("token");
    const classes = useStyles();
    const [mails, setMails] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get(`${BASE_URL}/sent`, {
                headers: {
                    Authorization: "Bearer " + token,
                },
            })
            .then((res) => {
                setLoading(false);
                console.log(res.data);
                setMails(res.data.mail);

            })
            .catch((e) => {
                console.log(e)
            });
        // eslint-disable-next-line
    }, []);
    if (loading)
        return (
            <main className={classes.content}>
                <div className={classes.toolbar}/>
                <TableContainer className={classes.table} component={Paper}>
                    <Table aria-label="customized table">
                        <TableHead className={classes.tableHead}>
                            <TableRow className={classes.tableHead}>
                                <StyledTableCell c>Your mails are loading...&nbsp;</StyledTableCell>
                            </TableRow>
                        </TableHead>
                    </Table>
                </TableContainer>
            </main>
        );
    return mails.length <= 0 ? <img src={emptySent} className={'empty-img'} alt="" width="600px"/> :
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <TableContainer className={classes.table} component={Paper}>
                <Table aria-label="customized table">
                    <TableHead className={classes.tableHead}>
                        <TableRow className={classes.tableHead}>
                            <StyledTableCell c>Subject&nbsp;</StyledTableCell>
                            <StyledTableCell align="right">To&nbsp;</StyledTableCell>
                            <StyledTableCell align="right">Sent at&nbsp;</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {mails.map((mail) => (
                            <StyledTableRow key={mail.name}>
                                <StyledTableCell component="th" scope="row">
                                    <Link
                                        to={"view/" + mail.mailId}
                                        className={classes.mailLink}
                                        align="left"
                                    >
                                        {mail.subject}
                                    </Link>
                                </StyledTableCell>
                                <StyledTableCell align="right">{mail.name}</StyledTableCell>
                                <StyledTableCell align="right">{mail.sent}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </main>
}

export default SentContent;

import React, {useState, useEffect} from "react";
import axios from 'axios';
import { withStyles, makeStyles } from '@material-ui/core/styles';
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
    table: {
        backgroundColor: 'transparent',
        color: "black",
    },
    tableHead: {
        color: "white",
        backgroundColor: '#151868',
    },
    last: {
        marginRight: 50
    }
}));
const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: '#151868',
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: '#f4f5f5',
        },
    },
}))(TableRow);

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
                <Table className={classes.table} aria-label="customized table">
                    <TableHead className={classes.tableHead}>
                        <TableRow className={classes.tableHead}>
                            <StyledTableCell c>Dessert (100g serving)</StyledTableCell>
                            <StyledTableCell align="right">Calories</StyledTableCell>
                            <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
                            <StyledTableCell className={classes.last}  align="right">Carbs&nbsp;(g)</StyledTableCell>
                            {/*<StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>*/}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {mails.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                    {row.name}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.calories}</StyledTableCell>
                                <StyledTableCell align="right">{row.fat}</StyledTableCell>
                                <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                                <StyledTableCell align="right">{row.protein}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </main>
    );
}

export default InboxHeader;

import {makeStyles} from "@material-ui/core/styles";

export const style = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: "auto",
        width: "100%",
        minHeight: "90vh",
        background: "#FFFFFF",
        borderBottom: "none",
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        marginTop: 90,
        display: "block",
        marginRight: 20,
        width: 800,
    },
    welcomeBlock: {
        marginTop: "190px",
        marginLeft: "80px",

    },
    welcomeWord: {
        fontFamily: 'Fugaz One, cursive'
    },
    trait: {
        color: "#859DF4",
    },
    welcomeText: {
        fontFamily: 'Lato, sans-serif',
        fontSize: 16
    },
}));
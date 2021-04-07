import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import InboxHeader from "../components/InboxHeader";
import InboxSideBar from "../components/InboxSideBar";
import MailContent from "../components/MailContent";


const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        backgroundColor: "rgba(255, 255, 255, 0)",
    },
}));

function MailDetail() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <InboxHeader/>
            <InboxSideBar />
            <MailContent/>
        </div>
    );
}

MailDetail.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default MailDetail;
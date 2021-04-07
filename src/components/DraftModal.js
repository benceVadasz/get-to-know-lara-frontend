import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function DraftModal({open, onClose, onDraftSave}) {

    if (!open) return null

    return (
        <div>
            <Dialog
                open={open}
                onClose={onClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Do you want to save this email as a draft?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">

                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onDraftSave} color="primary">
                        Yes
                    </Button>
                    <Button onClick={onClose} color="primary" autoFocus>
                        No
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

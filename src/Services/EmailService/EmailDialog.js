import * as React from 'react';
import Button from "@material-ui/core/Button";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import "./EmailFormDialog.css";
import {sendMail} from "./EmailService";
import {useState} from "react";


export default function EmailDialog() {
    const [open, setOpen] = React.useState(false);
    const [formText, setFormText] = useState({name: '', subject: '', text: ''});

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const dialogWidth = 'md';

    function formatEmail() {
        return formText.text+"\n\n"+formText.name
    }

    async function sendEmail() {
        const formatedText = formatEmail();
        const emailSubject = formText.subject;
        await sendMail(formatedText, emailSubject);
        setOpen(false)
    }

    return (
        <div>
            <Button variant="contained" onClick={handleClickOpen}>
                Contact my doctor
            </Button>
            <Dialog open={open} onClose={handleClose} fullWidth maxWidth={dialogWidth}>
                <DialogTitle className="dialogTitle">Contact Form</DialogTitle>
                <DialogContent>

                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        helperText="Please enter your full name"
                        id="full-name"
                        label="Full Name"
                        fullWidth
                        InputLabelProps={{ shrink: true }}
                        value={formText.name}
                        onChange={e => {setFormText({...formText, name: e.target.value})}}
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        InputLabelProps={{ shrink: true }}
                        id="subject"
                        label="Subject"
                        helperText="Please enter the subject of your message"
                        fullWidth
                        value={formText.subject}
                        onChange={e => {setFormText({...formText, subject: e.target.value})}}
                        variant="standard"
                        />
                    <TextField
                        autoFocus
                        multiline
                        required
                        rows={3}
                        margin="dense"
                        InputLabelProps={{ shrink: true }}
                        id="message"
                        label="Message"
                        helperText="Please enter your message"
                        fullWidth
                        value={formText.text}
                        onChange={e => {setFormText({...formText, text: e.target.value})}}
                        variant="standard"
                        />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={sendEmail}>Submit</Button>
                </DialogActions>
            </Dialog>

        </div>
    );
}
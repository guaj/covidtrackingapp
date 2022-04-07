import {useEffect, useState} from "react";
import {getPatientInfo} from "../../../databaseServices";
import * as React from "react";
import {Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";



export const HealthStatusView = ({open, handleClose}) => {
    const [data, setData] = useState({});


    useEffect(() => {
        (async () => {
            let userEmail = window.location.href.split("/")[4];
            await getPatientInfo(setData, userEmail);
        })()
    }, []);

    return (
        <>
            <Dialog
                open={open}
                fullWidth="true"
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth="xs"
            >
                <DialogContent>
                    <Grid item md={12} sx={{ height: "60%" }} justifyContent="center">
                        <Typography variant="h5" component="div" color="text.secondary" sx={{ textAlign: "center" }}>Symptoms
                            <hr style={{width: "70%"}}/>
                        </Typography>
                        <ul style={{ paddingLeft: "15%", margin: "2% auto", lineHeight: "3", width: "70%", color: "#666666" }}>
                            {((data || {}).symptoms || {}).symptom1 ? <li style={{ margin: "0 auto" }}>new or worsening cough</li> : null}
                            {((data || {}).symptoms || {}).symptom2 ? <li>shortness of breath</li> : null}
                            {((data || {}).symptoms || {}).symptom3 ? <li>loss of taste or smell</li> : null}
                            {((data || {}).symptoms || {}).symptom4 ? <li>chest pain</li> : null}
                            {((data || {}).symptoms || {}).symptom5 ? <li>chills</li> : null}
                            {((data || {}).symptoms || {}).symptom6 ? <li>fatigue and/or weakness</li> : null}
                            {((data || {}).symptoms || {}).symptom7 ? <li>bodily aches</li> : null}
                            {((data || {}).symptoms || {}).symptom8 ? <li>headache</li> : null}
                            {((data || {}).symptoms || {}).symptom9 ? <li>abdominal pain</li> : null}
                            {((data || {}).symptoms || {}).symptom10 ? <li>diarrhea and/or vomiting</li> : null}
                            {((data || {}).symptoms || {}).symptom11 ? <li>feelings of malaise</li> : null}
                        </ul>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
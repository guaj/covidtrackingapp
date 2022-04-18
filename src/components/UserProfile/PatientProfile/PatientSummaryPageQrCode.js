import * as React from "react";
import { Card, CardActions, CardContent } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@material-ui/core/Button";
import { useEffect, useState } from "react";
import { getPatientInfo } from "../../../databaseServices";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

export default function PatientSummaryPageQrCode() {

    const [data, setData] = useState({});

    useEffect(() => {
        (async () => {
            let userEmail = window.location.href.split("/")[3];
            await getPatientInfo(setData, userEmail);
        })()
    }, []);

    return (
        <Container data-testid="patientSummary" maxWidth="md" >
            <Card sx={{ minWidth: "25%", minHeight: "700px", marginTop: "10%", boxShadow: 3, height: "700px" }}>
                <CardContent sx={{ display: 'flex', alignItems: "center", flexDirection: "column", justifyContent: "center", paddingBottom: "10%", marginTop: "2%", height: "100%" }}>
                    <Typography variant="h4" component="div" color="#3f51b5">
                        {data.firstName} {data.lastName}
                    </Typography>

                    <Grid container spacing={3} justifyContent="center" sx={{ marginTop: "2%", height: "80%" }}>
                        <Grid item md={6} sx={{ height: "60%" }}>
                            <Typography variant="h5" component="div" color="text.secondary" sx={{ textAlign: "center" }}>Patient Information<hr style={{ width: "70%" }}></hr></Typography>
                            <div style={{paddingLeft: "15%", margin: "2% auto", lineHeight: "2", width: "80%", color: "#666666" }}>
                                <div >
                                    <b>covid result </b>
                                    <br></br>
                                    {data.covidResult === "positive" ? <a style={{color: '#DB4120'}}>positive</a> : <a style={{color: '#4CAF50'}}>negative</a>}
                                </div>
                                <div>
                                    <b>Date of birth </b>
                                    <br></br>
                                    {data.dob}
                                </div>
                                <div>
                                    <b>Address</b>
                                    <br></br>
                                    {((data || {}).address || {}).streetNumber}, {((data || {}).address || {}).streetName}, {((data || {}).address || {}).city}, Quebec, {((data || {}).address || {}).postalCode}
                                </div>
                                <div>
                                    <b>RAMQ number </b>
                                    <br></br>
                                    {data.RAMQ}
                                </div>
                            </div>



                        </Grid>
                        <Grid item md={6} sx={{ height: "60%" }} justifyContent="center">
                            <Typography variant="h5" component="div" color="text.secondary" sx={{ textAlign: "center" }}>Symptoms<hr style={{ width: "70%" }}></hr></Typography>
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
                    </Grid>
                    <Button variant="contained" color="primary" sx={{ bottom: "-20px", position: "absolute" }} onClick={() => window.print()}>Print</Button>
                </CardContent>
            </Card>


        </Container>
    );
}
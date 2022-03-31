import * as React from "react";
import {Card, CardActions, CardContent} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@material-ui/core/Button";
import {useEffect, useState} from "react";
import {getPatientInfo} from "../../../databaseServices";

export default function PatientSummaryPageQrCode() {

    const [data, setData] = useState([]);

    let userEmail = window.location.href.split("/")[4];

    useEffect(() => {(async () => await getPatientInfo(setData))()}, []);

        return (
            <>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography variant="h5" component="div">

                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            adjective
                        </Typography>
                        <Typography variant="body2">
                            well meaning and kindly.
                            <br />
                            {'"a benevolent smile"'}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </>
        );
}
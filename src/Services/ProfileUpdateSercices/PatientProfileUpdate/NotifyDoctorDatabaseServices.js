import AWS from "aws-sdk";
import awsConfig from '../../../aws-config.json';

AWS.config.update(awsConfig);
const docClient = new AWS.DynamoDB.DocumentClient();

export async function notifyDoctor(email, patientFirstName, patientLastName, patientEmail, type) {
    var currentDate = Date().toLocaleString();
    let content = ""

    if (type === "patient profile update")
        content = "Patient, " + patientFirstName + " " + patientLastName + ", has updated their profile information. Click to view their profile."
    else if (type === "patient symptoms update")
        content = "Patient, " + patientFirstName + " " + patientLastName + ", has updated their health status. Click to view their profile."
    else {
        console.error("INVALID TYPE: notifyDoctor() takes type \"patient profile update\" or \"patient symptoms update\"")
        return
    }

    const params ={
        TableName: "notifications",
        Item:{
            "email": String(email),
            "type": type,
            "content": content,
            "date": String(currentDate),
            "patientemail": patientEmail
        }
    }

    docClient.put(params, function (err) {
        if (err) {
            console.error("Unable to send notification. Error JSON:", JSON.stringify(err, null, 2));
            alert('ERROR: Unable to send notification! Contact support if issue persists.')
        } else {
            console.log("Notification sent!");
            alert('Your doctor has been notified!');
        }
    });
};
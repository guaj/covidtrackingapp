import awsConfig from '../../aws-config.json';
import AWS from 'aws-sdk';

AWS.config.update(awsConfig);
export async function sendMail(mailText, mailSubject) {

    // Create sendEmail params
    var params = {
        Destination: { /* required */
            ToAddresses: [
                // define email to send address to here!!
                // need to be a verified aws email, see https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html
                'jasmingm98@gmail.com',
                /* more items */
            ]
        },
        Message: { /* required */
            Body: { /* required */
                Html: {
                    Charset: "UTF-8",
                    Data: String(mailText)
                },
                Text: {
                    Charset: "UTF-8",
                    Data: String(mailText)
                }
            },
            Subject: {
                Charset: 'UTF-8',
                Data: String(mailSubject)
            }
        },
        // need to be a verified aws email, see https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html
        Source: 'jasmingm98@gmail.com', /* required */
    };

// Create the promise and SES service object
    try {
        var sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise();

// Handle promise's fulfilled/rejected states
        sendPromise.then(
            function(data) {
                console.log(data.MessageId);
                alert("Email sent to jasmingm98@gmail.com!!");
            }).catch(
            function(err) {
                console.error(err, err.stack);
            });
    }catch (e) {
        console.log(e);
    }

}

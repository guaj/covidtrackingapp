import AWS from 'aws-sdk';
import awsConfig from '../../aws-config.json';

try {
    AWS.config.update(awsConfig);
}catch (e) {}

/**
 *
 * @returns JSON object:  the email of the patient assigned doctor
 */
async function retrieveDoctorEmail() {
    var docClient = new AWS.DynamoDB.DocumentClient();
    let userEmail = JSON.parse(localStorage.getItem("email"))
    var params = {
        TableName: "patients",
        Key: {
            "email": String(userEmail),
        }
    };

    let response = await docClient.get(params).promise();
    return response.Item.doctor;
}


/**
 * @param doctorEmail {string}
 * @returns {Promise<DocumentClient.GetItemOutput &
 * {$response: Response<DocumentClient.GetItemOutput, Error &
 * {code: string, message: string, retryable?: boolean, statusCode?: number,
 * time: Date, hostname?: string, region?: string, retryDelay?: number,
 * requestId?: string, extendedRequestId?: string, cfId?: string, originalError?: Error}>}>}
 */
async function retrieveDoctorSchedule(doctorEmail) {
    AWS.config.update(awsConfig);
    var docClient = new AWS.DynamoDB.DocumentClient();
    var params = {
        TableName: "DoctorSchedule",
        Key: {
            "email": String(doctorEmail),
        }
    };

    return await docClient.get(params).promise();
}



/**
 *
 * @param time of the appointment
 * @param date of the appointment
 * @returns {Promise<void>}
 */
export async function createAppointment(time, date) {
    try{
        var docClient = new AWS.DynamoDB.DocumentClient();
        const patientEmail = JSON.parse(localStorage.getItem("email"))
        const doctorEmail = await retrieveDoctorEmail();
        var params = {
            TableName: 'appointments',
            Item: {
                "patientEmail": String(patientEmail),
                "date": String(date),
                "time": String(time),
                "doctorEmail": String(doctorEmail)
            }
        }
    }catch (e){console.log(e)}


    docClient.put(params, function (err, data) {
        if (err) {
            alert('Error from put: '+ err)
        } else {
            alert('Success: '+ data)
        }
    })
}


/**
 *
 * @returns an array of day with daily availabilities
 * The index of the returned array refer to the day (sunday = 0...saturday = 6)
 */
export async function findAvailAppointments() {
    let doctorEmail = await retrieveDoctorEmail();
    let availTimes = await retrieveDoctorSchedule(doctorEmail);
    let dates = availTimes.Item.dailyAvailabilities.split(",");
    let adaptedAvail = datesToDayArrayAdapter(dates)
    return adaptedAvail;
}

/**
 * Return an array of day with daily availabilities
 * The index of the returned array refer to the day (sunday = 0...saturday = 6)
 *
 * @param datesArray: an array containing dates (day+time) for each weekly availability
 */
function datesToDayArrayAdapter(datesArray) {
    let dayArray = ["","","","","","",""];
    datesArray.forEach( date => {
        dayArray = dayArrayCreator(date, dayArray);
    })
    return dayArray;
}



function dayArrayCreator(date, datesArray) {
    let temp = date.split(" ");
    const day = temp[0];
    const time = temp[4];
    switch (day) {
        case "Sun" :
            datesArray[0] = concatTimes(0, time, datesArray);
            return datesArray;
        case "Mon" :
            datesArray[1] = concatTimes(1, time, datesArray);
            return datesArray;
        case "Tue" :
            datesArray[2] = concatTimes(2, time, datesArray);
            return datesArray;
        case "Wed" :
            datesArray[3] = concatTimes(3, time, datesArray);
            return datesArray;
        case "Thu" :
            datesArray[4] = concatTimes(4, time, datesArray);
            return datesArray;
        case "Fri" :
            datesArray[5] = concatTimes(5, time, datesArray);
            return datesArray;
        case "Sat" :
            datesArray[6] = concatTimes(6, time, datesArray);
            return datesArray;
        default :
            return datesArray;
    }
}

function concatTimes(index, time, datesArray) {
    if(datesArray[index] === "")
        return datesArray[index].concat(time)
    return datesArray[index].concat(";", time);

}




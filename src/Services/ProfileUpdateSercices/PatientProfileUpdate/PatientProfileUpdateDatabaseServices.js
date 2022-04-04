import AWS from "aws-sdk";
import awsConfig from '../../../aws-config.json';

AWS.config.update(awsConfig);
const docClient = new AWS.DynamoDB.DocumentClient();

//variable to check store address or symptom list undefined state
let undefinedAddressOrSymptomsList = false;

export async function fetchData(tableName) {
    const params = {
        TableName: tableName,
        ExpressionAttributeValues: {":email": JSON.parse(localStorage.getItem("email"))},
        KeyConditionExpression: 'email = :email'
    }

    let result = null;
    try {
        result = await docClient.query(params).promise();
        if (result.Items.at(0).address === undefined || result.Items.at(0).symptoms === undefined)
            undefinedAddressOrSymptomsList = true;
    } finally {
        const formValues = {
            id: 1,
            firstName: (result.Items.at(0).firstName !== undefined ? result.Items.at(0).firstName : ""),
            lastName: (result.Items.at(0).lastName !== undefined ? result.Items.at(0).lastName : ""),
            dob: (result.Items.at(0).dob !== undefined ? result.Items.at(0).dob : ""),
            streetNumber: (result.Items.at(0).address !== undefined ? (result.Items.at(0).address.streetNumber !== undefined ? result.Items.at(0).address.streetNumber : "") : ""),
            streetName: (result.Items.at(0).address !== undefined ? (result.Items.at(0).address.streetName !== undefined ? result.Items.at(0).address.streetName : "") : ""),
            apartmentNumber: (result.Items.at(0).address !== undefined ? (result.Items.at(0).address.apartmentNumber !== undefined ? result.Items.at(0).address.apartmentNumber : "") : ""),
            postalCode: (result.Items.at(0).address !== undefined ? (result.Items.at(0).address.postalCode !== undefined ? result.Items.at(0).address.postalCode : "") : ""),
            city: (result.Items.at(0).address !== undefined ? (result.Items.at(0).address.city !== undefined ? result.Items.at(0).address.city : "") : ""),
            province: (result.Items.at(0).address !== undefined ? (result.Items.at(0).address.province !== undefined ? result.Items.at(0).address.province : "") : ""),
            phoneNumber: (result.Items.at(0).phoneNumber !== undefined ? result.Items.at(0).phoneNumber : ""),
            email: result.Items.at(0).email,
            ramQNumber: (result.Items.at(0).ramQNumber !== undefined ? result.Items.at(0).ramQNumber : ""),
            insurance: (result.Items.at(0).insurance !== undefined ? result.Items.at(0).insurance : ""),
            covidResult: (result.Items.at(0).covidResult !== undefined ? result.Items.at(0).covidResult : ""),
            insuranceNumber: (result.Items.at(0).insuranceNumber !== undefined ? result.Items.at(0).insuranceNumber : ""),
            symptom1: (result.Items.at(0).symptoms !== undefined ? (result.Items.at(0).symptoms.symptom1 !== undefined ? result.Items.at(0).symptoms.symptom1 : false) : false),
            symptom2: (result.Items.at(0).symptoms !== undefined ? (result.Items.at(0).symptoms.symptom1 !== undefined ? result.Items.at(0).symptoms.symptom2 : false) : false),
            symptom3: (result.Items.at(0).symptoms !== undefined ? (result.Items.at(0).symptoms.symptom1 !== undefined ? result.Items.at(0).symptoms.symptom3 : false) : false),
            symptom4: (result.Items.at(0).symptoms !== undefined ? (result.Items.at(0).symptoms.symptom1 !== undefined ? result.Items.at(0).symptoms.symptom4 : false) : false),
            symptom5: (result.Items.at(0).symptoms !== undefined ? (result.Items.at(0).symptoms.symptom1 !== undefined ? result.Items.at(0).symptoms.symptom5 : false) : false),
            symptom6: (result.Items.at(0).symptoms !== undefined ? (result.Items.at(0).symptoms.symptom1 !== undefined ? result.Items.at(0).symptoms.symptom6 : false) : false),
            symptom7: (result.Items.at(0).symptoms !== undefined ? (result.Items.at(0).symptoms.symptom1 !== undefined ? result.Items.at(0).symptoms.symptom7 : false) : false),
            symptom8: (result.Items.at(0).symptoms !== undefined ? (result.Items.at(0).symptoms.symptom1 !== undefined ? result.Items.at(0).symptoms.symptom8 : false) : false),
            symptom9: (result.Items.at(0).symptoms !== undefined ? (result.Items.at(0).symptoms.symptom1 !== undefined ? result.Items.at(0).symptoms.symptom9 : false) : false),
            symptom10: (result.Items.at(0).symptoms !== undefined ? (result.Items.at(0).symptoms.symptom1 !== undefined ? result.Items.at(0).symptoms.symptom10 : false) : false),
            symptom11: (result.Items.at(0).symptoms !== undefined ? (result.Items.at(0).symptoms.symptom1 !== undefined ? result.Items.at(0).symptoms.symptom11 : false) : false),
            comments: (result.Items.at(0).comments !== undefined ? result.Items.at(0).comments : ""),
            doctor: (result.Items.at(0).doctor !== undefined ? result.Items.at(0).doctor : ""),
            flag: (result.Items.at(0).flag !== undefined ? result.Items.at(0).flag : false),
        };
        return [formValues];
    }
}

export async function updateData(tableName, data) {
    const params = {
        TableName: tableName,
        Key: {"email": data.email},
        UpdateExpression: "set firstName = :firstName," +
            "lastName = :lastName," +
            "dob = :dob," +
            "address.streetNumber = :streetNumber," +
            "address.streetName = :streetName," +
            "address.apartmentNumber = :apartmentNumber," +
            "address.postalCode = :postalCode," +
            "address.city = :city," +
            "address.province = :province," +
            "phoneNumber = :phoneNumber," +
            "ramQNumber = :ramQNumber," +
            "insurance = :insurance," +
            "insuranceNumber = :insuranceNumber," +
            "covidResult = :covidResult," +
            "symptoms.symptom1 = :symptom1," +
            "symptoms.symptom2 = :symptom2," +
            "symptoms.symptom3 = :symptom3," +
            "symptoms.symptom4 = :symptom4," +
            "symptoms.symptom5 = :symptom5," +
            "symptoms.symptom6 = :symptom6," +
            "symptoms.symptom7 = :symptom7," +
            "symptoms.symptom8 = :symptom8," +
            "symptoms.symptom9 = :symptom9," +
            "symptoms.symptom10 = :symptom10," +
            "symptoms.symptom11 = :symptom11," +
            "comments = :comments," +
            "flag = :flag," +
            "doctor = :doctor",
        ExpressionAttributeValues: {
            ":firstName": data.firstName,
            ":lastName": data.lastName,
            ":dob": data.dob,
            ":streetNumber": data.streetNumber,
            ":streetName": data.streetName,
            ":apartmentNumber": data.apartmentNumber,
            ":postalCode": data.postalCode,
            ":city": data.city,
            ":province": data.province,
            ":phoneNumber": data.phoneNumber,
            ":ramQNumber": data.ramQNumber,
            ":insurance": data.insurance,
            ":insuranceNumber": data.insuranceNumber,
            ":covidResult": data.covidResult,
            ":symptom1": data.symptom1,
            ":symptom2": data.symptom2,
            ":symptom3": data.symptom3,
            ":symptom4": data.symptom4,
            ":symptom5": data.symptom5,
            ":symptom6": data.symptom6,
            ":symptom7": data.symptom7,
            ":symptom8": data.symptom8,
            ":symptom9": data.symptom9,
            ":symptom10": data.symptom10,
            ":symptom11": data.symptom11,
            ":comments": data.comments,
            ":flag": data.flag,
            ":doctor": data.doctor
        },
        ReturnValues: "UPDATED_NEW"
    }

    //create sublists for address or symptoms if they do not already exist for this patient; returns bad request if items already exist
    if (undefinedAddressOrSymptomsList)
        docClient.update({
            TableName: tableName,
            Key: {"email": data.email},
            UpdateExpression: 'set address = :address, symptoms = :symptoms',
            ConditionExpression: 'attribute_not_exists(address) or attribute_not_exists(symptoms)',
            ExpressionAttributeValues: {
                ":address": {},
                ":symptoms": {}
            }
        }, function (err) {
            if (err) {
                console.info("Unable to create new attributes. Attributes already exist!\nError JSON:", JSON.stringify(err, null, 2));
            } else {
                undefinedAddressOrSymptomsList = false;
            }
        });

    //update patient information in the database with the submitted values
    docClient.update(params, function (err, data) {
        if (err) {
            console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
            alert('ERROR: Unable to update profile information! Contact support if issue persists.')
        } else {
            console.log("UpdateItem succeeded:", JSON.stringify(data, null, 2));
            alert('Profile information updated!');
        }
    });
};
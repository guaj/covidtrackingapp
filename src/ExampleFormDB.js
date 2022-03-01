import React, { useState } from "react";
import AWS from 'aws-sdk'
import awsConfig from './aws-config.json'

AWS.config.update(awsConfig);
  
https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html

var docClient = new AWS.DynamoDB.DocumentClient();

function ExampleFormDB() {
    const [orgId, setOrgId] = useState('')
    const [email, setEmail] = useState('')
    const [employeeId, setEmployeeId] = useState('')
    const [password, setPassword] = useState('')

    const handleOrgIdChange = event => {
        setOrgId(event.target.value)
    };
    const handleEmailChange = event => {
        setEmail(event.target.value)
    };
    const handleEmployeeIdChange = event => {
        setEmployeeId(event.target.value)
    };
    const handlePasswordChange = event => {
        setPassword(event.target.value)
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        var params = {
            TableName: "organizations",
            Item: {
                "OrgId": Number(orgId),
                "email": String(email),
                "employeeId": Number(employeeId),
                "password": String(password)
            }
        }
        try {
            await docClient.put(params).promise()
            alert("success!");
        }
        catch(err) {
            alert("Unable to add item: " + "\n" + JSON.stringify(err, undefined, 2));
        }
    }

    

    return (
        <form onSubmit={handleSubmit}>
             <div>
                <label>Organization Id</label>
                <input
                    type="text"
                    name="organizationId"
                    placeholder="Enter organization id"
                    onChange={handleOrgIdChange}
                    value={orgId}
                />
            </div>
            <div>
                <label>Email address</label>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    onChange={handleEmailChange}
                    value={email}
                />
            </div>
            <div>
                <label>employee Id</label>
                <input
                    type="text"
                    name="employeeId"
                    placeholder="Enter employee id"
                    onChange={handleEmployeeIdChange}
                    value={employeeId}
                />
            </div>
            <div>
                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    onChange={handlePasswordChange}
                    value={password}
                />
            </div>
            <button type="submit">
                Submit
            </button>
        </form>
    )
}

export default ExampleFormDB
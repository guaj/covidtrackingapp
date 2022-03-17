import React from "react";
import AWS from 'aws-sdk';
import awsConfig from '../../../aws-config.json';

try {
    AWS.config.update(awsConfig);
}catch (e) {}


var docClient = new AWS.DynamoDB.DocumentClient();


import Button from "@mui/material/Button";
import TableCell from "@mui/material/TableCell";
import * as React from "react";
import {isInNotificationList} from "../../databaseServices";


export function SendNotificationButton(props){

    async function isNotified(email){
       let valid = await isInNotificationList(email);

        console.log(email);
        console.log(valid);
        return valid;
    }
    const sendButton = (
        <Button
            type="submit"
            id={props.email}

        
            disabled={isNotified(props.data.email)}
          
        >
            {isNotified(props.data.email)}
        </Button>
    )
    return sendButton;
}

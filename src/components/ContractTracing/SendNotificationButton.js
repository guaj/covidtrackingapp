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

            //disabled={()=> {async() =>{return await isInNotificationList(item.email)}}}
            //disabled= {isNotified(item.email)}
            //disabled={console.log(isNotified(item.email))}
            disabled={isNotified(props.data.email)}
            //disabled={false}
            //disabled = {isInNotificationList(item.email)}
            // onClick={()=>{
            //     handleSubmitChange();
            //     //isInNotificationList(item.email)
            //>}}
        >
            {isNotified(props.data.email)}
        </Button>
    )
    return sendButton;
}

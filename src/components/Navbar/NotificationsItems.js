import MenuItem from "@mui/material/MenuItem";
import * as React from "react";


export const NotificationsItems = ({data}) => {


    function notificationRedirect(item) {
        // const { myValue } = item.currentTarget.dataset;
        if (item.type === "quarantine information") {
            window.location.href = "/quarantine";
        }
        // const { myValue } = item.currentTarget.dataset;
        // alert(myValue);

        if (item.type === "contact tracing")
            window.location.href = '/tracing-form'

        if (item.type === "patient profile update" || item.type === "patient symptoms update")
            window.location.href = '/profile/' + item.patientemail.split('@')[0]
    }

    function formatDate(date) {
        let temp = date.split("GMT")
        return temp[0];
    }

    return (
        data.map((item, i) =>
            <>
                <MenuItem
                    key={i}
                    data-my-value={item.type}
                    onClick={(event) => {
                        event.preventDefault();
                        notificationRedirect(item)
                    }}
                    style={{whiteSpace: 'normal'}}
                >
                    <p className="notif-text">{item.content}
                        <br/><span className="date-text">{formatDate(item.date)}</span>
                    </p>

                </MenuItem>
            </>
        )
    )
}
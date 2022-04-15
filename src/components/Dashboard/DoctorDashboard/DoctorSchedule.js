import * as React from "react";
import DoctorScheduleSelector from "./DoctorScheduleSelector";

export default class DoctorSchedule extends React.Component {

    render() {
        const email = JSON.parse(localStorage.getItem("email"));

        return (

            <div>
                <DoctorScheduleSelector data={String(email)} />
            </div>


        )
    }
}

import * as React from "react";
import DoctorScheduleSelector from "./DoctorScheduleSelector";

export default class DoctorSchedule extends React.Component {

    email = JSON.parse(localStorage.getItem("email"));
    render() {


        return (

            <div>
                <DoctorScheduleSelector data={String(this.email)} />
            </div>


        )
    }
}

import * as React from 'react';
import ScheduleSelector from 'react-schedule-selector';
import Button from "@material-ui/core/Button";
import "./DoctorSchedule.css";
import {addDoctorSchedule, retrieveDoctorSchedule} from "./DoctorScheduleDynamoDBAdapter";



export function convertScheduleStringToArrayOfDates(scheduleStringData){
    let stringsArray = scheduleStringData.split(",");
    let datesArray = [];
    for (let i = 0; i < stringsArray.length; i++) {
        datesArray.push(new Date (stringsArray[i]))
    }
    return datesArray;
}


export default class DoctorScheduleSelector extends React.Component {
    startDate = new Date(2073, 0, 2);         // the month is 0-indexed
    state = { schedule :[]} // changed = to : ?


    retrieveData = async () => {
        const result = await retrieveDoctorSchedule('DoctorSchedule');
        return convertScheduleStringToArrayOfDates(result.Item.dailyAvailabilities)
    };


    async componentDidMount() {
        this.setState({schedule: await this.retrieveData()});
    }


    handleChange = newSchedule => {this.setState({ schedule: newSchedule })
    }


    handleSave = async () => {
        const scheduleData = this.state;
        await addDoctorSchedule('DoctorSchedule' , scheduleData);
        window.location = "/dashboard";
    }


    render() {
        return (
            <div>
                <ScheduleSelector
                    selection={this.state.schedule}
                    dateFormat={"ddd"}
                    startDate={this.startDate}
                    onChange={this.handleChange}
                />
                <div className="buttonStyle">
                    <Button color="primary"
                            size="large"
                            variant="contained"
                            type="submit"
                            onClick={this.handleSave}
                    >
                        Save
                    </Button>
                </div>

            </div>


        )
    }
}
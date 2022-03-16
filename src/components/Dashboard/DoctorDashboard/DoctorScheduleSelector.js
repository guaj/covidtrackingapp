import * as React from 'react';
import ScheduleSelector from 'react-schedule-selector';
import Button from "@material-ui/core/Button";
import "./DoctorSchedule.css";
import {
    addDoctorSchedule, getDoctorScheduleData,
    retrieveDoctorSchedule,
} from "./DoctorScheduleDynamoDBAdapter";
import AWS from "aws-sdk";


let testDate1 = new Date('Wed Jan 04 2073 11:00:00 GMT-0500 (EST)');
let testDate2 = new Date('Wed Jan 04 2073 12:00:00 GMT-0500 (EST)');
let testDate3 = new Date('Wed Jan 04 2073 13:00:00 GMT-0500 (EST)');
let testDates = [];

// testDates.push(new Date(testDate1));
testDates.push(testDate1);
testDates.push(testDate2);
testDates.push(testDate3);


function convertScheduleStringToArrayOfDates(scheduleStringData){
    let stringsArray = scheduleStringData.split(",");
    let datesArray = [];
    for (let i = 0; i < stringsArray.length; i++) {
        datesArray.push(new Date (stringsArray[i]))
    }
    return datesArray;
}


export default class DoctorScheduleSelector extends React.Component {

    oldSchedule = async () => {
        return testDates
    };


    retrieveData = async () => {
        const result = await retrieveDoctorSchedule('DoctorSchedule');
        return convertScheduleStringToArrayOfDates(result.Item.dailyAvailabilities)
    };

    state = { schedule : []} // changed = to : ?

    async componentDidMount() {
        this.setState({schedule: await this.retrieveData()});
    }

    startDate = new Date(2073, 0, 2);         // the month is 0-indexed

    handleChange = newSchedule => {this.setState({ schedule: newSchedule })
    }

    handleSave = async () => {
        const scheduleData = this.state;
        await addDoctorSchedule('DoctorSchedule' , scheduleData)
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
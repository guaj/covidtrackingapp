import * as React from 'react';
import ScheduleSelector from 'react-schedule-selector';
import Button from "@material-ui/core/Button";
import "./DoctorSchedule.css";
import {addDoctorSchedule, retrieveDoctorSchedule} from "./DoctorScheduleDynamoDBAdapter";
import {CircularProgress} from "@mui/material";



export function convertScheduleStringToArrayOfDates(scheduleStringData){
    let stringsArray = scheduleStringData.split(",");
    let datesArray = [];
    for (let i = 0; i < stringsArray.length; i++) {
        datesArray.push(new Date (stringsArray[i]))
    }
    return datesArray;
}


export default class DoctorScheduleSelector extends React.Component {
    constructor() {
        super();
        this.state = { schedule : [], retrieve: false} // changed = to : ?
        this.startDate = new Date(2073, 0, 2);         // the month is 0-indexed

    }


    retrieveData = async () => {
        const result = await retrieveDoctorSchedule('DoctorSchedule');
        return convertScheduleStringToArrayOfDates(result.Item.dailyAvailabilities)
    };


    async componentDidMount() {
        try {
            this.setState({schedule: await this.retrieveData()});
        }catch (e) {
            this.setState( { schedule: []}); // if no availabilities found!
        }

        this.setState( {retrieve: true});
    }


    handleChange = newSchedule => {this.setState({ schedule: newSchedule })
    }


    handleSave = async () => {
        const scheduleData = this.state;
        await addDoctorSchedule('DoctorSchedule' , scheduleData);
        window.location = "/dashboard";
    }


    render() {
        if (this.state.retrieve === false)
            return <CircularProgress />
        else
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
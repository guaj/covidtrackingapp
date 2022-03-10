import * as React from 'react';
import ScheduleSelector from 'react-schedule-selector';
import Button from "@material-ui/core/Button";
import "./DoctorSchedule.css";
import {addDoctorSchedule} from "./DoctorScheduleDynamoDBAdapter";


export default class DoctorScheduleSelector extends React.Component {
    // eslint-visible-next-line react/no-find-dom-node
    state = { schedule : [] } // changed = to : ?

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
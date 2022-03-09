import * as React from 'react';
import ScheduleSelector from 'react-schedule-selector';
import Button from "@material-ui/core/Button";
import "./DoctorSchedule.css";

export default class DoctorScheduleSelector extends React.Component {
    state = { schedule : [] } // changed = to : ?

    startDate = new Date(2073, 0, 2);         // the month is 0-indexed

    handleChange = newSchedule => {this.setState({ schedule: newSchedule })
    }

    handleSubmit(event) {
        alert('A name was submitted: ');
        console.log(this.state);
        event.preventDefault();
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
                            onClick={this.handleSubmit}
                    >
                        Save
                    </Button>
                </div>
            </div>

        )
    }
}
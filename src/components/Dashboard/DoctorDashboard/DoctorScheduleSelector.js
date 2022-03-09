import * as React from 'react';
import ScheduleSelector from 'react-schedule-selector';

export default class DoctorScheduleSelector extends React.Component {
    state = { schedule : [] } // changed = to : ?

    handleChange = newSchedule => {this.setState({ schedule: newSchedule })
    }
    render() {

        return (
            <ScheduleSelector
                selection={this.state.schedule}
                dateFormat={"ddd"}
                onChange={this.handleChange}
            />
        )
    }
}
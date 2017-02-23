var React = require('react');
var PropTypes = React.PropTypes;

var Table = require('react-bootstrap').Table;
var FormControl = require('react-bootstrap').FormControl;
var Button = require('react-bootstrap').Button;
var Panel = require('react-bootstrap').Panel;

var DatePicker = require('react-datepicker');

require('react-datepicker/dist/react-datepicker.css');



function ManageTech (props){
    if (props.tech == '-1') {
        panel = null
    } else {
        panel = <Button
                    bsStyle="success"
                    onClick={props.onAddTimePanel}>
                    Add Time
                </Button>
    }
    return (
        <div>
            <Table>
                <tbody>
                    <tr>
                        <th>Technician</th>
                        <th>
                            <FormControl
                                componentClass="select"
                                value={props.tech}
                                onChange={props.onTechUpdate}>
                                <option value="-1">Select Technician</option>
                                {props.tech_list.map((report, i) => (
                                    <option key={i} value={report.id}>{report.name}</option>
                                ))}
                            </FormControl>
                        </th>
                    </tr>
                    <tr>
                        <th>{panel}</th>
                        <th></th>
                    </tr>
                </tbody>
            </Table>
            <Panel collapsible expanded={props.open_panel}>
                <Table>
                    <tbody>
                        <tr>
                            <th>Start Date</th>
                            <th>
                                <DatePicker
                                    selected={props.newStartDate}
                                    selectsStart startDate={props.newStartDate}
                                    endDate={props.newEndDate}
                                    onChange={props.onNewStartDateUpdate}
                                    placeholderText="Click to select a date"
                                    todayButton="Today"/>
                            </th>
                        </tr>
                        <tr>
                            <th>End Date</th>
                            <th>
                                <DatePicker
                                    selected={props.newEndDate}
                                    selectsEnd startDate={props.newStartDate}
                                    endDate={props.newEndDate}
                                    onChange={props.onNewEndDateUpdate} />
                            </th>
                        </tr>
                        <tr>
                            <th>Description</th>
                            <th></th>
                        </tr>
                        <tr>
                            <th colSpan="2">
                                <FormControl
                                    componentClass="textarea"
                                    value={props.newDescription}
                                    onChange={props.onNewDescriptionUpdate}/>
                            </th>
                        </tr>
                        <tr>
                            <th>
                                <Button
                                    bsStyle="success"
                                    onClick={props.onEditTimeSave}>
                                    Add
                                </Button>
                            </th>
                            <th></th>
                        </tr>
                    </tbody>
                </Table>
            </Panel>
        </div>
    )
}



module.exports = ManageTech;
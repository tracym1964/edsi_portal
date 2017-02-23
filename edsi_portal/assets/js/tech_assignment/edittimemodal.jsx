var React = require('react');
var PropTypes = React.PropTypes;

var Table = require('react-bootstrap').Table;
var Button = require('react-bootstrap').Button;
var Modal = require('react-bootstrap').Modal;
var FormControl = require('react-bootstrap').FormControl;

var DatePicker = require('react-datepicker');

require('react-datepicker/dist/react-datepicker.css');



function EditTimeModal (props){
    return (
        <div>
            <Modal
                show={props.time_modal}
                onHide={props.onUpdateTimeModal}
                aria-labelledby="contained-modal-title"
                bsSize="large">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title">Update Time</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Table>
                        <tbody>
                            <tr>
                                <th>Start Date</th>
                                <th>
                                    <DatePicker
                                        selected={props.edit_start}
                                        selectsStart startDate={props.edit_start}
                                        endDate={props.edit_end}
                                        onChange={props.onEditStartUpdate}
                                        todayButton="Today"/>
                                </th>
                                <th>End Date</th>
                                <th>
                                    <DatePicker
                                        selected={props.edit_end}
                                        selectsEnd startDate={props.edit_start}
                                        endDate={props.edit_end}
                                        onChange={props.onEditEndUpdate} />
                                </th>
                            </tr>
                            <tr>
                                <th>Reason</th>
                                <th colSpan="3">
                                    <FormControl
                                        componentClass="textarea"
                                        value={props.edit_description}
                                        onChange={props.onEditDescriptionUpdate}/>
                                </th>
                            </tr>
                        </tbody>
                    </Table>

                </Modal.Body>
                <Modal.Footer>
                    <Button
                        bsStyle="success"
                        onClick={props.onEditTimeSave}>
                        Save
                    </Button>
                    <Button
                        onClick={props.onUpdateTimeModal}
                        bsStyle="danger">
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

module.exports = EditTimeModal;
var React = require('react');
var PropTypes = React.PropTypes;

var Table = require('react-bootstrap').Table;
var Button = require('react-bootstrap').Button;
var Modal = require('react-bootstrap').Modal;
var FormControl = require('react-bootstrap').FormControl;


function ReplaceModal (props){
    return (
        <div>
            <Modal
                show={props.replace_modal}
                onHide={props.onUpdateReplaceModal}
                aria-labelledby="contained-modal-title"
                bsSize="large">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title">Technician Replace All Groups</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Table>
                        <tbody>
                            <tr>
                                <th>Selected</th>
                                <th colSpan="3">
                                    <FormControl
                                        componentClass="select"
                                        value={props.tech}
                                        disabled>
                                        {props.tech_list.map((tech, i) => (
                                            <option key={i} value={tech.id}>{tech.name}</option>
                                        ))}
                                    </FormControl>
                                </th>
                                <th>Transfer To</th>
                                <th colSpan="3">
                                    <FormControl
                                        componentClass="select"
                                        value={props.replace_tech}
                                        onChange={props.onTechReplaceUpdate}>
                                        <option value="-1">Select Technician</option>
                                        {props.tech_list.map((tech, i) => (
                                            <option key={i} value={tech.id}>{tech.name}</option>
                                        ))}
                                    </FormControl>
                                </th>
                            </tr>

                        </tbody>
                    </Table>

                </Modal.Body>
                <Modal.Footer>
                    <Button
                        bsStyle="success"
                        onClick={props.onReplaceAllSave}>
                        Save
                    </Button>
                    <Button
                        onClick={props.onUpdateReplaceModal}
                        bsStyle="danger">
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

module.exports = ReplaceModal;
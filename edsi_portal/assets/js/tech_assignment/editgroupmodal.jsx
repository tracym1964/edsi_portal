var React = require('react');
var PropTypes = React.PropTypes;

var Table = require('react-bootstrap').Table;
var Button = require('react-bootstrap').Button;
var Modal = require('react-bootstrap').Modal;
var FormControl = require('react-bootstrap').FormControl;


function EditTimeModal (props){
    return (
        <div>
            <Modal
                show={props.group_modal}
                onHide={props.onUpdateGroupModal}
                aria-labelledby="contained-modal-title"
                bsSize="large">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title">Update Group</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Table>
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <th colSpan="3">
                                    <FormControl
                                        type="text"
                                        value={props.edit_name}
                                        onChange={props.onEditNameUpdate}/>
                                </th>
                            </tr>
                            <tr>
                                <th>Primary</th>
                                <th colSpan="3">
                                    <FormControl
                                        componentClass="select"
                                        value={props.edit_prim}
                                        onChange={props.onEditDefaultUpdate}>
                                        <option value="-1">Select Technician</option>
                                        {props.tech_list.map((tech, i) => (
                                            <option key={i} value={tech.id}>{tech.name}</option>
                                        ))}
                                    </FormControl>
                                </th>
                                <th>Alternate</th>
                                <th colSpan="3">
                                    <FormControl
                                        componentClass="select"
                                        value={props.edit_alt}
                                        onChange={props.onEditAltUpdate}>
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
                        onClick={props.onEditGroupSave}>
                        Save
                    </Button>
                    <Button
                        onClick={props.onUpdateGroupModal}
                        bsStyle="danger">
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

module.exports = EditTimeModal;
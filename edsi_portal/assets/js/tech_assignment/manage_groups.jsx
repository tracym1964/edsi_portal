var React = require('react');
var PropTypes = React.PropTypes;

var Table = require('react-bootstrap').Table;
var FormControl = require('react-bootstrap').FormControl;
var Button = require('react-bootstrap').Button;
var ReplaceModal = require('./replaceallmodal');


function ManageGroups (props){
    if (props.tech == '-1') {
        panel = null
    } else {
        panel = <Button
                    bsStyle="danger"
                    onClick={props.onUpdateReplaceModal}>
                    Replace All
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
            <ReplaceModal
                    replace_tech={props.replace_tech}
                    onTechReplaceUpdate={props.onTechReplaceUpdate}
                    tech_list={props.tech_list}
                    tech={props.tech}
                    replace_modal={props.replace_modal}
                    onUpdateReplaceModal={props.onUpdateReplaceModal}
                    onReplaceAllSave={props.onReplaceAllSave} />
        </div>
    )
}



module.exports = ManageGroups;
var React = require('react');
var PropTypes = React.PropTypes;
var EditGroupModal = require('./editgroupmodal');

var Table = require('react-bootstrap').Table;
var FormControl = require('react-bootstrap').FormControl;
var Button = require('react-bootstrap').Button;


function GroupsTable (props){
    if (props.tech == '-1') {
        ninjas = null
    } else (
        ninjas =
            <div>
                <Table responsive hover>
                    <thead>
                        <tr>
                            <th>Group</th>
                            <th>Primary</th>
                            <th>Alternate</th>
                        </tr>
                    </thead>
                    <tbody>
                    {props.group_list.map((group, i) => (
                        <tr key={i}>
                            <td>{group.name}</td>
                            <td>{group.default}</td>
                            <td>{group.alt}</td>
                            <td>
                                <Button
                                    bsStyle="primary"
                                    onClick={()=>{props.onUpdateGroupModal(group)}}
                                    >
                                    Edit
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                </Table>
                <EditGroupModal
                    group_modal={props.group_modal}
                    edit_name={props.edit_name}
                    edit_prim={props.edit_prim}
                    edit_alt={props.edit_alt}
                    tech_list={props.tech_list}
                    onEditDefaultUpdate={props.onEditDefaultUpdate}
                    onEditAltUpdate={props.onEditAltUpdate}
                    onEditNameUpdate={props.onEditNameUpdate}
                    onUpdateGroupModal={props.onUpdateGroupModal}
                    onEditGroupSave={props.onEditGroupSave}/>
            </div>
    );
    return (
        <div>
            {ninjas}
        </div>
    )
}



module.exports = GroupsTable;
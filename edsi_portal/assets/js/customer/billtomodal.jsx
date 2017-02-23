var React = require('react');

var Form = require('react-bootstrap').Form;
var Table = require('react-bootstrap').Table;
var FormControl = require('react-bootstrap').FormControl;
var Button = require('react-bootstrap').Button;


function BilltoModal (props){
   return (
       <div>
           <Table>
               <tbody>
                    <tr>
                        <th>
                            Current Orgainization
                        </th>
                        <th>
                            <FormControl
                                componentClass="select"
                                value={props.org}
                                onChange={props.onOrgUpdate}
                                disabled>
                                {props.org_list.map((org, i) => (
                                    <option key={i} value={org._id}>{org.name}</option>
                                ))}
                            </FormControl>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            New Organization
                        </th>
                        <th>
                            <FormControl
                                componentClass="select"
                                value={props.edit_org}
                                onChange={props.onEditOrgUpdate}>
                                {props.org_list.map((org, i) => (
                                    <option key={i} value={org._id}>{org.name}</option>
                                ))}
                            </FormControl>
                        </th>
                    </tr>
               </tbody>
            </Table>
       </div>
    );
};



module.exports = BilltoModal;
var React = require('react');

var Table = require('react-bootstrap').Table;
var FormControl = require('react-bootstrap').FormControl;


function OrgModal (props){
   return (
       <div>
           <Table>
               <tbody>
                <tr>
                    <th>
                        Organization Name
                    </th>
                    <th>
                        <FormControl
                            type="text"
                            value={props.edit_org_name}
                            onChange={props.onOrgNameUpdate}/>
                     </th>
                </tr>
               </tbody>
            </Table>
       </div>
    );
};



module.exports = OrgModal;
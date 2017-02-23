var React = require('react');

var Table = require('react-bootstrap').Table;
var FormControl = require('react-bootstrap').FormControl;


function EntModal (props){
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
                            value={props.edit_ent_name}
                            onChange={props.onEntNameUpdate}/>
                     </th>
                </tr>
               </tbody>
            </Table>
       </div>
    );
};



module.exports = EntModal;
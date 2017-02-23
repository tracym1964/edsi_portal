var React = require('react');
var PropTypes = React.PropTypes;

var Button = require('react-bootstrap').Button;
var Form = require('react-bootstrap').Form;
var FormControl = require('react-bootstrap').FormControl;
var Table = require('react-bootstrap').Table;
var PageHeader = require('react-bootstrap').PageHeader;


function DispatchSchedule (props){
    return (
     <div className="col-sm-6 col-sm-offset-3 text-center">
         <PageHeader>
             Generate PI/PM Dispatches
         </PageHeader>
         <Form onSubmit={props.generateDispatches}>
             <Table>
                 <tbody>
                    <tr>
                        <th>
                            Territory
                        </th>
                        <th>
                            <FormControl
                                componentClass="select"
                                value={props.territory}
                                onChange={props.onTerritoryUpdate}>
                                {props.territory_list.map((terr, i) => (
                                    <option key={i} value={terr}>{terr}</option>
                                ))}
                            </FormControl>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            Interval
                        </th>
                        <th>
                            <FormControl
                                componentClass="select"
                                value={props.interval_type}
                                onChange={props.onIntervalTypeUpdate}>
                                {props.interval_type_list.map((int, i) => (
                                    <option key={i} value={int.type}>{int.description}</option>
                                ))}
                            </FormControl>
                        </th>
                    </tr>
                    <tr>
                        <th></th>
                        <th>
                            <Button
                                bsStyle="danger"
                                type="submit"
                                >
                                Generate Dispatches
                            </Button>
                        </th>
                    </tr>
                 </tbody>
             </Table>
         </Form>
     </div>
   )
};


DispatchSchedule.propTypes = {
},

module.exports = DispatchSchedule;
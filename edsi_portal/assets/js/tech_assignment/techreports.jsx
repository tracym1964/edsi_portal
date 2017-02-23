var React = require('react');
var PropTypes = React.PropTypes;
var EditGroupModal = require('./editgroupmodal');

var Table = require('react-bootstrap').Table;
var FormControl = require('react-bootstrap').FormControl;
var Button = require('react-bootstrap').Button;


function TechReports (props){
    return (
        <div>
            <Table responsive>
                <tbody>
                    <tr>
                        <th>Report Type</th>
                        <th>
                            <FormControl
                                componentClass="select"
                                value={props.report}
                                onChange={props.onReportUpdate}>
                                <option value='-1'>Select Filter</option>
                                {props.reports.map((rep, i) => (
                                    <option key={i} value={rep.id}>{rep.name}</option>
                                ))}
                            </FormControl>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <Button
                                bsStyle='success'
                                onClick={props.onRunTechReport}
                                >
                                Run Report
                            </Button>
                        </th>
                        <th></th>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}



module.exports = TechReports;
var React = require('react');
var PropTypes = React.PropTypes;

var Table = require('react-bootstrap').Table;


function ReportResults (props){
    if (props.rep_results) {
        table = <Table responsive hover>
                    <thead>
                        <tr>
                            <th>Customer Number</th>
                            <th>Customer Name</th>
                            <th>Customer City/State</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.rep_results.map((result, i) => (
                            <tr key={i}>
                                <td>{result.customer_number}</td>
                                <td>{result.customer_name}</td>
                                <td>{result.city_state}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
    } else {
        table = null;
    }
    return (
        <div>
            {table}
        </div>
    )
}



module.exports = ReportResults;
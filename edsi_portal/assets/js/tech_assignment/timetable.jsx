var React = require('react');
var PropTypes = React.PropTypes;
var EditTimeModal = require('./edittimemodal');

var Table = require('react-bootstrap').Table;
var Button = require('react-bootstrap').Button;



function TimeTable (props){
    return (
        <div>
            <Table responsive hover>
                <thead>
                    <tr>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Reason</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {props.time_list.map((time, i) => (
                        <tr key={i}>
                            <td>{time.start_date}</td>
                            <td>{time.end_date}</td>
                            <td>{time.description}</td>
                            <td>
                                <Button
                                    bsStyle="primary"
                                    onClick={()=>{props.onUpdateTimeModal(time)}}
                                    >
                                    Edit
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <EditTimeModal
                onUpdateTimeModal={props.onUpdateTimeModal}
                time_modal={props.time_modal}
                edit_start={props.edit_start}
                edit_end={props.edit_end}
                edit_description={props.edit_description}
                onEditDescriptionUpdate={props.onEditDescriptionUpdate}
                onEditEndUpdate={props.onEditEndUpdate}
                onEditStartUpdate={props.onEditStartUpdate}
                onEditTimeSave={props.onEditTimeSave}
                />
        </div>
    )
}



module.exports = TimeTable;
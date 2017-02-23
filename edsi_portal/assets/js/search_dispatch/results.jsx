var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../../styles');

var Grid = require('react-bootstrap').Grid;
var Panel = require('react-bootstrap').Panel;
var Accordion = require('react-bootstrap').Accordion;
var Table = require('react-bootstrap').Table;
var Button = require('react-bootstrap').Button;
var EditDispatchModal = require('./edit_modal');


function Results (props){
   return (
     <div>
       <Grid>
         {props.dispatchSearchReturn.map((dispatch, i) => (
           <div key={i}>
               <h4>Customer: {dispatch.customer_name}</h4>
               <h4>Dispatch Number: {dispatch.dispatch_number} </h4>
           <Accordion>
             <Panel
               bsStyle='success'
               header="Details"
               eventKey="1">
               <Table>
                 <tbody>
                   <tr>
                     <td>Status:</td>
                     <td>{dispatch.status}</td>
                     <td></td>
                     <td></td>
                   </tr>
                   <tr>
                     <td>Date Created:</td>
                     <td>{dispatch.call_received}</td>
                     <td>Date Closed:</td>
                     <td>{dispatch.closed_date}</td>
                   </tr>
                   <tr>
                     <td>Call Type:</td>
                     <td>{dispatch.call_type}</td>
                     <td>Priority:</td>
                     <td>{dispatch.priority}</td>
                   </tr>
                   <tr>
                     <td>PO/Ticket:</td>
                     <td>{dispatch.po_ticket}</td>
                     <td>NTE:</td>
                     <td>{dispatch.bill_not_to_exceed}</td>
                   </tr>
                   <tr>
                     <td>Tech Assigned:</td>
                     <td>{dispatch.assigned_employee}</td>
                     <td>Call Back Number</td>
                     <td>{dispatch.call_back_number}</td>
                   </tr>
                   <tr>
                       <td>Description:</td>
                       <td colSpan="3"> {dispatch.description}</td>
                   </tr>
                    <tr>
                        <td>
                            <Button
                             bsStyle="success"
                             onClick={()=>{props.onEditDispatch(dispatch)}}>
                             Edit
                            </Button>
                        </td>
                    </tr>
                 </tbody>
               </Table>
             </Panel>
           </Accordion>
           </div>
         ))}
       </Grid>
       <EditDispatchModal
         edit_dispatch_modal={props.edit_dispatch_modal}
         onUpdateEditDispatchModal={props.onUpdateEditDispatchModal}
         edit_calltype={props.edit_calltype}
         onEditCallTypeUpdate={props.onEditCallTypeUpdate}
         callTypeList={props.callTypeList}
         edit_priority={props.edit_priority}
         onEditPriorityUpdate={props.onEditPriorityUpdate}
         priorityList={props.priorityList}
         edit_po={props.edit_po}
         edit_nte={props.edit_nte}
         onEditPoUpdate={props.onEditPoUpdate}
         onEditNteUpdate={props.onEditNteUpdate}
         edit_status={props.edit_status}
         edit_caller={props.edit_caller}
         edit_callback={props.edit_callback}
         edit_altCallback={props.edit_altCallback}
         onEditStatusUpdate={props.onEditStatusUpdate}
         onEditCallerUpdate={props.onEditCallerUpdate}
         onEditCallbackUpdate={props.onEditCallbackUpdate}
         onEditAltCallbackUpdate={props.onEditAltCallbackUpdate}
         statusList={props.statusList}
         customerModal={props.customerModal}
         onUpdateCustomerModal={props.onUpdateCustomerModal}
         onCustomerSearch={props.onCustomerSearch}
         onUpdateSearchType={props.onUpdateSearchType}
         onUpdateSearchText={props.onUpdateSearchText}
         onCS={props.onCS}
         searchTypes={props.searchTypes}
         searchType={props.searchType}
         searchText={props.searchText}
         searchreturn={props.searchreturn}
         onCustomerSearch={props.onCustomerSearch}
         onUpdateCustomerSelection={props.onUpdateCustomerSelection}
         customerName={props.customerName}
         onEditUpdateOutOfChem={props.onEditUpdateOutOfChem}
         onEditUpdateNotifyTech={props.onEditUpdateNotifyTech}
         onEditUpdateReturnCall={props.onEditUpdateReturnCall}
         onEditUpdateTech={props.onEditUpdateTech}
         edit_tech={props.edit_tech}
         techs={props.techs}
         edit_ooc={props.edit_ooc}
         edit_notify={props.edit_notify}
         edit_returnCall={props.edit_returnCall}
         onEditUpdateDescription={props.onEditUpdateDescription}
         edit_description={props.edit_description}
         onUpdateDispatchSelection={props.onUpdateDispatchSelection}/>
     </div>
   )
};

Results.propTypes = {
},

module.exports = Results;

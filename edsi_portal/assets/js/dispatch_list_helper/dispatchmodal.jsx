var React = require('react');

var Modal = require('react-bootstrap').Modal;
var Button = require('react-bootstrap').Button;
var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var styles = require('../../styles');
var Table = require('react-bootstrap').Table;

function DispatchModal (props){

   return (
     <div>
       <Modal
         show={props.dispatch_modal}
         onHide={props.onUpdateModal}
         aria-labelledby="contained-modal-title"
         bsSize="large">
         <Modal.Header closeButton>
           <Modal.Title id="contained-modal-title">{props.dispatch_selected.customer_name} -- Dispatch Number: {props.dispatch_selected.dispatch_number}</Modal.Title>
         </Modal.Header>
         <Modal.Body>
           <Table>
             <tbody>
               <tr>
                 <td>Status:</td>
                 <td>{props.dispatch_selected.status}</td>
                 <td></td>
                 <td></td>
               </tr>
               <tr>
                 <td>Date Created:</td>
                 <td>{props.dispatch_selected.call_received}</td>
                 <td>Date Closed:</td>
                 <td>{props.dispatch_selected.closed_date}</td>
               </tr>
               <tr>
                 <td>Call Type:</td>
                 <td>{props.dispatch_selected.call_type}</td>
                 <td>Priority:</td>
                 <td>{props.dispatch_selected.priority}</td>
               </tr>
               <tr>
                 <td>PO/Ticket:</td>
                 <td>{props.dispatch_selected.po_ticket}</td>
                 <td>NTE:</td>
                 <td>{props.dispatch_selected.bill_not_to_exceed}</td>
               </tr>
               <tr>
                 <td>Tech Assigned:</td>
                 <td>{props.dispatch_selected.assigned_employee}</td>
                 <td>Call Back Number</td>
                 <td>{props.dispatch_selected.call_back_number}</td>
               </tr>
               <tr>
                   <td>Description:</td>
                   <td colSpan="3"> {props.dispatch_selected.description}</td>
                   </tr>
             </tbody>
           </Table>
         </Modal.Body>
         <Modal.Footer>
           <Button
             onClick={props.onUpdateModal}
             bsStyle='danger'>
             Close
           </Button>
         </Modal.Footer>
       </Modal>

     </div>
    );
};



module.exports = DispatchModal;

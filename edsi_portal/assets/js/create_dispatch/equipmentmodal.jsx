var React = require('react');

var Modal = require('react-bootstrap').Modal;
var Button = require('react-bootstrap').Button;
var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var styles = require('../../styles');
var Table = require('react-bootstrap').Table;

function EquipmentModal (props){
   return (
     <div>
       <Modal
         show={props.equipment_modal}
         onHide={props.onUpdateEquipmentModal}
         aria-labelledby="contained-modal-title"
         bsSize="large">
         <Modal.Header closeButton>
           <Modal.Title id="contained-modal-title">Equipment Info</Modal.Title>
         </Modal.Header>
         <Modal.Body>
           <Table>
             <tbody>
               <tr>
                 <td>Name:</td>
                 <td>{props.equipment_selected.product}</td>
                 <td>Serial Number:</td>
                 <td>{props.equipment_selected.serial_number}</td>
               </tr>
               <tr>
                 <td>Bay:</td>
                 <td>{props.equipment_selected.bay}</td>
                 <td>Install Date:</td>
                 <td>{props.equipment_selected.install_date}</td>
               </tr>
               <tr>
                 <td>IP Address:</td>
                 <td>{props.equipment_selected.ip_address}</td>
                 <td>Last PM Visit:</td>
                 <td>{props.equipment_selected.last_pm_visit_date}</td>
               </tr>
               <tr>
                 <td>Parts Warranty Expire Date:</td>
                 <td>{props.equipment_selected.parts_warranty_expire_date}</td>
                 <td>Labor Warranty Expire Date:</td>
                 <td>{props.equipment_selected.labor_warranty_expire_date}</td>
               </tr>
               <tr>
                 <td>Frame Warranty Expire Date:</td>
                 <td>{props.equipment_selected.frame_warranty_expire_date}</td>
               </tr>
               <tr>
                 <td>Warranty Information:</td>
                 <td colSpan='3'>{props.equipment_selected.warranty_information}</td>
               </tr>
             </tbody>
           </Table>
         </Modal.Body>
         <Modal.Footer>
           <Button
             onClick={props.onUpdateEquipmentModal}
             bsStyle='danger'>
             Close
           </Button>
         </Modal.Footer>
       </Modal>

     </div>
    );
};

module.exports = EquipmentModal;

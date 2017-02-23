var React = require('react');

var Modal = require('react-bootstrap').Modal;
var Form = require('react-bootstrap').Form;
var Table = require('react-bootstrap').Table;
var FormControl = require('react-bootstrap').FormControl;
var Button = require('react-bootstrap').Button;


function AddModal (props){
   return (
     <div>
       <Modal
         show={props.add_modal}
         onHide={props.onUpdateAddModal}
         aria-labelledby="contained-modal-title"
         bsSize="large">
         <Modal.Header closeButton>
           <Modal.Title id="contained-modal-title">Add Modal</Modal.Title>
         </Modal.Header>
         <Modal.Body>
             Yep
         </Modal.Body>
         <Modal.Footer>
           <Button
             onClick={props.onUpdateAddModal}
             bsStyle="danger">
             Close
           </Button>
         </Modal.Footer>
       </Modal>

     </div>
    );
};



module.exports = AddModal;
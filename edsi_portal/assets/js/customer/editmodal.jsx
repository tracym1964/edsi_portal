var React = require('react');
var BillToModal = require('./billtomodal');
var OrgModal = require('./orgmodal');
var EntModal = require('./entmodal');

var Modal = require('react-bootstrap').Modal;
var Button = require('react-bootstrap').Button;


function EditModal (props){
    if (props.edit_context == 'bill') {
        modalbody = <BillToModal
                        org={props.org}
                        org_list={props.org_list}
                        edit_org={props.edit_org}
                        onEditOrgUpdate={props.onEditOrgUpdate}/>
    } else if (props.edit_context == 'org') {
        modalbody = <OrgModal
                        edit_org_name={props.edit_org_name}
                        onOrgNameUpdate={props.onOrgNameUpdate}/>
    } else if (props.edit_context == 'ent') {
        modalbody = <EntModal
                        edit_ent_name={props.edit_ent_name}
                        onEntNameUpdate={props.onEntNameUpdate}/>
    } else {
        modalbody = null
    }
   return (
     <div>
       <Modal
         show={props.edit_modal}
         onHide={props.onUpdateEditModal}
         aria-labelledby="contained-modal-title"
         bsSize="large">
         <Modal.Header closeButton>
           <Modal.Title id="contained-modal-title">Edit {props.title}</Modal.Title>
         </Modal.Header>
         <Modal.Body>
             {modalbody}
         </Modal.Body>
         <Modal.Footer>
            <Button
                onClick={props.onSaveEdit}
                bsStyle="success">
                Save
            </Button>
           <Button
             onClick={props.onUpdateEditModal}
             bsStyle="danger">
             Close
           </Button>
         </Modal.Footer>
       </Modal>

     </div>
    );
};



module.exports = EditModal;
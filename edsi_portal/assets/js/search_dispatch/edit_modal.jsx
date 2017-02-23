var React = require('react');

var Modal = require('react-bootstrap').Modal;
var Button = require('react-bootstrap').Button;
var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var styles = require('../../styles');
var Table = require('react-bootstrap').Table;
var FormControl = require('react-bootstrap').FormControl;
var FormGroup = require('react-bootstrap').FormGroup;
var Checkbox = require('react-bootstrap').Checkbox;

var CustomerModal = require('../cust_search_helper/customermodal');


function EditDispatchModal (props){

   return (
     <div>
       <Modal
         show={props.edit_dispatch_modal}
         onHide={props.onUpdateEditDispatchModal}
         aria-labelledby="contained-modal-title"
         bsSize="large">
         <Modal.Header closeButton>
           <Modal.Title id="contained-modal-title">Dispatch</Modal.Title>
         </Modal.Header>
         <Modal.Body>
           <Table>
             <tbody>
               <tr>
                 <th>
                   Customer
                 </th>
                 <th>
                   <Button
                     bsStyle={null}
                     className="btn-darkblue"
                     onClick={props.onUpdateCustomerModal}
                     block>
                     Select Customer
                   </Button>
                 </th>
                 <th colSpan={2}>
                   <FormControl
                     type="text"
                     placeholder="Select Customer"
                     value={props.customerName}
                     disabled/>
                 </th>
               </tr>
               <tr>
                 <th>
                   Status
                 </th>
                 <th>
                   <FormControl
                     componentClass="select"
                     value={props.edit_status}
                     onChange={props.onEditStatusUpdate}>
                     <option value=''>Select Status</option>
                     {props.statusList.map((ct, i) => (
                       <option key={i} value={ct._id}>{ct.description}</option>
                     ))}
                   </FormControl>
                 </th>
                 <th>
                   Caller
                 </th>
                 <th>
                   <FormControl
                     type="text"
                     value={props.edit_caller}
                     onChange={props.onEditCallerUpdate}/>
                 </th>
              </tr>
              <tr>
                <th>
                  Callback
                </th>
                <th>
                  <FormControl
                    type="text"
                    placeholder="(123)456-7890"
                    value={props.edit_callback}
                    onChange={props.onEditCallbackUpdate}/>
                </th>
                <th>
                  Alt Callback
                </th>
                <th>
                  <FormControl
                    type="text"
                    placeholder="(123)456-7890"
                    value={props.edit_altCallback}
                    onChange={props.onEditAltCallbackUpdate}/>
                </th>
              </tr>
               <tr>
                 <th>
                   PO/Ticket
                 </th>
                 <th>
                   <FormControl
                     type="text"
                     value={props.edit_po}
                     onChange={props.onEditPoUpdate}/>
                 </th>
                 <th>
                   Not To Exceed
                 </th>
                 <th>
                   <FormControl
                     type="text"
                     value={props.edit_nte}
                     onChange={props.onEditNteUpdate}/>
                 </th>
               </tr>
               <tr>
                <th>
                  Call Type:
                </th>
                <th>
                  <FormControl
                    componentClass="select"
                    value={props.edit_calltype}
                    onChange={props.onEditCallTypeUpdate}>
                    {props.callTypeList.map((ct, i) => (
                      <option key={i} value={ct._id}>{ct.description}</option>
                    ))}
                  </FormControl>
                </th>
                <th>
                  Priority:
                </th>
                <th>
                  <FormControl
                    componentClass="select"
                    value={props.edit_priority}
                    onChange={props.onEditPriorityUpdate}>
                      {props.priorityList.map((pr, i) => (
                        <option key={i} value={pr._id}>{pr.description}</option>
                      ))}
                  </FormControl>
                </th>
              </tr>
              <tr>
                <th>
                  Problem Description
                </th>
                <th colSpan="3">
                  <FormControl
                    componentClass="textarea"
                    value={props.edit_description}
                    onChange={props.onEditUpdateDescription}/>
                </th>
              </tr>
              <tr>
                <th>
                </th>
                <th>
                  <FormGroup>
                    <Checkbox
                      defaultChecked={props.edit_ooc}
                      onChange={props.onEditUpdateOutOfChem}>
                      Out of Chemical
                    </Checkbox>
                    <Checkbox
                      defaultChecked={props.edit_returnCall}
                      onChange={props.onEditUpdateReturnCall}>
                      Return Call
                    </Checkbox>
                    <Checkbox
                      defaultChecked={props.edit_notify}
                      onChange={props.onEditUpdateNotifyTech}>
                      Notify Tech
                    </Checkbox>
                  </FormGroup>
                </th>
                <th>
                  Tech Assigned
                </th>
                <th>
                  <FormControl
                    componentClass="select"
                    value={props.edit_tech}
                    onChange={props.onEditUpdateTech}>
                    {props.techs.map((tech, i) => (
                      <option key={i} value={tech._id}>{tech.fullname}</option>
                    ))}
                  </FormControl>
                </th>
              </tr>
             </tbody>
           </Table>
         </Modal.Body>
         <Modal.Footer>
           <Button
             bsStyle='success'
             onClick={()=>{props.onUpdateDispatchSelection()}}>
             Save
           </Button>
           <Button
             bsStyle='danger'
             onClick={props.onUpdateEditDispatchModal}>
             Cancel
           </Button>
         </Modal.Footer>
       </Modal>
       <CustomerModal
         customer_modal={props.customerModal}
         onUpdateCustomerModal={props.onUpdateCustomerModal}
         onCustomerSearch={props.onCustomerSearch}
         onUpdateSearchType={props.onUpdateSearchType}
         onUpdateSearchText={props.onUpdateSearchText}
         onCS={props.onCS}
         search_types={props.searchTypes}
         search_type={props.searchType}
         search_text={props.searchText}
         searchreturn={props.searchreturn}
         onUpdateCustomerSelection={props.onUpdateCustomerSelection} />

     </div>
    );
};



module.exports = EditDispatchModal;

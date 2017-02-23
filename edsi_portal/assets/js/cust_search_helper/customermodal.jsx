var React = require('react');
var CustomerSearchReturn = require('./customersearchreturn')

var Modal = require('react-bootstrap').Modal;
var Form = require('react-bootstrap').Form;
var Table = require('react-bootstrap').Table;
var FormControl = require('react-bootstrap').FormControl;
var Button = require('react-bootstrap').Button;
var Panel = require('react-bootstrap').Panel;
var styles = require('../../styles');

function CustomerModal (props){
  if (props.superuser) {
      pot_cust = <FormControl
          componentClass="select"
          value={props.customer_type}
          onChange={props.onCustomerTypeUpdate}>>
          {props.customer_types.map((ct, i) => (
              <option key={i} value={ct.id}>{ct.name}</option>
          ))}
      </FormControl>
  } else {
    pot_cust = null;
  }
  if (props.customer_type == '2') {
    add_pot = <Button bsStyle="success" onClick={props.onPotPanelUpdate}> Add Potential Customer</Button>
    panel_pot =
        <Panel collapsible expanded={props.pot_panel}>
          <Table>
            <tbody>
              <tr>
                <th>Customer Name</th>
                <th>
                  <FormControl
                    type="text"
                    placeholder="Customer Name"
                    value={props.pot_custName}
                    onChange={props.onPotCustNameUpdate}/>
                </th>
              </tr>
              <tr>
                <th>Contact Name</th>
                <th>
                  <FormControl
                    type="text"
                    placeholder="Contact Name"
                    value={props.pot_contName}
                    onChange={props.onPotContNameUpdate}/>
                </th>
              </tr>
              <tr>
                <th>Street Address 1</th>
                <th>
                  <FormControl
                    type="text"
                    placeholder="Street Address 1"
                    value={props.pot_street1}
                    onChange={props.onPotStreet1Update}/>
                </th>
              </tr>
              <tr>
                <th>Street Address 2</th>
                <th>
                  <FormControl
                    type="text"
                    placeholder="Street Address 2"
                    value={props.pot_street2}
                    onChange={props.onPotStreet2Update}/>
                </th>
              </tr>
              <tr>
                <th>City</th>
                <th>
                  <FormControl
                    type="text"
                    placeholder="City"
                    value={props.pot_city}
                    onChange={props.onPotCityUpdate}/>
                </th>
              </tr>
              <tr>
                <th>State</th>
                <th>
                  <FormControl
                    type="text"
                    placeholder="State"
                    value={props.pot_state}
                    onChange={props.onPotStateUpdate}/>
                </th>
              </tr>
              <tr>
                <th>Zip Code</th>
                <th>
                  <FormControl
                    type="text"
                    placeholder="Zip Code"
                    value={props.pot_zip}
                    onChange={props.onPotZipUpdate}/>
                </th>
              </tr>
              <tr>
                <th>Phone</th>
                <th>
                  <FormControl
                    type="text"
                    placeholder="Phone"
                    value={props.pot_phone}
                    onChange={props.onPotPhoneUpdate}/>
                </th>
              </tr>
              <tr>
                <th>Email</th>
                <th>
                  <FormControl
                    type="text"
                    placeholder="Email"
                    value={props.pot_email}
                    onChange={props.onPotEmailUpdate}/>
                </th>
              </tr>
              <tr>
                <th>Territory</th>
                <th>
                  <FormControl
                      componentClass="select"
                      value={props.pot_terr}
                      onChange={props.onPotTerrUpdate}>
                      <option value="-1">Select Territory</option>
                      {props.terr_list.map((terr, i) => (
                          <option key={i} value={terr}>{terr}</option>
                      ))}
                  </FormControl>
                </th>
              </tr>
              <tr>
                <th>
                  <Button
                    bsStyle="primary"
                    onClick={props.onPotCustomerAddition}>
                    Add & Select
                  </Button>
                  <Button
                    bsStyle="warning"
                    onClick={props.onPotPanelUpdate}
                    style={styles.leftspace}>
                    Cancel
                  </Button>
                </th>
                <th></th>
              </tr>
            </tbody>
          </Table>
        </Panel>
  }
  else {
    add_pot = null;
    panel_pot = null;
  }
   return (
     <div>
       <Modal
         show={props.customer_modal}
         onHide={props.onUpdateCustomerModal}
         aria-labelledby="contained-modal-title"
         bsSize="large">
         <Modal.Header closeButton>
           <Modal.Title id="contained-modal-title">Search Customer</Modal.Title>
         </Modal.Header>
         <Modal.Body>
           <Form onSubmit={props.onCS}>
             <Table>
               <tbody>
                <tr>
                  <th>{pot_cust}</th>
                  <th>{add_pot}</th>
                  <th></th>
                </tr>
                <tr>
                  <th colSpan="4">
                      {panel_pot}
                  </th>
                </tr>
                <tr>
                   <th>
                     <FormControl
                       componentClass="select"
                       value={props.search_type}
                       onChange={props.onUpdateSearchType}>
                       <option value="0">Select Type</option>
                       {props.search_types.map((st, i) => (
                         <option key={i} value={st.field}>{st.label}</option>
                       ))}
                     </FormControl>
                   </th>
                   <th colSpan="2">
                     <FormControl
                       type="text"
                       placeholder="Search"
                       value={props.search_text}
                       onChange={props.onUpdateSearchText}/>
                   </th>
                   <th>
                     <Button
                       bsStyle='success'
                       type='submit'>
                       Search
                     </Button>
                   </th>
                 </tr>
               </tbody>
             </Table>
           </Form>
           <CustomerSearchReturn
               searchreturn={props.searchreturn}
               onUpdateCustomer={props.onUpdateCustomer}
               onUpdateCustomerModal={props.onUpdateCustomerModal}
               onUpdateCustomerSelection={props.onUpdateCustomerSelection} />
         </Modal.Body>
         <Modal.Footer>
           <Button
             onClick={props.onUpdateCustomerModal}
             bsStyle="danger">
             Close
           </Button>
         </Modal.Footer>
       </Modal>

     </div>
    );
};



module.exports = CustomerModal;

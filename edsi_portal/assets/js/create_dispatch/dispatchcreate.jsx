var React = require('react');
var styles = require('../../styles');
var CustomerModal = require('../cust_search_helper/customermodal')

var Button = require('react-bootstrap').Button;
var FormControl = require('react-bootstrap').FormControl;
var FormGroup = require('react-bootstrap').FormGroup;
var Form = require('react-bootstrap').Form;
var Table = require('react-bootstrap').Table;
var Checkbox = require('react-bootstrap').Checkbox;


function DispatchCreate (props){
   return (
     <Form onSubmit={props.onDispatchCreate}>
       <Table responsive>
         <tbody>
           <tr>
             <th>
               Caller
             </th>
             <th colSpan="3">
               <FormControl
                 type="text"
                 placeholder="Caller"
                 value={props.caller}
                 onChange={props.onUpdateCaller}/>
             </th>
          </tr>
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
                value={props.customer}
                disabled/>
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
                value={props.phone}
                onChange={props.onUpdatePhone}/>
            </th>
            <th>
              Alt Callback
            </th>
            <th>
              <FormControl
                type="text"
                placeholder="(123)456-7890"
                value={props.altphone}
                onChange={props.onUpdateAltPhone}/>
            </th>
          </tr>
          <tr>
            <th>
              PO/Ticket
            </th>
            <th>
              <FormControl
                type="text"
                placeholder="PO/Ticket"
                value={props.po}
                onChange={props.onUpdatePO}/>
            </th>
            <th>
              Not To Exceed
            </th>
            <th>
              <FormControl
                type="text"
                placeholder="200"
                value={props.nte}
                onChange={props.onUpdateNTE}/>
            </th>
          </tr>
          <tr>
            <th>
              Problem Description
            </th>
            <th colSpan="3">
              <FormControl
                componentClass="textarea"
                placeholder="Description"
                value={props.description}
                onChange={props.onUpdateDescription}/>
            </th>
          </tr>
          <tr>
            <th>
              Call Type
            </th>
            <th>
              <FormControl
                componentClass="select"
                value={props.calltype}
                onChange={props.onUpdateCallType}>
                <option value='-1'>Select Call Type</option>
                {props.calltype_list.map((ct, i) => (
                  <option key={i} value={ct._id}>{ct.description}</option>
                ))}
              </FormControl>
            </th>
            <th>
              Priority
            </th>
            <th>
              <FormControl
                componentClass="select"
                value={props.priority}
                onChange={props.onUpdatePriority}>
                <option value="-1">Select Priority</option>
                  {props.priority_list.map((pr, i) => (
                    <option key={i} value={pr._id}>{pr.description}</option>
                  ))}
              </FormControl>
            </th>
          </tr>
          <tr>
            <th>
            </th>
            <th>
              <FormGroup>
                <Checkbox
                  onChange={props.onUpdateOutOfChem}>
                  Out of Chemical
                </Checkbox>
                <Checkbox
                  onChange={props.onUpdateReturnCall}>
                  Return Call
                </Checkbox>
              </FormGroup>
            </th>
            <th>
              Tech Assigned
            </th>
            <th>
              <FormControl
                componentClass="select"
                value={props.tech}
                onChange={props.onUpdateTech}>
                <option value="-1">Select Technician</option>
                {props.techs.map((tech, i) => (
                  <option key={i} value={tech._id}>{tech.fullname}</option>
                ))}
              </FormControl>
            </th>
          </tr>
          <tr>
            <th>
            </th>
            <th>
            </th>
            <th>
            </th>
            <th>
              <Button
                bsStyle="success"
                type="submit"
                block>
                Create Dispatch
              </Button>
            </th>
          </tr>
         </tbody>
       </Table>
       <CustomerModal
         customer_modal={props.customer_modal}
         onUpdateCustomerModal={props.onUpdateCustomerModal}
         onUpdateSearchType={props.onUpdateSearchType}
         onUpdateSearchText={props.onUpdateSearchText}
         onCS={props.onCS}
         search_types={props.search_types}
         search_type={props.search_type}
         search_text={props.search_text}
         searchreturn={props.searchreturn}
         returncall={props.returncall}
         onCustomerSearch={props.onCustomerSearch}
         onUpdateCustomerSelection={props.onUpdateCustomerSelection}
         superuser={props.superuser}
         customer_types={props.customer_types}
         customer_type={props.customer_type}
         onCustomerTypeUpdate={props.onCustomerTypeUpdate}
         pot_panel={props.pot_panel}
         onPotPanelUpdate={props.onPotPanelUpdate}
         pot_terr={props.pot_terr}
         onPotTerrUpdate={props.onPotTerrUpdate}
         pot_email={props.pot_email}
         onPotEmailUpdate={props.onPotEmailUpdate}
         pot_phone={props.pot_phone}
         onPotPhoneUpdate={props.onPotPhoneUpdate}
         pot_zip={props.pot_zip}
         onPotZipUpdate={props.onPotZipUpdate}
         pot_state={props.pot_state}
         onPotStateUpdate={props.onPotStateUpdate}
         pot_city={props.pot_city}
         onPotCityUpdate={props.onPotCityUpdate}
         pot_street2={props.pot_street2}
         onPotStreet2Update={props.onPotStreet2Update}
         pot_street1={props.pot_street1}
         onPotStreet1Update={props.onPotStreet1Update}
         pot_contName={props.pot_contName}
         onPotContNameUpdate={props.onPotContNameUpdate}
         pot_custName={props.pot_custName}
         onPotCustNameUpdate={props.onPotCustNameUpdate}
         onPotCustomerAddition={props.onPotCustomerAddition}
         terr_list={props.terr_list}
         />

      </Form>
   )
};


module.exports = DispatchCreate;

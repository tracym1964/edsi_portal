var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../../styles');
var CustomerModal = require('../cust_search_helper/customermodal');

var Table = require('react-bootstrap').Table;
var FormControl = require('react-bootstrap').FormControl;
var Form = require('react-bootstrap').Form;
var Button = require('react-bootstrap').Button;
var DatePicker = require('react-datepicker');

require('react-datepicker/dist/react-datepicker.css');

function Filter (props){
  if (props.isSearching) {
    button = <Button bsStyle="success" block disabled>Searching</Button>
  } else {
    button = <Button bsStyle="success" type="submit" block> Search </Button>
  };
   return (
     <div>
       <Form
         style={styles.space}
         onSubmit={props.onDispatchSearch}>
         <Table responsive>
           <tbody>
             <tr>
               <th>
                 Date Created
               </th>
               <th>
                 <DatePicker
                   selected={props.dateCreated}
                   onChange={props.onDateCreatedUpdate}
                   placeholderText="Click to select a date"
                   todayButton="Today"
                   isClearable={true}/>
               </th>
               <th>
               </th>
               <th>
                 {button}
               </th>
             </tr>
             <tr>
               <th>
                 Dispatch Number
               </th>
               <th>
                 <FormControl
                   type="text"
                   placeholder="Dispatch Number"
                   value={props.dispatchNumber}
                   onChange={props.onDispatchNumberUpdate}/>
               </th>
               <th>
               </th>
               <th>
                 <Button
                     bsStyle="danger"
                     block
                     onClick={()=>{props.onClearSearch()}}>
                   Clear Search
                 </Button>
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
                   value={props.status}
                   onChange={props.onStatusUpdate}>
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
                   placeholder="Caller"
                   value={props.caller}
                   onChange={props.onCallerUpdate}/>
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
                  value={props.callback}
                  onChange={props.onCallbackUpdate}/>
              </th>
              <th>
                Alt Callback
              </th>
              <th>
                <FormControl
                  type="text"
                  placeholder="(123)456-7890"
                  value={props.altCallback}
                  onChange={props.onAltCallbackUpdate}/>
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
                  onChange={props.onPoUpdate}/>
              </th>
              <th>
                Not To Exceed
              </th>
              <th>
                <FormControl
                  type="text"
                  placeholder="0"
                  value={props.nte}
                  onChange={props.onNteUpdate}/>
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
                  onChange={props.onCallTypeUpdate}>
                  <option value=''>Select Call Type</option>
                  {props.callTypeList.map((ct, i) => (
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
                  onChange={props.onPriorityUpdate}>
                  <option value="">Select Priority</option>
                    {props.priorityList.map((pr, i) => (
                      <option key={i} value={pr._id}>{pr.description}</option>
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
                Tech Assigned
              </th>
              <th>
                <FormControl
                  componentClass="select"
                  value={props.tech}
                  onChange={props.onTechUpdate}>
                  <option value="">Select Technician</option>
                  {props.techs.map((tech, i) => (
                    <option key={i} value={tech._id}>{tech.fullname}</option>
                  ))}
                </FormControl>
              </th>
            </tr>
           </tbody>
         </Table>
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
      </Form>
     </div>
   )
};

Filter.propTypes = {
  onUpdateCustomerSelection: PropTypes.func.isRequired,
  customer: PropTypes.string,
  onCustomerUpdate: PropTypes.func.isRequired,
  onUpdateCustomerModal: PropTypes.func.isRequired,
  onCS: PropTypes.func.isRequired,
  customerModal: PropTypes.bool.isRequired,
  searchText: PropTypes.string,
  onUpdateSearchText: PropTypes.func.isRequired,
  searchType: PropTypes.string,
  searchTypes: PropTypes.array,
  onUpdateSearchType: PropTypes.func.isRequired,
  searchreturn: PropTypes.array,
  dispatchNumber: PropTypes.string,
  onDispatchNumberUpdate: PropTypes.func.isRequired,
  dateCreated: PropTypes.object,
  onDateCreatedUpdate: PropTypes.func.isRequired,
  caller: PropTypes.string,
  onCallerUpdate: PropTypes.func.isRequired,
  callback: PropTypes.string,
  onCallbackUpdate: PropTypes.func.isRequired,
  altCallback: PropTypes.string,
  onAltCallbackUpdate: PropTypes.func.isRequired,
  po: PropTypes.string,
  onPoUpdate: PropTypes.func.isRequired,
  nte: PropTypes.string,
  onNteUpdate: PropTypes.func.isRequired,
  calltype: PropTypes.string,
  onCallTypeUpdate: PropTypes.func.isRequired,
  callTypeList: PropTypes.array,
  priorityList: PropTypes.array,
  priority: PropTypes.string,
  onPriorityUpdate: PropTypes.func.isRequired,
  tech: PropTypes.string,
  onTechUpdate: PropTypes.func.isRequired,
  techs: PropTypes.array,
  status: PropTypes.string,
  onStatusUpdate: PropTypes.func.isRequired,
  statusList: PropTypes.array,
},

module.exports = Filter;

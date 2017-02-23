var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../../styles');
var CustomerModal = require('../cust_search_helper/customermodal');
var SearchModal = require('./searchmodal');

var Table = require('react-bootstrap').Table;
var FormControl = require('react-bootstrap').FormControl;
var Form = require('react-bootstrap').Form;
var Button = require('react-bootstrap').Button;
var Panel = require('react-bootstrap').Panel;
var Accordion = require('react-bootstrap').Accordion;
var DatePicker = require('react-datepicker');

require('react-datepicker/dist/react-datepicker.css');


function ReportGenerator (props){
  if (props.filter_type == 'ent') {
    cell1 = <Button
               bsStyle={null}
               className="btn-darkblue"
               onClick={()=>{props.onUpdateSearchModal('ent')}}
               block>
               Select Enterprise
             </Button>
    cell2 = <FormControl
               type="text"
               placeholder="Select Enterprise"
               value={props.ent_name}
               disabled/>
  } else if (props.filter_type == 'org') {
    cell1 = <Button
               bsStyle={null}
               className="btn-darkblue"
               onClick={()=>{props.onUpdateSearchModal('org')}}
               block>
               Select Organization
             </Button>
    cell2 = <FormControl
               type="text"
               placeholder="Select Organization"
               value={props.org_name}
               disabled/>
  } else if (props.filter_type == 'cust') {
    cell1 = <Button
               bsStyle={null}
               className="btn-darkblue"
               onClick={props.onUpdateCustomerModal}
               block>
               Select Customer
             </Button>
    cell2 = <FormControl
               type="text"
               placeholder="Select Customer"
               value={props.customer}
               disabled/>
  } else if (props.filter_type == 'reg') {
    cell1 = <FormControl
               componentClass="select"
               value={props.region}
               onChange={props.onRegionUpdate}>
                <option value='-1'>Select Region</option>
               {props.region_list.map((region, i) => (
                 <option key={i} value={region}>{region}</option>
               ))}
             </FormControl>
    cell2 = null
  } else if (props.filter_type == 'terr') {
    cell1 = <FormControl
               componentClass="select"
               value={props.terr}
               onChange={props.onTerrUpdate}>
                <option value='-1'>Select Territory</option>
               {props.terr_list.map((terr, i) => (
                 <option key={i} value={terr}>{terr}</option>
               ))}
             </FormControl>
    cell2 = null
  } else {
    cell1 = null;
    cell2 = null;
  }


   return (
     <div>
       <Form onSubmit={props.onGenerateReport}>
         <Table responsive>
           <tbody>
             <tr>
               <th>
                 Report Type
               </th>
               <th colSpan="2">
                 <FormControl
                   componentClass="select"
                   value={props.report}
                   onChange={props.onReportUpdate}>
                   {props.reports.map((report, i) => (
                     <option key={i} value={report.id}>{report.name}</option>
                   ))}
                 </FormControl>
               </th>
               <th></th>
               <th>
                 Date From:
               </th>
               <th>
                 <DatePicker
                   selected={props.startDate}
                   selectsStart startDate={props.startDate}
                   endDate={props.endDate}
                   onChange={props.onStartDateUpdate}/>
               </th>
               <th>Date To:</th>
               <th>
                 <DatePicker
                   selected={props.endDate}
                   selectsEnd startDate={props.startDate}
                   endDate={props.endDate}
                   onChange={props.onEndDateUpdate} />
               </th>
             </tr>
             <tr>
               <th>
                 <Button
                   bsStyle="success"
                   type="submit"
                   block>
                   Generate Report
                 </Button>
               </th>
               <th colSpan={4}>
               </th>
               <th>
               </th>
             </tr>
           </tbody>
         </Table>
         <Accordion>
           <Panel header="Report Filter" eventKey="1">
             <Table>
               <tbody>
                 <tr>
                   <th>
                     Filter Type
                   </th>
                   <th>
                     <FormControl
                       componentClass="select"
                       value={props.filter_type}
                       onChange={props.onFilterTypeUpdate}>
                        <option value='-1'>Select Filter</option>
                       {props.filter_types.map((filter, i) => (
                         <option key={i} value={filter.id}>{filter.name}</option>
                       ))}
                     </FormControl>
                   </th>
                   <th>{cell1}</th>
                   <th colSpan="2">{cell2}</th>
                 </tr>
               </tbody>
             </Table>
           </Panel>
         </Accordion>
         <CustomerModal
           customer_modal={props.customer_modal}
           onUpdateCustomerModal={props.onUpdateCustomerModal}
           onCustomerSearch={props.onCustomerSearch}
           onUpdateSearchType={props.onUpdateSearchType}
           onUpdateSearchText={props.onUpdateSearchText}
           onCS={props.onCS}
           search_types={props.searchTypes}
           search_type={props.searchType}
           search_text={props.search_text}
           searchreturn={props.searchreturn}
           onUpdateCustomerSelection={props.onUpdateCustomerSelection} />
         <SearchModal
           search_context={props.search_context}
           onUpdateSearchModal={props.onUpdateSearchModal}
           search_text={props.search_text}
           searchreturn={props.searchreturn}
           onUpdateSearchText={props.onUpdateSearchText}
           onCS={props.onCS}
           onUpdateCustomerSelection={props.onUpdateCustomerSelection}
           search_modal={props.search_modal}
         />
       </Form>

     </div>
   )
};

ReportGenerator.propTypes = {
},

module.exports = ReportGenerator;

var React = require('react');
var PropTypes = React.PropTypes;
var DispatchCust = require('./dispatchcust');
var OpenDispatch = require('../dispatch_list_helper/opendispatch');
var DispatchCreate = require('./dispatchcreate');
var Equipment = require('./equipment')
var styles = require('../../styles');

var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var PageHeader = require('react-bootstrap').PageHeader;


function DispatchLayout (props){
   return props.isLoading === true
     ? <p> LOADING! </p>
     : <div className="col-sm-10 col-sm-offset-1">
         <PageHeader>
           Create Dispatch
         </PageHeader>
         <div className="col-sm-8">
             <DispatchCreate
               customerUpdate={props.onUpdateCustomer}
               calltype_list={props.calltype_list}
               priority_list={props.priority_list}
               techs={props.techs}
               phone={props.phone}
               altphone={props.altphone}
               description={props.description}
               nte={props.nte}
               po={props.po}
               tech={props.tech}
               customer={props.customer}
               caller={props.caller}
               calltype={props.calltype}
               priority={props.priority}
               outofchem={props.outofchem}
               returncall={props.returncall}
               notifytech={props.notifytech}
               customer_modal={props.customer_modal}
               onUpdateCustomerModal={props.onUpdateCustomerModal}
               onUpdateCaller={props.onUpdateCaller}
               onUpdatePhone={props.onUpdatePhone}
               onUpdateAltPhone={props.onUpdateAltPhone}
               onUpdateNTE={props.onUpdateNTE}
               onUpdatePO={props.onUpdatePO}
               onUpdateDescription={props.onUpdateDescription}
               onUpdateCallType={props.onUpdateCallType}
               onUpdatePriority={props.onUpdatePriority}
               onUpdateOutOfChem={props.onUpdateOutOfChem}
               onUpdateReturnCall={props.onUpdateReturnCall}
               onUpdateNotifyTech={props.onUpdateNotifyTech}
               onUpdateTech={props.onUpdateTech}
               onUpdateSearchType={props.onUpdateSearchType}
               onUpdateSearchText={props.onUpdateSearchText}
               onCS={props.onCS}
               search_types={props.search_types}
               search_type={props.search_type}
               search_text={props.search_text}
               searchreturn={props.searchreturn}
               onUpdateCustomerSelection={props.onUpdateCustomerSelection}
               onDispatchCreate={props.onDispatchCreate}
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
               terr_list={props.terr_list}/>
         </div>
           <div className="col-sm-4">
               <DispatchCust
                 onUpdateCustomerInfo={props.onUpdateCustomerInfo}
                 contact_name={props.contact_name}
                 address1={props.address1}
                 address2={props.address2}
                 city_state={props.city_state}
                 custinfo_open={props.custinfo_open}
                 credit_status={props.credit_status}/>
               <OpenDispatch
                 dispatches={props.dispatches}
                 onUpdateDispatches={props.onUpdateDispatches}
                 dispatches_open={props.dispatches_open}
                 onUpdateModal={props.onUpdateModal}
                 dispatch_modal={props.dispatch_modal}
                 onDispatchSelection={props.onDispatchSelection}
                 dispatch_selected={props.dispatch_selected}
                 title="Dispatches"/>
               <Equipment
                 onUpdateEquipment={props.onUpdateEquipment}
                 equipment={props.equipment}
                 equipment_open={props.equipment_open}
                 onUpdateEquipmentModal={props.onUpdateEquipmentModal}
                 equipment_modal={props.equipment_modal}
                 onEquipmentSelection={props.onEquipmentSelection}
                 equipment_selected={props.equipment_selected}/>
           </div>
       </div>

};

DispatchLayout.propTypes = {
  onUpdateCustomerInfo: PropTypes.func.isRequired,
  onUpdateEquipment: PropTypes.func.isRequired,
  onUpdateDispatches: PropTypes.func.isRequired,
  onUpdateModal: PropTypes.func.isRequired,
  onUpdateCustomerModal: PropTypes.func.isRequired,
  onUpdateEquipmentModal: PropTypes.func.isRequired,
  onUpdateCaller: PropTypes.func.isRequired,
  onUpdatePhone: PropTypes.func.isRequired,
  onUpdateAltPhone: PropTypes.func.isRequired,
  onUpdateDescription: PropTypes.func.isRequired,
  onUpdateNTE: PropTypes.func.isRequired,
  onUpdatePO: PropTypes.func.isRequired,
  onUpdateCallType: PropTypes.func.isRequired,
  onUpdatePriority: PropTypes.func.isRequired,
  onUpdateOutOfChem: PropTypes.func.isRequired,
  onUpdateReturnCall: PropTypes.func.isRequired,
  onUpdateNotifyTech: PropTypes.func.isRequired,
  onUpdateTech: PropTypes.func.isRequired,
  onUpdateSearchType: PropTypes.func.isRequired,
  onUpdateSearchText: PropTypes.func.isRequired,
  onDispatchSelection: PropTypes.func.isRequired,
  onEquipmentSelection: PropTypes.func.isRequired,
  onCS: PropTypes.func.isRequired,
  onDispatchCreate: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  customer: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  calltype_list: PropTypes.array.isRequired,
  priority_list: PropTypes.array.isRequired,
  techs: PropTypes.array.isRequired,
  phone: PropTypes.string,
  altphone: PropTypes.string,
  equipment: PropTypes.array,
  dispatches: PropTypes.array,
  address1: PropTypes.string,
  address2: PropTypes.string,
  city_state: PropTypes.string,
  nte: PropTypes.string,
  po: PropTypes.string,
  tech: PropTypes.number,
  caller: PropTypes.string.isRequired,
  dispatch_selected: PropTypes.object,
  equipment_selected: PropTypes.object,
  returncall: PropTypes.string,
  outofchem: PropTypes.string,
  notifytech: PropTypes.string,
  calltype: PropTypes.string,
  priority: PropTypes.string,
  contact_name: PropTypes.string,
  credit_status: PropTypes.string,
  custinfo_open: PropTypes.bool.isRequired,
  dispatches_open: PropTypes.bool.isRequired,
  equipment_open: PropTypes.bool.isRequired,
  dispatch_modal: PropTypes.bool.isRequired,
  customer_modal: PropTypes.bool.isRequired,
  equipment_modal: PropTypes.bool.isRequired,
  search_types: PropTypes.array,
  search_text: PropTypes.string,
  search_type: PropTypes.string,
  searchreturn: PropTypes.array
},

module.exports = DispatchLayout;

var React = require('react');
var PropTypes = React.PropTypes;
var Filter = require('./filter');
var Results = require('./results');

var Tabs = require('react-bootstrap').Tabs;
var Tab = require('react-bootstrap').Tab;
var PageHeader = require('react-bootstrap').PageHeader;


function SearchDispatchLayout (props){
   return props.isLoading === true
     ? <p> LOADING! </p>
     : <div className="col-sm-10 col-sm-offset-1">
         <PageHeader>
            Search Dispatch
         </PageHeader>
         <Tabs
            activeKey={props.tabkey}
            onSelect={props.onKeySelect}
            id="controlled-tab-example">
            <Tab
              eventKey={1}
              title='Filters'>
              <Filter
                customerName={props.customerName}
                onCustomerUpdate={props.onCustomerUpdate}
                onUpdateCustomerModal={props.onUpdateCustomerModal}
                onCS={props.onCS}
                customerModal={props.customerModal}
                searchText={props.searchText}
                onUpdateSearchText={props.onUpdateSearchText}
                searchType={props.searchType}
                searchTypes={props.searchTypes}
                onUpdateSearchType={props.onUpdateSearchType}
                searchreturn={props.searchreturn}
                onUpdateCustomerSelection={props.onUpdateCustomerSelection}
                dispatchNumber={props.dispatchNumber}
                onDispatchNumberUpdate={props.onDispatchNumberUpdate}
                dateCreated={props.dateCreated}
                onDateCreatedUpdate={props.onDateCreatedUpdate}
                caller={props.caller}
                onCallerUpdate={props.onCallerUpdate}
                callback={props.callback}
                onCallbackUpdate={props.onCallbackUpdate}
                altCallback={props.altCallback}
                onAltCallbackUpdate={props.onAltCallbackUpdate}
                po={props.po}
                onPoUpdate={props.onPoUpdate}
                nte={props.nte}
                onNteUpdate={props.onNteUpdate}
                calltype={props.calltype}
                onCallTypeUpdate={props.onCallTypeUpdate}
                callTypeList={props.callTypeList}
                priorityList={props.priorityList}
                priority={props.priority}
                onPriorityUpdate={props.onPriorityUpdate}
                tech={props.tech}
                onTechUpdate={props.onTechUpdate}
                techs={props.techs}
                status={props.status}
                onStatusUpdate={props.onStatusUpdate}
                statusList={props.statusList}
                onDispatchSearch={props.onDispatchSearch}
                isSearching={props.isSearching}
                onClearSearch={props.onClearSearch}/>
            </Tab>
            <Tab
              eventKey={2}
              title='Results'>
              <Results
                customerName={props.customerName}
                dispatchSearchReturn={props.dispatchSearchReturn}
                onEditDispatch={props.onEditDispatch}
                onUpdateEditDispatchModal={props.onUpdateEditDispatchModal}
                edit_dispatch_modal={props.edit_dispatch_modal}
                edit_calltype={props.edit_calltype}
                onEditCallTypeUpdate={props.onEditCallTypeUpdate}
                callTypeList={props.callTypeList}
                edit_priority={props.edit_priority}
                onEditPriorityUpdate={props.onEditPriorityUpdate}
                priorityList={props.priorityList}
                edit_po={props.edit_po}
                edit_nte={props.edit_nte}
                onEditPoUpdate={props.onEditPoUpdate}
                onEditNteUpdate={props.onEditNteUpdate}
                edit_status={props.edit_status}
                edit_caller={props.edit_caller}
                edit_callback={props.edit_callback}
                edit_altCallback={props.edit_altCallback}
                onEditStatusUpdate={props.onEditStatusUpdate}
                onEditCallerUpdate={props.onEditCallerUpdate}
                onEditCallbackUpdate={props.onEditCallbackUpdate}
                onEditAltCallbackUpdate={props.onEditAltCallbackUpdate}
                statusList={props.statusList}
                customerModal={props.customerModal}
                onUpdateCustomerModal={props.onUpdateCustomerModal}
                onCustomerSearch={props.onCustomerSearch}
                onUpdateSearchType={props.onUpdateSearchType}
                onUpdateSearchText={props.onUpdateSearchText}
                onCS={props.onCS}
                searchTypes={props.searchTypes}
                searchType={props.searchType}
                searchText={props.searchText}
                searchreturn={props.searchreturn}
                onCustomerSearch={props.onCustomerSearch}
                onUpdateCustomerSelection={props.onUpdateCustomerSelection}
                onEditUpdateOutOfChem={props.onEditUpdateOutOfChem}
                onEditUpdateNotifyTech={props.onEditUpdateNotifyTech}
                onEditUpdateReturnCall={props.onEditUpdateReturnCall}
                onEditUpdateTech={props.onEditUpdateTech}
                edit_tech={props.edit_tech}
                techs={props.techs}
                edit_ooc={props.edit_ooc}
                edit_notify={props.edit_notify}
                edit_returnCall={props.edit_returnCall}
                onEditUpdateDescription={props.onEditUpdateDescription}
                edit_description={props.edit_description}
                onUpdateDispatchSelection={props.onUpdateDispatchSelection}/>
            </Tab>
         </Tabs>
       </div>

};

SearchDispatchLayout.propTypes = {
  tabkey: PropTypes.number.isRequired,
  onUpdateCustomerSelection: PropTypes.func.isRequired,
  customerName: PropTypes.string,
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
  dispatchSearchReturn: PropTypes.array,
},

module.exports = SearchDispatchLayout;

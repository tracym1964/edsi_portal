var React = require("react");
var SearchDispatchLayout = require('../js/search_dispatch/search_layout');
var DispatchHelper = require('../utils/DispatchHelper');
var LoginHelper = require('../utils/LoginHelper');

var moment = require('moment');


var SearchDispContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function(){
      return {
        tabkey: 1,
        isLoading: true,
        customerId: '',
        customerName: '',
        customers: [],
        customerModal: false,
        callTypeList: [],
        priorityList: [],
        priority: '',
        statusList: [],
        status: '',
        techs: [],
        tech: '',
        searchTypes: [],
        searchText: '',
        searchType: 'name',
        searchreturn: [],
        dispatchNumber: '',
        dateCreated: null,
        dispatchSearchReturn: [],
        caller: '',
        callback: '',
        altCallback: '',
        po: '',
        nte: '',
        calltype: '',
        isSearching: false,
        edit_dispatch_modal: false,
        edit_calltype: null,
        edit_priority: null,
        edit_nte: null,
        edit_po: null,
        edit_status: null,
        edit_caller: null,
        edit_callback: null,
        edit_altCallback: null,
        edit_customerId: null,
        edit_customerName: null,
        edit_tech: null,
        edit_ooc: null,
        edit_returnCall: null,
        edit_notify: null,
        edit_description: null,
        edit_dispatchNumber: null,
      }
  },
  handleKeySelect: function(e){
    this.setState({
      tabkey: e
    })
  },
  handleCustomerUpdate: function(id, name){
    this.setState(
      customerId: id,
      customerName: name
    )
  },
  handleCustomerSelect: function(customer, name){
    this.setState({
      customerId: customer._id,
      customerName: name
    })
    console.log("test1")
  },
  handleUpdateCustomerModal: function(e){
    if (this.state.customerModal) {
      this.setState({
        customerModal: false
      })
    } else {
      this.setState({
        customerModal: true,
        searchreturn: []
      })
    }
  },
  handleCS: function(e){
    DispatchHelper.getSearchInfo(this.state.searchText, this.state.searchType, (res) => {
      if (res.error) {
        LoginHelper.logout()
        this.context.router.push(
          {pathname: '/login/'}
        )
      } else {
        this.setState({
          searchreturn: res
        })
      }
    });
  },
  handleSearchTextUpdate: function(e){
    this.setState({
      searchText: e.target.value
    })
  },
  handleSearchTypeUpdate: function(e){
    this.setState({
      searchType: e.target.value
    })
  },
  handleCustomerSelection: function(id, name){
    this.handleCustomerSelect(id, name)
    this.setState({
      customerModal: false

    })
  },
  handleDispatchNumberUpdate: function(e){
    this.setState({
      dispatchNumber: e.target.value
    })
  },
  handleDateCreatedUpdate: function(date){
    this.setState({
      dateCreated: date
    })
  },
  handleCallerUpdate: function(e){
    this.setState({
      caller: e.target.value
    })
  },
  handleCallbackUpdate: function(e){
    this.setState({
      callback: e.target.value
    })
  },
  handleAltCallbackUpdate: function(e){
    this.setState({
      altCallback: e.target.value
    })
  },
  handlePoUpdate: function(e){
    this.setState({
      po: e.target.value
    })
  },
  handleNteUpdate: function(e){
    this.setState({
      nte: e.target.value
    })
  },
  handleCallTypeUpdate: function(e){
    this.setState({
      calltype: e.target.value
    })
  },
  handlePriorityUpdate: function(e){
    this.setState({
      priority: e.target.value
    })
  },
  handleTechUpdate: function(e){
    this.setState({
      tech: e.target.value
    })
  },
  handleStatusUpdate: function(e){
    this.setState({
      status: e.target.value
    })
  },
  handleClearSearch: function(e){
    this.setState({
      dispatchNumber: '',
      dateCreated: null,
      customerId: '',
      customerName: '',
      status: '',
      caller: '',
      callback: '',
      altCallback: '',
      po: '',
      nte: '',
      calltype: '',
      priority: '',
      tech: '',
    })
  },
  handleEditDispatch: function(dispatch) {
    console.log('dispatch', dispatch)
    this.setState({
      edit_dispatch_modal: true,
      edit_calltype: dispatch.call_type_id,
      edit_priority: dispatch.priority_id,
      edit_po: dispatch.po_ticket,
      edit_nte: dispatch.bill_not_to_exceed,
      edit_status: dispatch.status_id,
      edit_caller: dispatch.caller,
      edit_callback: dispatch.call_back_number,
      edit_altCallback: dispatch.alt_call_back_number,
      customerName: dispatch.customer_name,
      customerId: dispatch.customer_id,
      edit_tech: dispatch.tech_id,
      edit_ooc: dispatch.out_of_chemicals,
      edit_returnCall: dispatch.is_return_call,
      edit_notify: dispatch.send_email,
      edit_description: dispatch.description,
      edit_dispatchNumber: dispatch.dispatch_number
    })
  },
  handleEditDispatchModal: function(e){
    if (this.state.edit_dispatch_modal) {
      this.setState({
        edit_dispatch_modal: false
      })
    } else {
      this.setState({
        edit_dispatch_modal: true
      })
    }
  },
  handleEditCallTypeUpdate: function(e){
    this.setState({
      edit_calltype: e.target.value
    })
  },
  handleEditPriorityUpdate: function(e){
    this.setState({
      edit_priority: e.target.value
    })
  },
  handleEditPoUpdate: function(e){
    this.setState({
      edit_po: e.target.value
    })
  },
  handleEditNteUpdate: function(e){
    this.setState({
      edit_nte: e.target.value
    })
  },
  handleEditStatusUpdate: function(e){
    this.setState({
      edit_status: e.target.value
    })
  },
  handleEditCallerUpdate: function(e){
    this.setState({
      edit_caller: e.target.value
    })
  },
  handleEditCallbackUpdate: function(e){
    this.setState({
      edit_callback: e.target.value
    })
  },
  handleEditAltCallbackUpdate: function(e){
    this.setState({
      edit_altCallback: e.target.value
    })
  },
  handleEditUpdateOutOfChem: function(e){
    this.setState({
      edit_ooc: e.target.value
    })
  },
  handleEditUpdateNotifyTech: function(e){
    this.setState({
      edit_notify: e.target.value
    })
  },
  handleEditUpdateReturnCall: function(e){
    this.setState({
      edit_returnCall: e.target.value
    })
  },
  handleEditUpdateTech: function(e){
    this.setState({
      edit_tech: e.target.value
    })
  },
  handleEditUpdateDescription: function(e){
    this.setState({
      edit_description: e.target.value
    })
  },
  handleUpdateDispatchSelection: function(e){
    var dispatch = {
      'dispatch_number': this.state.edit_dispatchNumber,
      'caller_name': this.state.edit_caller,
      'customer': this.state.customerId,
      'call_back_number': this.state.edit_callback,
      'alt_call_back_number': this.state.edit_altCallback,
      'bill_not_to_exceed': this.state.edit_nte,
      'po_ticket': this.state.edit_po,
      'symptoms': this.state.edit_description,
      'call_type': this.state.edit_calltype,
      'priority': this.state.edit_priority,
      'assigned_employee': this.state.edit_tech,
      'out_of_chemicals': this.state.edit_ooc,
      'is_return_call': this.state.edit_returnCall,
      'send_email': this.state.edit_notify,
    }
    DispatchHelper.createDispatch(dispatch, (res) => {
      if (res.error) {
        LoginHelper.logout()
        this.context.router.push(
          {pathname: '/login/'}
        )
      } else {
        this.context.router.push({
          pathname: '/dispatch/submitted',
        })
      }
    })
  },
  handleDispatchSearch: function(e){
    var searchQuery = {
      dispatch_number: this.state.dispatchNumber,
      call_received: this.state.dateCreated,
      customer_id: this.state.customerId,
      status_id: this.state.status,
      caller_name: this.state.caller,
      call_back_number: this.state.callback,
      alt_call_back_number: this.state.altCallback,
      po_ticket: this.state.po,
      bill_not_to_exceed: this.state.nte,
      call_type_id: this.state.calltype,
      priority_id: this.state.priority,
      customer__territory_id: null,
      assigned_employee_id: this.state.tech,
    }
    this.setState({
      isSearching: true
    })
  DispatchHelper.getDispatchSearchInfo(searchQuery, (res) => {
    this.setState({
      dispatchSearchReturn: res.dispatches,
      tabkey: 2,
      isSearching: false
      })
    });
  },
  componentDidMount: function () {
    DispatchHelper.getInitLoad( (res) => {
      this.setState({
        isLoading: false,
        callTypeList: res.call_type,
        priorityList: res.priority,
        techs: res.techs,
        statusList: res.status,
        searchTypes: res.customer_search_fields
      })
    });
  },
  render: function () {
    return (
      <SearchDispatchLayout
        tabkey={this.state.tabkey}
        onKeySelect={this.handleKeySelect}
        customerModal={this.state.customerModal}
        customerName={this.state.customerName}
        onCustomerUpdate={this.handleCustomerUpdate}
        onUpdateCustomerModal={this.handleUpdateCustomerModal}
        onCS={this.handleCS}
        searchText={this.state.searchText}
        onUpdateSearchText={this.handleSearchTextUpdate}
        searchType={this.state.searchType}
        searchTypes={this.state.searchTypes}
        onUpdateSearchType={this.handleSearchTypeUpdate}
        searchreturn={this.state.searchreturn}
        onUpdateCustomerSelection={this.handleCustomerSelection}
        dispatchNumber={this.state.dispatchNumber}
        onDispatchNumberUpdate={this.handleDispatchNumberUpdate}
        dateCreated={this.state.dateCreated}
        onDateCreatedUpdate={this.handleDateCreatedUpdate}
        caller={this.state.caller}
        onCallerUpdate={this.handleCallerUpdate}
        callback={this.state.callback}
        onCallbackUpdate={this.handleCallbackUpdate}
        altCallback={this.state.altCallback}
        onAltCallbackUpdate={this.handleAltCallbackUpdate}
        po={this.state.po}
        onPoUpdate={this.handlePoUpdate}
        nte={this.state.nte}
        onNteUpdate={this.handleNteUpdate}
        calltype={this.state.calltype}
        onCallTypeUpdate={this.handleCallTypeUpdate}
        callTypeList={this.state.callTypeList}
        priorityList={this.state.priorityList}
        priority={this.state.priority}
        onPriorityUpdate={this.handlePriorityUpdate}
        tech={this.state.tech}
        onTechUpdate={this.handleTechUpdate}
        techs={this.state.techs}
        status={this.state.status}
        onStatusUpdate={this.handleStatusUpdate}
        statusList={this.state.statusList}
        onDispatchSearch={this.handleDispatchSearch}
        dispatchSearchReturn={this.state.dispatchSearchReturn}
        isSearching={this.state.isSearching}
        onEditDispatch={this.handleEditDispatch}
        onUpdateEditDispatchModal={this.handleEditDispatchModal}
        edit_dispatch_modal={this.state.edit_dispatch_modal}
        edit_calltype={this.state.edit_calltype}
        onEditCallTypeUpdate={this.handleEditCallTypeUpdate}
        edit_priority={this.state.edit_priority}
        onEditPriorityUpdate={this.handleEditPriorityUpdate}
        edit_po={this.state.edit_po}
        edit_nte={this.state.edit_nte}
        onEditPoUpdate={this.handleEditPoUpdate}
        onEditNteUpdate={this.handleEditNteUpdate}
        edit_status={this.state.edit_status}
        edit_caller={this.state.edit_caller}
        edit_callback={this.state.edit_callback}
        edit_altCallback={this.state.edit_altCallback}
        onEditStatusUpdate={this.handleEditStatusUpdate}
        onEditCallerUpdate={this.handleEditCallerUpdate}
        onEditCallbackUpdate={this.handleEditCallbackUpdate}
        onEditAltCallbackUpdate={this.handleEditAltCallbackUpdate}
        onEditUpdateOutOfChem={this.handleEditUpdateOutOfChem}
        onEditUpdateNotifyTech={this.handleEditUpdateNotifyTech}
        onEditUpdateReturnCall={this.handleEditUpdateReturnCall}
        onEditUpdateTech={this.handleEditUpdateTech}
        edit_tech={this.state.edit_tech}
        edit_ooc={this.state.edit_ooc}
        edit_notify={this.state.edit_notify}
        edit_returnCall={this.state.edit_returnCall}
        onEditUpdateDescription={this.handleEditUpdateDescription}
        edit_description={this.state.edit_description}
        onUpdateDispatchSelection={this.handleUpdateDispatchSelection}
        onClearSearch={this.handleClearSearch}/>
    )
  }
});

module.exports = SearchDispContainer;

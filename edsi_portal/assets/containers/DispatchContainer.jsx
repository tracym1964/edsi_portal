var React = require("react");
var DispatchLayout = require('../js/create_dispatch/dispatchlayout');
var DispatchHelper = require('../utils/DispatchHelper');
var LoginHelper = require('../utils/LoginHelper');


var DispatchContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function(){
      return {
        username: '',
        customer_id: '',
        customer_name: '',
        isLoading: true,
        user: 1,
        calltype_list: [],
        priority_list: [],
        techs: [],
        contact_name: '',
        phone: '',
        altphone: '',
        equipment: [],
        dispatches: [],
        dispatch_selected: {},
        equipment_selected: {},
        address1: '',
        address2: '',
        city_state: '',
        nte: '',
        tech: 0,
        credit_status: '',
        custinfo_open: false,
        dispatches_open: false,
        equipment_open: false,
        dispatch_modal: false,
        customer_modal: false,
        equipment_modal: false,
        caller: '',
        description: '',
        po: '',
        calltype:'7',
        priority:'2',
        outofchem: "false",
        returncall: "false",
        notifytech: "true",
        search_text: '',
        search_type: 'name',
        searchreturn: null,
        search_types: [],
        customer_types: [],
        customer_type: '1',
        superuser: true,
        pot_cust_id: '',
        pot_cust_name: '',
        pot_panel: false,
        pot_terr: '',
        pot_email: '',
        pot_phone: '',
        pot_zip: '',
        pot_state: '',
        pot_city: '',
        pot_street2: '',
        pot_street1: '',
        pot_contName: '',
        pot_custName: '',
        terr_list: [],
      }
  },
  handleUpdateCustomerInfo: function(e){
    if (this.state.custinfo_open) {
      this.setState({
        custinfo_open: false
      })
    } else {
      this.setState({
        custinfo_open: true
      })
    }
  },
  handleUpdateEquipment: function(e){
    if (this.state.equipment_open) {
      this.setState({
        equipment_open: false
      })
    } else {
      if (!this.state.customer_id) {
        this.setState({
          equipment_open: true
        })
      } else {
        DispatchHelper.getSelectedEquipment(this.state.customer_id, (res) => {
          if (res.error) {
            LoginHelper.logout()
            this.context.router.push(
              {pathname: '/login/'}
            )
          } else {
            this.setState({
              equipment_open: true,
              equipment: res
            })
          }
        });
      }
    }
  },
  handleUpdateDispatches: function(e){
    if (this.state.dispatches_open) {
      this.setState({
        dispatches_open: false
      })
    } else {
      if (!this.state.customer_id) {
        this.setState({
          dispatches_open: true
        })
      } else {
        DispatchHelper.getSelectedDispatch(this.state.customer_id, (res) => {
          if (res.error) {
            LoginHelper.logout()
            this.context.router.push(
              {pathname: '/login/'}
            )
          } else {
            this.setState({
              dispatches_open: true,
              dispatches: res
            })
          }
        });
      }
    }
  },
  handleUpdateModal: function(e){
    if (this.state.dispatch_modal) {
      this.setState({
        dispatch_modal: false
      })
    } else {
      this.setState({
        dispatch_modal: true
      })
    }
  },
  handleUpdateCustomerModal: function(e){
    if (this.state.customer_modal) {
      this.setState({
        customer_modal: false,
        searchreturn: null,
        search_text: '',
      })
    } else {
      this.setState({
        customer_modal: true,
      })
    }
  },
  handleUpdateEquipmentModal: function(e){
    if (this.state.equipment_modal) {
      this.setState({
        equipment_modal: false
      })
    } else {
      this.setState({
        equipment_modal: true
      })
    }
  },
  handlePotCustomerAddition: function(e){
    var customer = {
      territory: this.state.pot_terr,
      email: this.state.pot_email,
      phone: this.state.pot_phone,
      zip: this.state.pot_zip,
      state: this.state.pot_state,
      city: this.state.pot_city,
      street2: this.state.pot_street2,
      street1: this.state.pot_street1,
      contact_name: this.state.pot_contName,
      customer_name: this.state.pot_custName,
    };
    DispatchHelper.createPotentialCust(customer, (res) => {
      if (res.error) {
        LoginHelper.logout()
        this.context.router.push(
          {pathname: '/login/'}
        )
      } else {
        var city_state = res.data.customer.city + ", " + res.data.customer.state + " " + res.data.customer.zip_code;
        this.setState({
          customer_modal: false,
          pot_customer_id: res.data.customer._id,
          customer_name: res.data.customer.customer_name,
          contact_name: res.data.customer.contact_name,
          address1: res.data.customer.street1,
          address2: res.data.customer.street2,
          city_state: city_state,
          phone: res.data.customer.phone,
          tech: res.data.customer.default_tech,
          credit_status: 'N/A',
          custinfo_open: true,
        })
      }
    });

  },
  handlePotPanelUpdate: function(e){
    this.setState({
      pot_panel: !this.state.pot_panel
    })
  },
  handlePotTerrUpdate: function(e){
    this.setState({
      pot_terr: e.target.value
    })
  },
  handlePotEmailUpdate: function(e){
    this.setState({
      pot_email: e.target.value
    })
  },
  handlePotPhoneUpdate: function(e){
    this.setState({
      pot_phone: e.target.value
    })
  },
  handlePotZipUpdate: function(e){
    this.setState({
      pot_zip: e.target.value
    })
  },
  handlePotStateUpdate: function(e){
      this.setState({
        pot_state: e.target.value
      })
    },
  handlePotCityUpdate: function(e){
      this.setState({
        pot_city: e.target.value
      })
    },
  handlePotStreet2Update: function(e){
      this.setState({
        pot_street2: e.target.value
      })
    },
  handlePotStreet1Update: function(e){
      this.setState({
        pot_street1: e.target.value
      })
    },
  handlePotContNameUpdate: function(e){
      this.setState({
        pot_contName: e.target.value
      })
    },
  handlePotCustNameUpdate: function(e){
    this.setState({
      pot_custName: e.target.value
    })
  },
  handleCallerUpdate: function(e){
    this.setState({
      caller: e.target.value
    })
  },
  handlePhoneUpdate: function(e){
    this.setState({
      phone: e.target.value
    })
  },
  handleAltPhoneUpdate: function(e){
    this.setState({
      altphone: e.target.value
    })
  },
  handleNTEUpdate: function(e){
    this.setState({
      nte: e.target.value
    })
  },
  handlePOUpdate: function(e){
      this.setState({
        po: e.target.value
      })
    },
  handleDescriptionUpdate: function(e){
      this.setState({
        description: e.target.value
      })
    },
  handlePriorityUpdate: function(e){
      this.setState({
        priority: e.target.value
      })
    },
  handleCallTypeUpdate: function(e){
      this.setState({
        calltype: e.target.value
      })
    },
  handleTechUpdate: function(e){
      this.setState({
        tech: e.target.value
      })
    },
  handleOutOfChemUpdate: function(e){
    if (this.state.outofchem === 'true') {
      this.setState({
        outofchem: 'false'
      })
    } else {
      this.setState({
        outofchem: 'true'
      })
    }
  },
  handleReturnCallUpdate: function(e){
    if (this.state.returncall === 'true') {
      this.setState({
        returncall: 'false'
      })
    } else {
      this.setState({
        returncall: 'true'
      })
    }
  },
  handleNotifyTechUpdate: function(e){
    if (this.state.notifytech === 'true') {
      this.setState({
        notifytech: 'false'
      })
    } else {
      this.setState({
        notifytech: 'true'
      })
    }
  },
  handleCustomerTypeUpdate: function(e){
    this.setState({
      customer_type: e.target.value
    })
  },
  handleCS: function(e){
    DispatchHelper.getSearchInfo(this.state.search_text, this.state.search_type, (res) => {
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
      search_text: e.target.value
    })
  },
  handleSearchTypeUpdate: function(e){
    this.setState({
      search_type: e.target.value
    })
  },
  handleCustomerSelection: function(e){
    this.setState({
      customer_modal: false,
      customer_id: e._id,
      customer_name: e.name,
      contact_name: e.contact_name,
      address1: e.address_1,
      address2: e.address_2,
      city_state: e.city_state,
      phone: e.phone,
      altphone: e.cell,
      nte: e.default_bill_not_to_exceed,
      tech: e.default_tech,
      credit_status: e.credit_status,
      custinfo_open: true,
    })
  },
  handleDispatchSelection: function(e){
    this.setState({
      dispatch_modal: true,
      dispatch_selected: e
    })
  },
  handleEquipmentSelection: function(e){
    this.setState({
      equipment_modal: true,
      equipment_selected: e
    })
  },
  componentDidMount: function() {
    DispatchHelper.getInitLoad( (res) => {
      if (res.error) {
        LoginHelper.logout()
        this.context.router.push(
          {pathname: '/login/'}
        )
      } else {
      this.setState({
        isLoading: false,
        calltype_list: res.call_type,
        priority_list: res.priority,
        techs: res.techs,
        search_types: res.customer_search_fields,
        terr_list: [
            150, 160, 165, 170, 175, 180, 185, 190, 361, 365,
            366, 372, 374, 381, 650, 651, 653, 655, 656, 660
        ],
        customer_types: [
            {id: '1', name: "Current Customers"},
            {id: '2', name: "Potential Customers"}
        ]
      })
    }
    });
  },
  handleCreateDispatch: function(e){
    var dispatch = {
      'caller_name': this.state.caller,
      'customer': this.state.customer_id,
      'call_back_number': this.state.phone,
      'alt_call_back_number': this.state.altphone,
      'bill_not_to_exceed': this.state.nte,
      'po_ticket': this.state.po,
      'symptoms': this.state.description,
      'call_type': this.state.calltype,
      'priority': this.state.priority,
      'assigned_employee': this.state.tech,
      'out_of_chemicals': this.state.outofchem,
      'is_return_call': this.state.returncall,
      'send_email': this.state.notifytech,
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
  render: function () {
    return (
      <DispatchLayout
        onUpdateCustomerSelection={this.handleCustomerSelection}
        onUpdateCustomerInfo={this.handleUpdateCustomerInfo}
        onUpdateDispatches={this.handleUpdateDispatches}
        onUpdateEquipment={this.handleUpdateEquipment}
        onUpdateModal={this.handleUpdateModal}
        onUpdateCustomerModal={this.handleUpdateCustomerModal}
        onUpdateEquipmentModal={this.handleUpdateEquipmentModal}
        onUpdateCaller={this.handleCallerUpdate}
        onUpdatePhone={this.handlePhoneUpdate}
        onUpdateAltPhone={this.handleAltPhoneUpdate}
        onUpdateNTE={this.handleNTEUpdate}
        onUpdatePO={this.handlePOUpdate}
        onUpdateDescription={this.handleDescriptionUpdate}
        onUpdateCallType={this.handleCallTypeUpdate}
        onUpdatePriority={this.handlePriorityUpdate}
        onUpdateOutOfChem={this.handleOutOfChemUpdate}
        onUpdateReturnCall={this.handleReturnCallUpdate}
        onUpdateNotifyTech={this.handleNotifyTechUpdate}
        onUpdateTech={this.handleTechUpdate}
        onDispatchSelection={this.handleDispatchSelection}
        onEquipmentSelection={this.handleEquipmentSelection}
        onUpdateSearchType={this.handleSearchTypeUpdate}
        onUpdateSearchText={this.handleSearchTextUpdate}
        onDispatchCreate={this.handleCreateDispatch}
        onCS={this.handleCS}
        onCustomerTypeUpdate={this.handleCustomerTypeUpdate}
        onPotPanelUpdate={this.handlePotPanelUpdate}
        username={this.state.username}
        customer={this.state.customer_name}
        isLoading={this.state.isLoading}
        customers={this.state.customers}
        calltype_list={this.state.calltype_list}
        priority_list={this.state.priority_list}
        techs={this.state.techs}
        phone={this.state.phone}
        altphone={this.state.altphone}
        equipment={this.state.equipment}
        equipment_selected={this.state.equipment_selected}
        dispatches={this.state.dispatches}
        address1={this.state.address1}
        address2={this.state.address2}
        city_state={this.state.city_state}
        nte={this.state.nte}
        tech={this.state.tech}
        po={this.state.po}
        priority={this.state.priority}
        description={this.state.description}
        caller={this.state.caller}
        calltype={this.state.calltype}
        outofchem={this.state.outofchem}
        returncall={this.state.returncall}
        notifytech={this.state.notifytech}
        dispatch_selected={this.state.dispatch_selected}
        credit_status={this.state.credit_status}
        contact_name={this.state.contact_name}
        custinfo_open={this.state.custinfo_open}
        dispatches_open={this.state.dispatches_open}
        equipment_open={this.state.equipment_open}
        dispatch_modal={this.state.dispatch_modal}
        customer_modal={this.state.customer_modal}
        equipment_modal={this.state.equipment_modal}
        search_type={this.state.search_type}
        search_text={this.state.search_text}
        search_types={this.state.search_types}
        searchreturn={this.state.searchreturn}
        superuser={this.state.superuser}
        customer_types={this.state.customer_types}
        customer_type={this.state.customer_type}
        pot_panel={this.state.pot_panel}
        pot_terr={this.state.pot_terr}
        onPotTerrUpdate={this.handlePotTerrUpdate}
        pot_email={this.state.pot_email}
        onPotEmailUpdate={this.handlePotEmailUpdate}
        pot_phone={this.state.pot_phone}
        onPotPhoneUpdate={this.handlePotPhoneUpdate}
        pot_zip={this.state.pot_zip}
        onPotZipUpdate={this.handlePotZipUpdate}
        pot_state={this.state.pot_state}
        onPotStateUpdate={this.handlePotStateUpdate}
        pot_city={this.state.pot_city}
        onPotCityUpdate={this.handlePotCityUpdate}
        pot_street2={this.state.pot_street2}
        onPotStreet2Update={this.handlePotStreet2Update}
        pot_street1={this.state.pot_street1}
        onPotStreet1Update={this.handlePotStreet1Update}
        pot_contName={this.state.pot_contName}
        onPotContNameUpdate={this.handlePotContNameUpdate}
        pot_custName={this.state.pot_custName}
        onPotCustNameUpdate={this.handlePotCustNameUpdate}
        onPotCustomerAddition={this.handlePotCustomerAddition}
        terr_list={this.state.terr_list}/>
    )
  }
});

module.exports = DispatchContainer;

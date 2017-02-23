var React = require("react");
var CustomerMaintenance = require('../js/customer/customermaintenance');
var CustomerHelper = require('../utils/CustomerHelper');
var LoginHelper = require('../utils/LoginHelper');


var CustomerMaintenanceContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function(){
        return {
            isLoading: true,
            edit_modal: false,
            add_modal: false,
            search_modal: false,
            edit_context: '',
            add_context: '',
            search_context: '',
            search_text: '',
            searchreturn: null,
            billto: '',
            billto_list: [],
            ent: '',
            ent_list: [],
            org: '',
            org_list: [],
            customers: null,
            edit_org: '',
            edit_org_name: '',
            edit_ent_name: '',
        }
    },
    handleUpdateEditModal: function(context){
        if (this.state.edit_modal) {
            this.setState({
                edit_modal: false,
                edit_context: '',
                search_text: '',
                edit_org: ''
            })
        } else {
            if (context =='org') {
                var orgName =  this.state.org_list.find(x => x._id === this.state.org).name;
            } else if (context == 'ent') {
                var entName = this.state.ent_list.find(x => x._id === this.state.ent).name
            } else {
                orgName = null
                entName = null
            }
            this.setState({
                edit_modal: true,
                edit_context: context,
                edit_org: this.state.org,
                edit_org_name: orgName,
                edit_ent_name: entName,
            })
        }
    },
    handleUpdateAddModal: function(context){
        if (this.state.add_modal) {
            this.setState({
                add_modal: false,
                add_context: '',
                search_text: ''
            })
        } else {
            this.setState({
                add_modal: true,
                add_context: context
            })
        }
    },
    handleUpdateSearchModal: function(context){
        if (this.state.search_modal) {
            this.setState({
                search_modal: false,
                search_context: '',
                search_text: ''
            })
        } else {
            this.setState({
                search_modal: true,
                search_context: context
            })
        }
    },
    handleUpdateSearchText: function(e) {
        this.setState({
            search_text: e.target.value
        })
    },
    handleSearch: function(e) {
        if (this.state.search_context == 'bill') {
            CustomerHelper.getBillToInfo(this.state.search_text, (res) => {
                if (res.error) {
                    LoginHelper.logout()
                    this.context.router.push(
                        {pathname: '/login/'}
                    )
                } else {
                    if (res.data.billto.length > 0) {
                        this.setState({
                            searchreturn: res.data.billto
                        })
                    } else {
                        this.setState({
                            searchreturn: null
                        })
                    }

                }
            })
        } else if (this.state.search_context == 'ent') {
            CustomerHelper.getEntInfo(this.state.search_text, (res) => {
                if (res.error) {
                    LoginHelper.logout()
                    this.context.router.push(
                        {pathname: '/login/'}
                    )
                } else {
                    if (res.data.ent.length > 0) {
                        this.setState({
                            searchreturn: res.data.ent
                        })
                    } else {
                        this.setState({
                            searchreturn: null
                        })
                    }

                }
            })
        } else if (this.state.search_context == 'org') {
            CustomerHelper.getOrgInfo(this.state.search_text, (res) => {
                if (res.error) {
                    LoginHelper.logout()
                    this.context.router.push(
                        {pathname: '/login/'}
                    )
                } else {
                    if (res.data.org.length > 0) {
                        this.setState({
                            searchreturn: res.data.org
                        })
                    } else {
                        this.setState({
                            searchreturn: null
                        })
                    }

                }
            })
        }
    },
    handleSearchSelection: function(value) {
        if (this.state.search_context == 'bill') {
            query = {'billto': value.number, 'ent': '', 'org': ''}
        } else if (this.state.search_context == 'ent') {
            query = {'billto': '', 'ent': value._id, 'org': ''}
        } else if (this.state.search_context == 'org') {
            query = {'billto': '', 'ent': '' , 'org': value._id}
        } else {
            query = {'billto': '', 'ent': '' , 'org': ''}
        }
        CustomerHelper.getTreeInfo(query, (res) => {
            this.setState({
                billto_list: res.data.lists.billto,
                billto: res.data.selection.billto,
                org_list: res.data.lists.org,
                org: res.data.selection.org,
                ent_list: res.data.lists.ent,
                ent: res.data.selection.ent,
                searchreturn: null
            })
        })
        this.handleUpdateSearchModal()

    },
    handleBillToUpdate: function(e) {
        query = {'billto': e.target.value, 'ent': '', 'org': ''}
        CustomerHelper.getTreeInfo(query, (res) => {
            this.setState({
                billto_list: res.data.lists.billto,
                billto: res.data.selection.billto,
                org_list: res.data.lists.org,
                org: res.data.selection.org,
                ent_list: res.data.lists.ent,
                ent: res.data.selection.ent,
            })
        })
    },
    handleOrgUpdate: function(e) {
        query = {'billto': '', 'ent': '', 'org': e.target.value}
        CustomerHelper.getTreeInfo(query, (res) => {
            this.setState({
                billto_list: res.data.lists.billto,
                billto: res.data.selection.billto,
                org_list: res.data.lists.org,
                org: res.data.selection.org,
                ent_list: res.data.lists.ent,
                ent: res.data.selection.ent,
            })
        })
    },
    handleEntUpdate: function(e) {
        query = {'billto': '', 'ent': e.target.value, 'org': ''}
        CustomerHelper.getTreeInfo(query, (res) => {
            this.setState({
                billto_list: res.data.lists.billto,
                billto: res.data.selection.billto,
                org_list: res.data.lists.org,
                org: res.data.selection.org,
                ent_list: res.data.lists.ent,
                ent: res.data.selection.ent,
            })
        })
    },
    handleEditOrgUpdate: function(e) {
        this.setState({
            edit_org: e.target.value
        })
    },
    handleSaveEdit: function(e) {
        if (this.state.edit_context == 'bill') {
            if (this.state.org == this.state.edit_org) {
                console.log('No Action Needed')
            } else {
                edit = {
                    org_id: this.state.edit_org,
                    billto: this.state.billto
                }
                this.handleValidSave(edit)
                tgt = {value: this.state.ent}
                e = {target: tgt}
                this.handleEntUpdate(e)
            }
        } else if (this.state.edit_context == 'org') {
            edit = {
                org_name: this.state.edit_org_name,
                org_id: this.state.org
            };
            this.handleValidSave(edit);
            tgt = {value: this.state.ent};
            e = {target: tgt};
            this.handleEntUpdate(e)
        } else if (this.state.edit_context == 'ent') {
            edit = {
                ent_name: this.state.edit_ent_name,
                ent_id: this.state.ent
            };
            this.handleValidSave(edit);
            tgt = {value: this.state.ent};
            e = {target: tgt};
            this.handleEntUpdate(e)
        }
        this.handleUpdateEditModal()
    },
    handleValidSave: function(edit) {
        query = {
            context: this.state.edit_context,
            edit: edit
        }
        CustomerHelper.sendSaveEdit(query, (res) => {
            if (res.error) {
                LoginHelper.logout()
                this.context.router.push(
                    {pathname: '/login/'}
                )
            } else {
                this.setState({
                    isLoading: false,
                })
            }
        })
    },
    handleGetCustomers: function(e) {
      CustomerHelper.getCustomersbyBillto(this.state.billto, (res) => {
          if (res.error) {
                LoginHelper.logout()
                this.context.router.push(
                    {pathname: '/login/'}
                )
            } else {
                this.setState({
                    customers: res.data.customers,
                })
            }
      })
    },
    handleOrgNameUpdate: function(e) {
        this.setState({
            edit_org_name: e.target.value
        })
    },
    handleEntNameUpdate: function(e) {
        this.setState({
            edit_ent_name: e.target.value
        })
    },
    componentDidMount: function() {
        this.setState({
            isLoading: false,
        })
    },
    render: function () {
        return (
            <CustomerMaintenance
                onUpdateEditModal={this.handleUpdateEditModal}
                onUpdateAddModal={this.handleUpdateAddModal}
                onUpdateSearchModal={this.handleUpdateSearchModal}
                onUpdateSearchText={this.handleUpdateSearchText}
                onSearchSelection={this.handleSearchSelection}
                onBillToUpdate={this.handleBillToUpdate}
                onEntUpdate={this.handleEntUpdate}
                onOrgUpdate={this.handleOrgUpdate}
                onTest={this.handleTest}
                onSearch={this.handleSearch}
                onGetCustomers={this.handleGetCustomers}
                onEditOrgUpdate={this.handleEditOrgUpdate}
                onSaveEdit={this.handleSaveEdit}
                edit_org={this.state.edit_org}
                edit_modal={this.state.edit_modal}
                add_modal={this.state.add_modal}
                search_modal={this.state.search_modal}
                search_text={this.state.search_text}
                search_context={this.state.search_context}
                billto={this.state.billto}
                ent={this.state.ent}
                org={this.state.org}
                org_list={this.state.org_list}
                billto_list={this.state.billto_list}
                ent_list={this.state.ent_list}
                searchreturn={this.state.searchreturn}
                customers={this.state.customers}
                edit_context={this.state.edit_context}
                edit_org_name={this.state.edit_org_name}
                onOrgNameUpdate={this.handleOrgNameUpdate}
                edit_ent_name={this.state.edit_ent_name}
                onEntNameUpdate={this.handleEntNameUpdate}
            />
    )
  }
});

module.exports = CustomerMaintenanceContainer;

var React = require("react");
var ReportsLayout = require('../js/reports/reports_layout');
var DispatchHelper = require('../utils/DispatchHelper');
var ReportsHelper = require('../utils/ReportsHelper');
var LoginHelper = require('../utils/LoginHelper');
var CustomerHelper = require('../utils/CustomerHelper');
var moment = require('moment');

var ReportsContainer = React.createClass({
  getInitialState: function(){
    return {
      tabkey: 1,
      isLoading: true,
      customer_id: '',
      customer_name: '',
      report: '1',
      reports: [],
      start_date: moment().subtract(1, 'months'),
      end_date: moment(),
      customer_modal: false,
      search_text: '',
      searchType: '',
      searchreturn: [],
      searchTypes: [],
      search_context: null,
      search_modal: false,
      report_type: null,
      report_types: [],
      data: [],
      series_key: "",
      value_keys: [],
      x_label: "",
      y_label: "",
      report_loading: false,
      ent_id: '',
      ent_name: '',
      org_id: '',
      org_name: '',
      filter_types: [],
      filter_type: '',
      terr_list: [],
      terr: '',
      region_list: [],
      region: '',
    }
  },
  handleKeySelect: function(e){
    this.setState({
      tabkey: e
    })
  },
  handleStartDateChange: function(date){
    this.setState({
      start_date: date
    });
  },
  handleRegionUpdate: function(e) {
    this.setState({
      region: e.target.value
    })
  },
  handleTerrUpdate: function(e) {
    this.setState({
      terr: e.target.value
    })
  },
  handleEndDateChange: function(date){
    this.setState({
      end_date: date
    });
  },
  handleCustomerUpdate: function(id, name){
    console.log('customer', {id: id, name: name})
    this.setState(
      customer_id: id,
      custoner_name: name
    )
  },
  handleCustomerSelect: function(id, name){
    console.log('customer2', {id: id, name: name})
    this.setState({
      customer_id: id,
      customer_name: name
    })
  },
  handleUpdateCustomerModal: function(e){
    if (this.state.customer_modal) {
      this.setState({
        customer_modal: false
      })
    } else {
      this.setState({
        customer_modal: true,
        searchreturn: []
      })
    }
  },
  handleCS: function(e){
    if (!this.state.search_context) {
      DispatchHelper.getSearchInfo(this.state.search_text, this.state.searchType, (res) => {
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
  handleSearchTextUpdate: function(e){
    this.setState({
      search_text: e.target.value
    })
  },
  handleSearchTypeUpdate: function(e){
    this.setState({
      searchType: e.target.value
    })
  },
  handleCustomerSelection: function(id, name){
    console.log('here', this.state.search_context)
    if (!this.state.search_context) {
      this.handleCustomerSelect(id, name)
      this.setState({
        customer_modal: false

      })
    } else if (this.state.search_context == 'ent') {
      this.handleUpdateSearchModal()
      this.setState({
        ent_id: id,
        ent_name: name,
      })
    } else if (this.state.search_context == 'org') {
      this.handleUpdateSearchModal()
      this.setState({
        org_id: id,
        org_name: name,
      })
    }
  },
  handleReportUpdate: function(e){
    this.setState({
      report: e.target.value
    })
  },
  handleFilterTypeUpdate: function(e){
    this.setState({
      filter_type: e.target.value,
      org_id: '',
      org_name: '',
      ent_id: '',
      ent_name: '',
      customer_id: '',
      customer_name: '',
      terr: '',
      region: '',
    })
  },
  handleReportTypeUpdate: function(e){
    this.setState({
      report_type: e.target.value
    })
  },
  handleGenerateReport: function(){
    var gen_report = {
      report_type: this.state.report,
      customer: this.state.customer_id,
      territory: this.state.terr,
      region: this.state.region,
      enterprise: this.state.ent_id,
      organization: this.state.org_id,
      s_date: this.state.start_date.format('YYYY, MM, DD'),
      e_date: this.state.end_date.format('YYYY, MM, DD'),
      interval: "monthly"
    };
    this.setState({
      report_type: null,
      data: [],
      series_key: "",
      value_keys: [],
      x_label: "",
      y_label: "",
      report_loading: true
    })
    ReportsHelper.getReport(gen_report, (res) => {
      if (res.error) {
        LoginHelper.logout()
        this.context.router.push(
          {pathname: '/login/'}
        )
      } else {
        this.setState({
          report_type: res.data.type,
          data: res.data.data,
          series_key: res.data.series_key,
          value_keys: res.data.value_keys,
          x_label: res.data.x_label,
          y_label: res.data.y_label,
          report_loading: false,
        })
      }
    });
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
  componentDidMount: function () {
    DispatchHelper.getReportInitLoad( (res) => {
      if (res.error) {
        LoginHelper.logout()
        this.context.router.push(
          {pathname: '/login/'}
        )
      } else {
        this.setState({
          isLoading: false,
          searchTypes: res.customer_search_fields,
          reports: res.report_list,
          report_types: [
            {id: 'bar', name: "Bar Chart"},
            {id: 'line', name: "Line Chart"},
            {id: 'area', name: "Area Chart"},
            {id: 'pie', name: "Pie Chart"},
            {id: 'donut', name: "Donut Chart"}
          ],
          filter_types: [
            {id: 'ent', name: "Enterprise"},
            {id: 'org', name: "Organization"},
            {id: 'cust', name: "Customer"},
            {id: 'reg', name: "Region"},
            {id: 'terr', name: "Territory"}
          ],
          terr_list: res.terr_list,
          region_list: res.region_list
        })
      }
    });
  },
  render: function () {
    return (
      <ReportsLayout
        tabkey={this.state.tabkey}
        onKeySelect={this.handleKeySelect}
        customer={this.state.customer_name}
        customers={this.state.customers}
        report={this.state.report}
        reports={this.state.reports}
        onReportUpdate={this.handleReportUpdate}
        onGenerateReport={this.handleGenerateReport}
        onCustomerUpdate={this.handleCustomerUpdate}
        onUpdateCustomerModal={this.handleUpdateCustomerModal}
        onCS={this.handleCS}
        customer_modal={this.state.customer_modal}
        search_text={this.state.search_text}
        onUpdateSearchText={this.handleSearchTextUpdate}
        searchType={this.state.searchType}
        searchTypes={this.state.searchTypes}
        onUpdateSearchType={this.handleSearchTypeUpdate}
        searchreturn={this.state.searchreturn}
        onUpdateCustomerSelection={this.handleCustomerSelection}
        startDate={this.state.start_date}
        onStartDateUpdate={this.handleStartDateChange}
        endDate={this.state.end_date}
        onEndDateUpdate={this.handleEndDateChange}
        testapi={this.testapi}
        report_type={this.state.report_type}
        report_types={this.state.report_types}
        onReportTypeUpdate={this.handleReportTypeUpdate}
        data={this.state.data}
        series_key={this.state.series_key}
        value_keys={this.state.value_keys}
        x_label={this.state.x_label}
        y_label={this.state.y_label}
        report_loading={this.state.report_loading}
        onUpdateSearchModal={this.handleUpdateSearchModal}
        search_context={this.state.search_context}
        search_modal={this.state.search_modal}
        filter_types={this.state.filter_types}
        filter_type={this.state.filter_type}
        onFilterTypeUpdate={this.handleFilterTypeUpdate}
        ent_name={this.state.ent_name}
        org_name={this.state.org_name}
        terr_list={this.state.terr_list}
        terr={this.state.terr}
        region_list={this.state.region_list}
        region={this.state.region}
        onTerrUpdate={this.handleTerrUpdate}
        onRegionUpdate={this.handleRegionUpdate}/>
    )
  }
});

module.exports = ReportsContainer;

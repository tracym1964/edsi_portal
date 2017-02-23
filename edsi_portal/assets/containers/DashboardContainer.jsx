var React = require("react");
var DashboardLayout = require('../js/dashboard/dashboard_layout');
var DispatchHelper = require('../utils/DispatchHelper');
var LoginHelper = require('../utils/LoginHelper');


var DashboardContainer = React.createClass({
  contextTypes: {
        router: React.PropTypes.object.isRequired
    },
  getInitialState: function(){
      return {
        open_dispatches: [],
        closed_dispatches: [],
        dispatches: [],
        dispatch_selected: {},
        open_dispatches_open: true,
        closed_dispatches_open: true,
        dispatch_modal: false,
        isLoading: true,
        monthly_data: [],
        weekly_data: []
      }
  },
  handleUpdateOpenDispatches: function(e){
    console.log('data', this.state.monthly_data)
    if (this.state.open_dispatches_open) {
      this.setState({
        open_dispatches_open: false
      })
    } else {
      this.setState({
        open_dispatches_open: true
      })
    }
  },
  handleUpdateClosedDispatches: function(e){
    if (this.state.closed_dispatches_open) {
      this.setState({
        closed_dispatches_open: false
      })
    } else {
      this.setState({
        closed_dispatches_open: true
      })
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
  handleDispatchSelection: function(e){
    this.setState({
      dispatch_modal: true,
      dispatch_selected: e
    })
  },
  componentDidMount: function() {
    DispatchHelper.getDashboardDispatches( (res) => {
      if (res.error) {
        LoginHelper.logout()
        this.context.router.push(
          {pathname: '/login/'}
        )
      } else {
        this.setState({
          isLoading: false,
          open_dispatches: res.open,
          closed_dispatches: res.closed,
        })
      }
    })
  },
  render: function () {
    return (
      <DashboardLayout
        dispatches={this.state.dispatches}
        open_dispatches={this.state.open_dispatches}
        closed_dispatches={this.state.closed_dispatches}
        dispatch_selected={this.state.dispatch_selected}
        dispatch_modal={this.state.dispatch_modal}
        open_dispatches_open={this.state.open_dispatches_open}
        closed_dispatches_open={this.state.closed_dispatches_open}
        onUpdateOpenDispatches={this.handleUpdateOpenDispatches}
        onUpdateClosedDispatches={this.handleUpdateClosedDispatches}
        onUpdateModal={this.handleUpdateModal}
        onDispatchSelection={this.handleDispatchSelection}
        monthly_data={this.state.monthly_data}
        weekly_data={this.state.weekly_data}/>
    )
  }
});

module.exports = DashboardContainer;

var React = require("react");
var RykoTraxLayout = require('../js/rykotrax/rykotrax_layout');
var d3 = require('d3')
var DispatchHelper = require('../utils/DispatchHelper');



var RykoTraxContainer = React.createClass({
  getInitialState: function(){
      return {
        username: '',
        customer: '',
        isLoading: true
      }
  },
  handleUpdateCustomer: function(e){
    this.setState({
      customer: e.target.value,
    });
  },
  handleTest: function(e) {
      DispatchHelper.testapi()
  },
  componentDidMount: function() {
    this.setState({
      isLoading: false,
    })
  },
  render: function () {
    return (
      <RykoTraxLayout
        onUpdateCustomer={this.handleUpdateCustomer}
        username={this.state.username}
        onTest={this.handleTest}/>
    )
  }
});

module.exports = RykoTraxContainer;

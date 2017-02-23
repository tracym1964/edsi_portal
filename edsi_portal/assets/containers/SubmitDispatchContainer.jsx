var React = require("react");
var CreatedDispatch = require('../js/create_dispatch/createddispatch');


var SubmitDispatchContainer = React.createClass({
  getInitialState: function(){
      return {
        isLoading: true,
        caller: '',
        customer: '',
        callback: '',
        altcall: '',
        nte: '',
        po: '',
        description: '',
        calltype: '',
        priority: '',
        tech: '',
        OoC: '',
        RC: '',
        Notify: '',
      }
  },
  handleViewContext: function(e){
    console.log();
  },
  componentDidMount: function () {
    var query = this.props.location.query;
    this.setState({
      isLoading: false,
      caller: query.caller,
      customer: query.customer,
      callback: query.phone,
      altcall: query.altphone,
      nte: query.nte,
      po: query.po,
      description: query.description,
      calltype: query.calltype,
      priority: query.priority,
      tech: query.tech,
      OoC: query.outofchem,
      RC: query.returncall,
      Notify: query.notifytech,
    });
  },
  render: function () {
    return (
      <CreatedDispatch/>
    )
  }
});

module.exports = SubmitDispatchContainer;

var React = require('react');
var PropTypes = React.PropTypes;
var ReactDOM = require('react-dom');
var DAreaChart = require('../charts/areachart')


var AreaChart = React.createClass({
  componentDidMount: function() {
      var dom =  ReactDOM.findDOMNode(this);
      var chartProps = {
        data: this.props.data,
        series_key: this.props.series_key,
        value_keys: this.props.value_keys,
        x_label: this.props.x_label,
        y_label: this.props.y_label,
      }
      DAreaChart(dom, chartProps);
  },

  render: function() {
   return (
     <div>

     </div>
   )
 }
});


module.exports = AreaChart;

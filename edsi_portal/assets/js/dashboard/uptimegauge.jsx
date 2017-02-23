var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../../styles');
var d3 = require('d3');
var GaugeChart = require('../charts/gaugechart');
var ReactDOM = require('react-dom');
var DispatchHelper = require('../../utils/DispatchHelper');

var Button = require('react-bootstrap').Button;
var LineChart = require('../charts/linechart')


var UptimeChart = React.createClass({
  propTypes: {
  },
  componentDidMount: function() {
    DispatchHelper.getDashboardGauge( (res) => {
      var dom =  ReactDOM.findDOMNode(this);
      var chartProps = {
        data: res.data,
        series_key: res.series_key,
        value_keys: res.value_keys,
      }
      GaugeChart(dom, chartProps);
    })
  },
  render: function() {
   return (
     <div>
       <img src="static/images/pie.svg" />
     </div>
   )
 }
});


module.exports = UptimeChart;

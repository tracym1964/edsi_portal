var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../../styles');
var d3 = require('d3');
var PieChart = require('../charts/piechart');
var StackedBarChart = require('../charts/stacked_bar_chart');
var ReactDOM = require('react-dom');
var DispatchHelper = require('../../utils/DispatchHelper');

var Button = require('react-bootstrap').Button;



var DispatchHistoryChart = React.createClass({
  propTypes: {
  },
  componentDidMount: function() {
    DispatchHelper.getDispatchHistory( (res) => {
      var dom =  ReactDOM.findDOMNode(this);
      var chartProps = {
        data: res.data,
        series_key: res.series_key,
        value_keys: res.value_keys,
        x_label: res.x_label,
        y_label: res.y_label,
      }
      StackedBarChart(dom, chartProps);
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


module.exports = DispatchHistoryChart;

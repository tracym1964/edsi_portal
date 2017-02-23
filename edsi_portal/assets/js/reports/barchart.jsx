var React = require('react');
var PropTypes = React.PropTypes;
var StackedBarChart = require('../charts/stacked_bar_chart');
var ReactDOM = require('react-dom');


var BarChart = React.createClass({
  componentDidMount: function() {
      var dom =  ReactDOM.findDOMNode(this);
      var chartProps = {
        data: this.props.data,
        series_key: this.props.series_key,
        value_keys: this.props.value_keys,
        x_label: this.props.x_label,
        y_label: this.props.y_label,
      }
      StackedBarChart(dom, chartProps);
  },

  render: function() {
   return (
     <div>

     </div>
   )
 }
});


module.exports = BarChart;

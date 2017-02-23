var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../../styles');
var d3 = require('d3');
var c3 = require('c3');


function DonutChart(dom, props){
  var chart = c3.generate({
    bindto: dom,
    padding: {
      top: 5,
      bottom: 5,
    },
    data: {
      type: 'donut',
      json: props.data,
      keys: {
        value: props.value_keys,
      }
    },
    color: {
      pattern: ['#FAA43A', '#4D4D4D', '#60BD68', '#F15854', '#B276B2', '#F17CB0', '#DECF3F']
    },
    legend: {
      position: 'right'
    },
  });

};

module.exports = DonutChart;

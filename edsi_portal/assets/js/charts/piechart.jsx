var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../../styles');
var d3 = require('d3');
var c3 = require('c3');


function PieChart(dom, props){
  var chart = c3.generate({
    bindto: dom,
    padding: {
      top: 5,
      bottom: 5,
    },
    data: {
      type: 'pie',
      json: props.data,
      keys: {
        value: props.value_keys,
      }
    },
    color: {
      pattern: ['#4D4D4D', '#FAA43A', '#60BD68', '#F15854', '#B276B2', '#F17CB0', '#DECF3F']
    },
    legend: {
      position: 'right'
    },
  });

};

module.exports = PieChart;

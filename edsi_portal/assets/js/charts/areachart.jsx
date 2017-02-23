var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../../styles');
var d3 = require('d3');
var c3 = require('c3');


function LineChart(dom, props){
  var chart = c3.generate({
    bindto: dom,
    padding: {
      top: 5,
      bottom: 5,
    },
    data: {
      type: 'area',
      json: props.data,
      keys: {
        x: props.series_key, // it's possible to specify 'x' when category axis
        value: props.value_keys,
      },
    },
    color: {
      pattern: ['#FAA43A', '#4D4D4D', '#60BD68', '#F15854', '#B276B2', '#F17CB0', '#DECF3F']
    },
    axis: {
      x: {
        type: 'category',
        label: {
          text: props.x_label,
          position: 'outer-center'
        }
      },
      y: {
        label: {
          text: props.y_label,
          position: 'outer-middle'
        },
      }
    },
    legend: {
      position: 'right'
    },
  });
}

module.exports = LineChart;

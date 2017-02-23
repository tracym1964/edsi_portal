var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../../styles');
var c3 = require('c3');


function GaugeChart(dom, props){
  var chart = c3.generate({
    bindto: dom,
    padding: {
      top: 5,
      bottom: 15,
    },
    data: {
      type: 'gauge',
      json: props.data,
      keys: {
        // x: 'month', // it's possible to specify 'x' when category axis
        value: props.value_keys,
      }
    },
    gauge: {
      label: {
        show: false
      }
    },
    color: {
        pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'], // the three color levels for the percentage values.
        threshold: {
//            unit: 'value', // percentage is default
//            max: 200, // 100 is default
            values: [30, 60, 90, 100]
        }
    },
    size: {
        height: 230
    }
  });

};

module.exports = GaugeChart;

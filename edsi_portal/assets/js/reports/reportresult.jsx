var React = require('react');
var PropTypes = React.PropTypes;
var BarChart = require('./barchart');
var LineChart = require('./linechart');
var AreaChart = require('./areachart');
var PieChart = require('./piechart');
var DonutChart = require('./donutchart');
var DataTable = require('./datatable');

var Tabs = require('react-bootstrap').Tabs;
var Tab = require('react-bootstrap').Tab;
var Table = require('react-bootstrap').Table;
var FormControl = require('react-bootstrap').FormControl;


function ReportResult (props){
    if (props.report_type) {
        chart =
            <Table>
                <tbody>
                    <tr>
                        <th>
                            <FormControl
                                componentClass="select"
                                value={props.report_type}
                                onChange={props.onReportTypeUpdate}>
                                {props.report_types.map((report, i) => (
                                    <option key={i} value={report.id}>{report.name}</option>
                                ))}
                            </FormControl>
                        </th>
                    </tr>
                </tbody>
            </Table>



  } else {
    chart = null
  }
   if (props.report_type == "bar") {
     ninjas = <BarChart
                data={props.data}
                series_key={props.series_key}
                value_keys={props.value_keys}
                x_label={props.x_label}
                y_label={props.y_label} />
    } else if (props.report_type =="line") {
      ninjas = <LineChart
                 data={props.data}
                 series_key={props.series_key}
                 value_keys={props.value_keys}
                 x_label={props.x_label}
                 y_label={props.y_label} />
    } else if (props.report_type =="area") {
      ninjas = <AreaChart
                 data={props.data}
                 series_key={props.series_key}
                 value_keys={props.value_keys}
                 x_label={props.x_label}
                 y_label={props.y_label} />
    } else if (props.report_type =="pie") {
      ninjas = <PieChart
                 data={props.data}
                 series_key={props.series_key}
                 value_keys={props.value_keys}
                 x_label={props.x_label}
                 y_label={props.y_label} />
    } else if (props.report_type =="donut") {
      ninjas = <DonutChart
                 data={props.data}
                 series_key={props.series_key}
                 value_keys={props.value_keys}
                 x_label={props.x_label}
                 y_label={props.y_label} />
    } else if (props.report_loading) {
      ninjas = <img src="static/images/pie.svg" />
    } else {
      ninjas = null
    }

    if (props.report_type || props.report_loading) {
        reports =
         <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
             <Tab eventKey={1} title="Chart">
                 <div className="col-sm-3 col-sm-offset-9">
                     {chart}
                 </div>
                 <div className="col-sm-12">
                    {ninjas}
                 </div>
             </Tab>
             <Tab eventKey={2} title="Data">
                 <DataTable
                    value_keys={props.value_keys}
                    data={props.data}/>
             </Tab>
         </Tabs>
    } else {
        reports = null
    }

   return (
     <div>
         {reports}
     </div>
   )
};

ReportResult.propTypes = {
},

module.exports = ReportResult;

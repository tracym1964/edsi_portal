var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../../styles');
var ReportGenerator = require('./reportgenerator');
var ReportResult = require('./reportresult');

var PageHeader = require('react-bootstrap').PageHeader;


function ReportsLayout (props){
   return props.isLoading === true
   ? <p> LOADING! </p>
   : <div className="col-sm-10 col-sm-offset-1">
       <PageHeader>
          Creating Report
       </PageHeader>
       <ReportGenerator
         customer={props.customer}
         onCustomerUpdate={props.customerUpdate}
         onUpdateCustomerModal={props.onUpdateCustomerModal}
         onCS={props.onCS}
         customer_modal={props.customer_modal}
         search_text={props.search_text}
         onUpdateSearchText={props.onUpdateSearchText}
         searchType={props.searchType}
         searchTypes={props.searchTypes}
         onUpdateSearchType={props.onUpdateSearchType}
         searchreturn={props.searchreturn}
         onUpdateCustomerSelection={props.onUpdateCustomerSelection}
         report={props.report}
         reports={props.reports}
         onReportUpdate={props.onReportUpdate}
         onGenerateReport={props.onGenerateReport}
         startDate={props.startDate}
         onStartDateUpdate={props.onStartDateUpdate}
         endDate={props.endDate}
         onEndDateUpdate={props.onEndDateUpdate}
         report_type={props.report_type}
         report_types={props.report_types}
         onReportTypeUpdate={props.onReportTypeUpdate}
         search_context={props.search_context}
         onUpdateSearchModal={props.onUpdateSearchModal}
         search_modal={props.search_modal}
         ent_name={props.ent_name}
         org_name={props.org_name}
         filter_types={props.filter_types}
         filter_type={props.filter_type}
         onFilterTypeUpdate={props.onFilterTypeUpdate}
         terr_list={props.terr_list}
         terr={props.terr}
         region_list={props.region_list}
         region={props.region}
         onTerrUpdate={props.onTerrUpdate}
         onRegionUpdate={props.onRegionUpdate}/>
       <ReportResult
         testapi={props.testapi}
         report_type={props.report_type}
         onReportTypeUpdate={props.onReportTypeUpdate}
         report_types={props.report_types}
         data={props.data}
         series_key={props.series_key}
         value_keys={props.value_keys}
         x_label={props.x_label}
         y_label={props.y_label}
         report_loading={props.report_loading}/>
     </div>

};

ReportsLayout.propTypes = {
},

module.exports = ReportsLayout;

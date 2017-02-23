var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../../styles');
var DispatchPanel = require('../dispatch_list_helper/opendispatch');
var DispatchHistoryChart = require('./dispatchhistory');
var UptimeChart = require('./uptimegauge');

var Jumbotron = require('react-bootstrap').Jumbotron;
var Image = require('react-bootstrap').Image;
var Panel = require('react-bootstrap').Panel;
var Media = require('react-bootstrap').Media;


function DashboardLayout (props){
   return props.isLoading === true
     ? <p> LOADING! </p>
     : <div>
         <div className="col-sm-10 col-sm-offset-1 text-center">
           <Media>
             <Media.Body>
               <Media.Heading>
                 Welcome to the Service Portal
               </Media.Heading>
               Web Portal that is currently under development that will help users quickly get access to infomation, handle service requests, and track status.
             </Media.Body>
             <Media.Right>
               <img width={250} height={125} src="static/images/ctlogo.png" />
             </Media.Right>
           </Media>
         </div>
         <div className="col-sm-10 col-sm-offset-1">
           <div className="col-sm-4" style={styles.space}>
             <DispatchPanel
               onUpdateModal={props.onUpdateModal}
               dispatch_modal={props.dispatch_modal}
               dispatch_selected={props.dispatch_selected}
               dispatches_open={props.open_dispatches_open}
               onUpdateDispatches={props.onUpdateOpenDispatches}
               onDispatchSelection={props.onDispatchSelection}
               dispatches={props.open_dispatches}
               title="Open Dispatches"
               />
           </div>
           <div className="col-sm-7 col-sm-offset-1 text-center">
             <h3>Equipment Uptime</h3>
             <UptimeChart />
             <h3>Dispatch History</h3>
             <DispatchHistoryChart />

           </div>
         </div>
       </div>
};

DashboardLayout.propTypes = {
},

module.exports = DashboardLayout;

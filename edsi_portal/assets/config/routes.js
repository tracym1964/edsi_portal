var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Main = require('../js/main');
var Home = require('../js/home');
var DispatchContainer = require('../containers/DispatchContainer');
var SearchDispContainer = require('../containers/SearchDispContainer');
var ReportsContainer = require('../containers/ReportsContainer');
var SubmitDispatchContainer = require('../containers/SubmitDispatchContainer');
var RykoTraxContainer = require('../containers/RykoTraxContainer');
var DashboardContainer = require('../containers/DashboardContainer');
var CustomerMaintenanceContainer = require('../containers/CustomerMaintenanceContainer');
var DispatchSchedulingContainer = require('../containers/DispatchSchedulingContainer');
var TechAssignmentContainer = require('../containers/TechAssignmentContainer');
var ProfileContainer = require('../containers/ProfileContainer');
var Login = require('../containers/LoginContainer');
var auth = require('../utils/LoginHelper');

function requireAuth(nextState, replace) {
    if (!auth.loggedIn()) {
        replace({
            pathname:'/login/',
            state: {nextPathname: '/'}
        })
    }
}

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={DashboardContainer} onEnter={requireAuth}/>
      <Route path="/login" component={Login} />
      <Route path="profile" component={ProfileContainer} onEnter={requireAuth}/>
      <Route path="dispatch/create" component={DispatchContainer} onEnter={requireAuth}/>
      <Route path="dispatch/search" component={SearchDispContainer} onEnter={requireAuth}/>
      <Route path="dispatch/submitted" component={SubmitDispatchContainer} onEnter={requireAuth}/>
      <Route path="reports/reports" component={ReportsContainer} onEnter={requireAuth}/>
      <Route path="reports/rykotrax" component={RykoTraxContainer} onEnter={requireAuth}/>
      <Route path="maintenance/customer" component={CustomerMaintenanceContainer} onEnter={requireAuth}/>
      <Route path="maintenance/dispatch/schedule" component={DispatchSchedulingContainer} onEnter={requireAuth}/>
      <Route path="maintenance/tech/assignment" component={TechAssignmentContainer} onEnter={requireAuth}/>
    </Route>
  </Router>
);

module.exports = routes;

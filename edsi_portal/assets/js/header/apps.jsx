var React = require('react');
var ReactRouter = require('react-router');

var PropTypes = React.PropTypes;
var Link = ReactRouter.Link;
var Navbar = require('react-bootstrap').Navbar;
var Nav = require('react-bootstrap').Nav;
var NavItem = require('react-bootstrap').NavItem;
var NavDropdown = require('react-bootstrap').NavDropdown;
var MenuItem = require('react-bootstrap').MenuItem;
var LinkContainer = require('react-router-bootstrap').LinkContainer;


function Apps (props){
    var isLoggedIn = localStorage.user;
    if (isLoggedIn) {

        props.onLoginUpdate();

        if (props.loggedin) {
            if (props.create_dispatch || props.search_dispatch) {
                if (props.create_dispatch) {
                    cd = <LinkContainer to="/dispatch/create">
                            <MenuItem eventKey={3.1}> Create Dispatch</MenuItem>
                        </LinkContainer>
                } else {
                    cd = null;
                }
                if (props.search_dispatch) {
                    sd = <LinkContainer to="/dispatch/search">
                            <MenuItem eventKey={3.2}>Search Dispatches</MenuItem>
                         </LinkContainer>
                } else {
                    sd = null;
                }
                disp = <NavDropdown eventKey={3} title="Dispatch" id="basic-nav-dropdown">
                            {cd}
                            {sd}
                        </NavDropdown>
            } else {
                disp = null;
            }

            if (props.custom_reports || props.rykotrax) {
                if (props.custom_reports) {
                    cr = <LinkContainer to="/reports/reports">
                             <MenuItem eventKey={4.1}>Custom Reports</MenuItem>
                         </LinkContainer>
                } else {
                    cr = null;
                }
                if (props.rykotrax) {
                    rt = <LinkContainer to="/reports/rykotrax">
                        <MenuItem eventKey={4.2}>RykoTrax</MenuItem>
                    </LinkContainer>
                } else {
                    rt = null;
                }
                rpts = <NavDropdown eventKey={4} title="Reports" id="basic-nav-dropdown">
                            {cr}
                            {rt}
                       </NavDropdown>
            } else {
                rpts = null;
            }

            if (props.customer_tree || props.pipm_schedule || props.tech_assign) {
                if (props.customer_tree) {
                    ct = <LinkContainer to="/maintenance/customer">
                            <MenuItem eventKey={5.1}>Customer Tree</MenuItem>
                         </LinkContainer>
                } else {
                    ct = null;
                }
                if (props.pipm_schedule) {
                    ps = <LinkContainer to="/maintenance/dispatch/schedule">
                            <MenuItem eventKey={5.2}>Auto PI/PM Schedule</MenuItem>
                         </LinkContainer>
                } else {
                    ps = null;
                }
                if (props.tech_assign) {
                    ta = <LinkContainer to="/maintenance/tech/assignment">
                            <MenuItem eventKey={5.2}>Tech Assignment</MenuItem>
                         </LinkContainer>
                } else {
                    ta = null;
                }
                main = <NavDropdown eventKey={5} title="Maintenance" id="basic-nav-dropdown">
                            {ct}
                            {ps}
                            {ta}
                       </NavDropdown>
            } else {
                main = null;
            }

            nav = <Nav>
                    {disp}
                    {rpts}
                    {main}
                  </Nav>
        } else {
            nav = null;
        }

    } else {
        props.onLogOffUpdate();
        nav = null;
    }
    return (
        <div>
            {nav}
        </div>
    )
};

Apps.propTypes = {
},

module.exports = Apps;
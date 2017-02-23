var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Navbar = require('react-bootstrap').Navbar;
var Nav = require('react-bootstrap').Nav;
var NavItem = require('react-bootstrap').NavItem;
var NavDropdown = require('react-bootstrap').NavDropdown;
var MenuItem = require('react-bootstrap').MenuItem;
var LinkContainer = require('react-router-bootstrap').LinkContainer;
var Image = require('react-bootstrap').Image;
var Apps = require('./apps');
var Profile = require('./profile');

var auth = require('../../utils/LoginHelper');

function HeaderLayout (props){
    return (
        <Navbar inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to={"/"}>
                        NCS Portal
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Apps
                    dispatch={props.dispatch}
                    create_dispatch={props.create_dispatch}
                    search_dispatch={props.search_dispatch}
                    reports={props.reports}
                    custom_reports={props.custom_reports}
                    rykotrax={props.rykotrax}
                    maintenance={props.maintenance}
                    customer_tree={props.customer_tree}
                    pipm_schedule={props.pipm_schedule}
                    tech_assign={props.tech_assign}
                    onLoginUpdate={props.onLoginUpdate}
                    onLogOffUpdate={props.onLogOffUpdate}
                    loggedin={props.loggedin}/>
                <Nav pullRight>
                    <Profile
                        onLogOut={props.onLogOut}/>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

HeaderLayout.propTypes = {
},

module.exports = HeaderLayout;

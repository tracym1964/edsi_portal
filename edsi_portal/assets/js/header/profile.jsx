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


function Profile (props){
    var isLoggedIn = localStorage.user;
    if (isLoggedIn) {
        profile = <Nav>
                    <NavDropdown eventKey={3} title={localStorage.user} id="basic-nav-dropdown">
                        <LinkContainer to="/profile">
                            <MenuItem eventKey={3.1}>Profile</MenuItem>
                        </LinkContainer>
                        <MenuItem eventKey={3.2} onClick={props.onLogOut}>LogOff</MenuItem>
                    </NavDropdown>
                  </Nav>
        user = <NavItem eventKey={1}>{localStorage.user}</NavItem>;
        log_off = <NavItem eventKey={2} onClick={props.onLogOut}>Log Off</NavItem>;
    } else {
        user = null;
        log_off = null;
        profile = null;
    }
    return (
        <div>
            {profile}
        </div>
    )
};

Profile.propTypes = {
},

module.exports = Profile;
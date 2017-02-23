var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Header = require('../containers/HeaderContainer');

var Main = React.createClass({
  getInitialState(){
        return {
            auth: true
        }
    },
    updateNavbar(){
        var isLoggedIn = localStorage.user
        if (isLoggedIn) {
          console.log('main', isLoggedIn)
          this.setState({
            auth: true
          })
        } else {
          console.log('main_auth', this.state.auth)
          this.setState({
            auth: false
          })
        }
    },
    render: function(){
      return (
          <div>
            <Header auth={this.state.auth}/>
              <div className="container">
                    {React.cloneElement(this.props.children, {update: this.updateNavbar})}
              </div>
          </div>
    )
  }
});

module.exports = Main;

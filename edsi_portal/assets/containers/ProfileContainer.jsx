var React = require("react");
var ProfilePage = require('../js/profile/profilepage');




var RykoTraxContainer = React.createClass({
  getInitialState: function(){
      return {
        isLoading: true
      }
  },
  componentDidMount: function() {
    this.setState({
      isLoading: false,
    })
  },
  render: function () {
    return (
      <ProfilePage />
    )
  }
});

module.exports = RykoTraxContainer;

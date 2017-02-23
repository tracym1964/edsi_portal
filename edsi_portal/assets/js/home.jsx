var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link
var styles = require('../styles');

var Jumbotron = require('react-bootstrap').Jumbotron;
var Image = require('react-bootstrap').Image;
var Panel = require('react-bootstrap').Panel;
var Media = require('react-bootstrap').Media;

function Home () {
  return (
    <div>
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
        <div className="col-sm-6">
          <Panel>
            <p>List of last 5 Dispatches Here and status</p>
          </Panel>
        </div>
        <div className="col-sm-6">
          <Panel>
            <p>Sample Report Image here</p>
          </Panel>
        </div>


      </div>

    </div>
  )
}

module.exports = Home;

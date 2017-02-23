var React = require('react')
var auth = require('../utils/LoginHelper')
var styles = require('../styles')

var Form = require('react-bootstrap').Form;
var Table = require('react-bootstrap').Table;
var Button = require('react-bootstrap').Button;
var Alert = require('react-bootstrap').Alert;

module.exports = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function () {
        return {
            error: false,
        }
    },

    handleSubmit: function(e) {
        e.preventDefault()

        var username = this.refs.username.value
        var pass = this.refs.pass.value

        auth.login(username, pass, (loggedIn) => {
            if (loggedIn) {
                this.props.update();
                this.context.router.replace('/')
            } else {
                this.setState({
                    error: true
                })
            }
        })
    },

    render: function() {
        if (this.state.error) {
            error =
                <Alert bsStyle="danger">
                    Invalid Username or Password
                </Alert>
        } else {
            error = null;
        }
        return (
          <div className="centeredPanel">
            <Form onSubmit={this.handleSubmit}>
              <Table>
                <tbody>
                  <tr>
                    <th>
                      Username
                    </th>
                    <th>
                      <input type="text" placeholder="username" ref="username" />
                    </th>
                  </tr>
                  <tr>
                    <th>
                      Password
                    </th>
                    <th>
                      <input type="password" placeholder="password" ref="pass" />
                    </th>
                  </tr>
                  <tr>
                    <th colSpan="2">
                        {error}
                    </th>
                  </tr>
                  <tr>
                    <th>
                    </th>
                    <th>
                      <Button
                        type="submit"
                        bsStyle="success"
                        block>
                        Login
                      </Button>
                    </th>
                  </tr>
                </tbody>
              </Table>
            </Form>
          </div>
        )
    }
})

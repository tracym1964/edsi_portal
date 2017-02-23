var React = require('react');
var ReactRouter = require('react-router');

var HeaderLayout = require('../js/header/header');

var auth = require('../utils/LoginHelper');

var Header = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function () {
        return {
            loggedin: false,
            create_dispatch: false,
            search_dispatch: false,
            custom_reports: false,
            rykotrax: false,
            customer_tree: false,
            pipm_schedule: false,
            tech_assign: false,
        }
    },
    logoutHandler: function () {
        auth.logout()
        this.context.router.push(
            {pathname: '/login/'}
        )
    },
    handleLoginUpdate: function () {
        if (this.state.loggedin == false) {
            this.handleSetApps()
            this.setState({
                loggedin: true,
            })
        }
    },
    handleLogOffUpdate: function () {
        if (this.state.loggedin == true) {
            console.log('Hello')
            this.setState({
                loggedin: false,
                create_dispatch: false,
                search_dispatch: false,
                custom_reports: false,
                rykotrax: false,
                customer_tree: false,
                pipm_schedule: false,
                tech_assign: false,

            })
        }
    },
    handleSetApps: function () {
        auth.getUserApps( (res) => {
            if (res.error) {
                auth.logout()
                this.context.router.push(
                    {pathname: '/login/'}
                )
            } else {
                var list = res.data.apps
                this.setState({
                    create_dispatch: list.includes('create_dispatch'),
                    search_dispatch: list.includes('search_dispatch'),
                    custom_reports: list.includes('custom_reports'),
                    rykotrax: list.includes('rykotrax'),
                    customer_tree: list.includes('customer_tree'),
                    pipm_schedule: list.includes('pipm_schedule'),
                    tech_assign: list.includes('tech_assign'),
                })
            }
        });
    },
    componentDidMount: function () {
    },
    render: function () {
        return (
            <HeaderLayout
                create_dispatch={this.state.create_dispatch}
                search_dispatch={this.state.search_dispatch}
                custom_reports={this.state.custom_reports}
                rykotrax={this.state.rykotrax}
                customer_tree={this.state.customer_tree}
                pipm_schedule={this.state.pipm_schedule}
                tech_assign={this.state.tech_assign}
                onLoginUpdate={this.handleLoginUpdate}
                onLogOffUpdate={this.handleLogOffUpdate}
                loggedin={this.state.loggedin}
                onLogOut={this.logoutHandler}/>
        )
    }
});

module.exports = Header;

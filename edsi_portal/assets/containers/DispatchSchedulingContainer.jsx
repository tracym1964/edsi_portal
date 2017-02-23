var React = require("react");
var DispatchSchedule = require('../js/dispatch_schedule/dispatch_schedule');
var CustomerHelper = require('../utils/CustomerHelper');
var LoginHelper = require('../utils/LoginHelper');


var DispatchSchedulingContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function(){
        return {
            isLoading: true,
            territory: '150',
            territory_list: [],
            interval_type: 'bwk',
            interval_type_list: []
        }
    },
    handleTerritoryUpdate: function(e) {
        this.setState({
            territory: e.target.value
        })
    },
    handleIntervalTypeUpdate: function(e) {
        this.setState({
            interval_type: e.target.value
        })
    },
    generateDispatches: function (e) {
        if (this.state.territory == 'All') {
            terr = ''
        } else {
            terr = this.state.territory
        }
        CustomerHelper.genDispatches(terr, this.state.interval_type, (res) => {
            if (res.error) {
                LoginHelper.logout()
                this.context.router.push(
                    {pathname: '/login/'}
                )
            }
        })
    },
    componentDidMount: function() {
        this.setState({
            isLoading: false,
            territory_list: [
                150, 160, 165, 170, 175, 180, 185, 190, 361, 365,
                366, 372, 374, 381, 650, 651, 653, 655, 656, 660, 'All'
            ],
            interval_type_list: [
                {type: "bwk", description: 'Biweekly'},
                {type: "mon", description: 'Monthly'},
                {type: "bmon", description: "BiMonthly"},
                {type: "qtr", description: "Quarterly"}
            ]
        })
    },
    render: function () {
        return (
            <DispatchSchedule
                onTerritoryUpdate={this.handleTerritoryUpdate}
                onIntervalTypeUpdate={this.handleIntervalTypeUpdate}
                generateDispatches={this.generateDispatches}
                territory={this.state.territory}
                territory_list={this.state.territory_list}
                interval_type={this.state.interval_type}
                interval_type_list={this.state.interval_type_list}
            />
        )
    }
});

module.exports = DispatchSchedulingContainer;
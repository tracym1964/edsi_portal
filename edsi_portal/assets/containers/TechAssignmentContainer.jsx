var React = require("react");
var TechAssignment = require('../js/tech_assignment/tech_assignment');
var CustomerHelper = require('../utils/CustomerHelper');
var TechHelper = require('../utils/TechHelper');
var LoginHelper = require('../utils/LoginHelper');

var moment = require('moment');


var TechAssignmentContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function(){
        return {
            isLoading: true,
            territory: '150',
            territory_list: [],
            tech: '-1',
            tech_list: [],
            open_panel: false,
            time_modal: false,
            time_list: [],
            edit_id: '',
            edit_start: moment(),
            edit_end: moment(),
            edit_description: '',
            newStartDate: moment(),
            newEndDate: moment(),
            newDescription: '',
            group_list: [],
            group_modal: false,
            edit_name: '',
            edit_prim: '',
            edit_alt: '',
            replace_tech: '',
            replace_modal: false,
            reports: [],
            report: '-1',
            rep_results: null,
            terr_tech: {},
        }
    },
    handleTerritoryUpdate: function(e) {
        terr = e.target.value
        TechHelper.getTechsTerritory(terr, (res) => {
            if (res.error) {
                LoginHelper.logout()
                this.context.router.push(
                    {pathname: '/login/'}
                )
            } else {
                this.setState({
                    territory: terr,
                    tech_list: res.data.tech_list
                })
            }
        })
        this.setState({
            territory: e.target.value
        })
    },
    handleReportUpdate: function(e) {
        this.setState({
            report: e.target.value
        })
    },
    handleRunTechReport: function(e) {
        var report = {report_id: this.state.report}
        this.setState({
            rep_results: null
        });
        TechHelper.runTechReport(report, (res) => {
            if (res.error) {
                LoginHelper.logout()
                this.context.router.push(
                    {pathname: '/login/'}
                )
            } else {
                this.setState({
                    rep_results: res.data.rep_results,
                })
            }
        })
    },
    handleTechUpdate: function(e) {
        techsel = e.target.value
        TechHelper.getTechInfo(techsel, (res) => {
            if (res.error) {
                LoginHelper.logout()
                this.context.router.push(
                    {pathname: '/login/'}
                )
            } else {
                this.setState({
                    tech: techsel,
                    time_list: res.data.times,
                    group_list: res.data.groups
                })
            }
        })
    },
    handleAddTimePanel: function(e) {
        if (this.state.open_panel == false) {
            this.setState({
                open_panel: true,
            })
        } else {
            this.setState({
                open_panel: false,
                newStartDate: moment(),
                newEndDate: moment(),
                newDescription: '',
                tech: '-1'
            })
        }
    },
    handleUpdateTimeModal: function(e) {
        if (this.state.time_modal == false) {
            this.setState({
                time_modal: true,
                edit_id: e.id,
                edit_start: moment(e.start_date),
                edit_end: moment(e.end_date),
                edit_description: e.description
            })
        } else {
            this.setState({
                time_modal: false,
                edit_id: '',
                edit_start: moment(),
                edit_end: moment(),
                edit_description: ''
            })
        }
    },
    handleUpdateReplaceModal: function(e) {
        if (this.state.replace_modal == false) {
            this.setState({
                replace_modal: true,
                replace_tech: this.state.tech,
            })
        } else {
            this.setState({
                replace_modal: false,
                replace_tech: '',
            })
        }
    },
    handleUpdateGroupModal: function(e) {
        console.log('techs', this.state.tech_list)

        if (this.state.group_modal == false) {
            var prim =  this.state.tech_list.find(x => x.name === e.default).id;
            var alt = this.state.tech_list.find(x => x.name === e.alt).id;
            this.setState({
                group_modal: true,
                edit_name: e.name,
                edit_prim: prim,
                edit_alt: alt,
                edit_group_id: e.id,
            })
        } else {
            this.setState({
                group_modal: false,
                edit_name: '',
                edit_prim: '',
                edit_alt: '',
                edit_group_id: '',
            })
        }
    },
    handleEditDescriptionUpdate: function(e) {
        this.setState({
            edit_description: e.target.value
        })
    },
    handleEditEndUpdate: function(date) {
        this.setState({
            edit_end: date
        })
    },
    handleEditStartUpdate: function(date) {
        this.setState({
            edit_start: date
        })
    },
    handleEditNameUpdate: function(e) {
        this.setState({
            edit_name: e.target.value
        })
    },
    handleEditAltUpdate: function(e) {
        this.setState({
            edit_alt: e.target.value
        })
    },
    handleEditDefaultUpdate: function(e) {
        this.setState({
            edit_prim: e.target.value
        })
    },
    handleNewDescriptionUpdate: function(e) {
        this.setState({
            newDescription: e.target.value
        })
    },
    handleNewEndDateUpdate: function(date) {
        this.setState({
            newEndDate: date
        })
    },
    handleNewStartDateUpdate: function(date) {
        this.setState({
            newStartDate: date
        })
    },
    handleTechReplaceUpdate: function(e) {
        this.setState({
            replace_tech: e.target.value
        })
    },
    handleEditTimeSave: function(e) {
        if (this.state.edit_id) {
            var record = {
                id: this.state.edit_id,
                start: this.state.edit_start,
                end: this.state.edit_end,
                description: this.state.edit_description
            }
        } else {
            var record = {
                start: this.state.newStartDate,
                end: this.state.newEndDate,
                description: this.state.description
            }
        }

        CustomerHelper.editTimeSave(record, (res) => {
            if (res.error) {
                LoginHelper.logout()
                this.context.router.push(
                    {pathname: '/login/'}
                )
            } else {
                if (this.state.edit_id) {
                    this.handleUpdateTimeModal()
                } else {
                    this.handleAddTimePanel()
                }
            }
        })
    },
    handleEditGroupSave: function(e) {
        var record = {
            group_name: this.state.edit_name,
            default_tech: this.state.edit_prim,
            alt_tech: this.state.edit_alt,
            group_id: this.state.edit_group_id,
        }
        TechHelper.editGroupSave(record, (res) => {
            if (res.error) {
                LoginHelper.logout()
                this.context.router.push(
                    {pathname: '/login/'}
                )
            } else {
                this.handleUpdateGroupModal()
                this.setState({
                    tech: '-1'
                })
            }
        })
    },
    handleReplaceAllSave: function(e) {
        var record = {
            new_tech: this.state.replace_tech,
        }
        TechHelper.replaceAllSave(record, (res) => {
            if (res.error) {
                LoginHelper.logout()
                this.context.router.push(
                    {pathname: '/login/'}
                )
            } else {
                this.handleUpdateReplaceModal()
                this.setState({
                    tech: '-1'
                })
            }
        })
    },
    componentDidMount: function() {
        TechHelper.getTechAssignmentInitalLoad( (res) => {
            if (res.error) {
                LoginHelper.logout()
                this.context.router.push(
                    {pathname: '/login/'}
                )
            } else {
                this.setState({
                    isLoading: false,
                    territory_list: res.data.territory_list,
                    reports: res.data.tech_reports
                })
                select = {target: {value: res.data.territory_list[0]}}
                this.handleTerritoryUpdate(select)
            }
        });
    },
    render: function () {
        return (
            <TechAssignment
                onTerritoryUpdate={this.handleTerritoryUpdate}
                onTechUpdate={this.handleTechUpdate}
                onAddTimePanel={this.handleAddTimePanel}
                onUpdateTimeModal={this.handleUpdateTimeModal}
                territory={this.state.territory}
                territory_list={this.state.territory_list}
                tech={this.state.tech}
                tech_list={this.state.tech_list}
                open_panel={this.state.open_panel}
                time_modal={this.state.time_modal}
                time_list={this.state.time_list}
                edit_start={this.state.edit_start}
                edit_end={this.state.edit_end}
                edit_description={this.state.edit_description}
                newStartDate={this.state.newStartDate}
                newEndDate={this.state.newEndDate}
                newDescription={this.state.newDescription}
                group_list={this.state.group_list}
                group_modal={this.state.group_modal}
                edit_name={this.state.edit_name}
                edit_prim={this.state.edit_prim}
                edit_alt={this.state.edit_alt}
                onUpdateGroupModal={this.handleUpdateGroupModal}
                onEditDefaultUpdate={this.handleEditDefaultUpdate}
                onEditAltUpdate={this.handleEditAltUpdate}
                onEditNameUpdate={this.handleEditNameUpdate}
                onEditDescriptionUpdate={this.handleEditDescriptionUpdate}
                onEditEndUpdate={this.handleEditEndUpdate}
                onEditStartUpdate={this.handleEditStartUpdate}
                onEditTimeSave={this.handleEditTimeSave}
                onNewStartDateUpdate={this.handleNewStartDateUpdate}
                onNewEndDateUpdate={this.handleNewEndDateUpdate}
                onNewDescriptionUpdate={this.handleNewDescriptionUpdate}
                onEditGroupSave={this.handleEditGroupSave}
                replace_tech={this.state.replace_tech}
                onTechReplaceUpdate={this.handleTechReplaceUpdate}
                replace_modal={this.state.replace_modal}
                onUpdateReplaceModal={this.handleUpdateReplaceModal}
                onReplaceAllSave={this.handleReplaceAllSave}
                onReportUpdate={this.handleReportUpdate}
                report={this.state.report}
                reports={this.state.reports}
                rep_results={this.state.rep_results}
                onRunTechReport={this.handleRunTechReport}
            />
        )
    }
});

module.exports = TechAssignmentContainer;
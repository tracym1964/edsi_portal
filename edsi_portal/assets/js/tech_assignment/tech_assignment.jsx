var React = require('react');
var PropTypes = React.PropTypes;
var ManageTech = require('./manage_tech');
var ManageGroup = require('./manage_groups');
var TimeTable = require('./timetable');
var GroupsTable = require('./grouptable');
var TechReports = require('./techreports');
var ReportResults = require('./reportresults');
var Help = require('./help');

var Button = require('react-bootstrap').Button;
var PageHeader = require('react-bootstrap').PageHeader;
var Tabs = require('react-bootstrap').Tabs;
var Tab = require('react-bootstrap').Tab;
var FormControl = require('react-bootstrap').FormControl;
var Table = require('react-bootstrap').Table;


function TechAssignment (props){
    if (props.tech == '-1') {
        table = null
    } else {
        table = <TimeTable
                    onUpdateTimeModal={props.onUpdateTimeModal}
                    time_modal={props.time_modal}
                    time_list={props.time_list}
                    edit_start={props.edit_start}
                    edit_end={props.edit_end}
                    edit_description={props.edit_description}
                    onEditDescriptionUpdate={props.onEditDescriptionUpdate}
                    onEditEndUpdate={props.onEditEndUpdate}
                    onEditStartUpdate={props.onEditStartUpdate}
                    onEditTimeSave={props.onEditTimeSave}/>
    }
    return (
     <div className="col-sm-10 col-sm-offset-1">
         <PageHeader>
             Technician Maintenance
         </PageHeader>
         <div className="col-sm-4 col-sm-offset-4">

             <Table>
                 <tbody>
                    <tr>
                        <th>
                            Territory
                        </th>
                        <th>
                            <FormControl
                                componentClass="select"
                                value={props.territory}
                                onChange={props.onTerritoryUpdate}>
                                {props.territory_list.map((ter, i) => (
                                    <option key={i} value={ter}>{ter}</option>
                                ))}
                            </FormControl>
                        </th>
                    </tr>
                 </tbody>
             </Table>
         </div>
         <div className="col-sm-12">
             <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                 <Tab eventKey={1} title="Manage Technicians">
                     <PageHeader>Manage Technicians</PageHeader>
                     <div className="col-sm-5">
                         <ManageTech
                            territory={props.territory}
                            tech={props.tech}
                            open_panel={props.open_panel}
                            tech_list={props.tech_list}
                            onTechUpdate={props.onTechUpdate}
                            onAddTimePanel={props.onAddTimePanel}
                            newStartDate={props.newStartDate}
                            onNewStartDateUpdate={props.onNewStartDateUpdate}
                            newEndDate={props.newEndDate}
                            onNewEndDateUpdate={props.onNewEndDateUpdate}
                            newDescription={props.newDescription}
                            onNewDescriptionUpdate={props.onNewDescriptionUpdate}
                            onEditTimeSave={props.onEditTimeSave}
                            />
                     </div>
                     <div className="col-sm-6 col-sm-offset-1">
                         {table}
                     </div>
                 </Tab>
                 <Tab eventKey={2} title="Manage Groups">
                     <PageHeader>Manage Groups</PageHeader>
                     <div className="col-sm-5">
                         <ManageGroup
                             tech={props.tech}
                             tech_list={props.tech_list}
                             onTechUpdate={props.onTechUpdate}
                             replace_tech={props.replace_tech}
                             onTechReplaceUpdate={props.onTechReplaceUpdate}
                             replace_modal={props.replace_modal}
                             onUpdateReplaceModal={props.onUpdateReplaceModal}
                             onReplaceAllSave={props.onReplaceAllSave}
                         />
                     </div>
                     <div className="col-sm-6 col-sm-offset-1">
                         <GroupsTable
                            tech={props.tech}
                            group_list={props.group_list}
                            group_modal={props.group_modal}
                            edit_name={props.edit_name}
                            edit_prim={props.edit_prim}
                            edit_alt={props.edit_alt}
                            onEditDefaultUpdate={props.onEditDefaultUpdate}
                            onEditAltUpdate={props.onEditAltUpdate}
                            onEditNameUpdate={props.onEditNameUpdate}
                            onUpdateGroupModal={props.onUpdateGroupModal}
                            onEditGroupSave={props.onEditGroupSave}
                            tech_list={props.tech_list} />
                     </div>

                 </Tab>
                 <Tab eventKey={3} title="Reports">
                     <PageHeader>
                         Group / Customer Reports
                     </PageHeader>
                     <div className="col-sm-5">
                         <TechReports
                            onReportUpdate={props.onReportUpdate}
                            report={props.report}
                            reports={props.reports}
                            onRunTechReport={props.onRunTechReport}
                         />
                     </div>
                     <div className="col-sm-6 col-sm-offset-1">
                         <ReportResults
                            rep_results={props.rep_results}/>
                     </div>

                 </Tab>
                 <Tab eventKey={4} title="Help">
                     <PageHeader>
                         Definitions and Help
                     </PageHeader>
                     <Help />
                 </Tab>
             </Tabs>
         </div>

     </div>
   )
};

TechAssignment.propTypes = {
},

module.exports = TechAssignment;
var React = require('react');
var PropTypes = React.PropTypes;

var Accordion = require('react-bootstrap').Accordion;
var Panel = require('react-bootstrap').Panel;



function Help (props){
    return (
        <div>
            <Accordion>
                <Panel header="Manage Technician" eventKey="1">
                    <p>Manage Technicians tab is a tab that allows you to schedule a technician within your
                        territory to not receive or be assigned dispatches.</p>
                    <p><strong>How it Works: </strong>When a day has been schedule in the background there is a
                        lot that will happen for you without any interaction needed.  At around midnight (for now)
                        of the day schedule to be unable to respond to dispatches all open dispatches and new
                        incoming dispatches where they are the primary on will be reassigned to the alternate.
                        One the same time of day on return date, the dispatches will be automatically switched back
                        over.  The primary reason for this is because RSS runs off the assigned techs to build the
                        dashboards.  This transfer will exclude PI/PM dispatches. </p>
                    <p><strong>Adding Time: </strong>When clicking that Add Time button a panel will show up that
                        will allow the use to add a time for the selected Technician.  The reason section is not
                        required, it is just there to for reference when looking at the summary.</p>
                </Panel>
                <Panel header="Manage Group" eventKey="2">
                    <p>Manage Groups tab allows you to see groups as they pertain to a specific technician.
                        It will return both the groups that they are a primary (or default) tech of or if they
                        are a back-up (or alternate) for a group.  Below are some specifics to what a group is,
                        what the name is, and the relationship of primary and alternate.</p>
                    <p><strong>Groups: </strong>Groups are defined as set of customers that have the same technician
                        assigned to them.  This group is defined by the territory manager however they deem
                        necessary.  This grouping can be by location, customer types, machines, anything.  This
                        data is used to help define when a dispatch is created for a specific customer, who the it
                        should be assigned to.  The name of a group can be set to anything.  The goal of the name is
                        to help the territory manager easily identify the make-up of the customers in that group.</p>
                    <p><strong>Primary/Alternate: </strong>Primary technician is the technician that the dispatch
                        will default for assignment.  This value helps other reports and software be notified that
                        dispatches were created, including the technician.  The Alternate is the back-up for that
                        default tech.  If the default tech is not available as determined by the Manage Technician
                        section, the system will know what to do with all dispatches that are not completed when
                        they are away.</p>
                    <p><strong>Replace All: </strong>This button will be rarely used but is very strong.  If for
                        some reason a technician leaves the company or there is a desire to switch things up, it
                        will allow you to switch the assigned dispatches and group assignments to someone within
                        that assigned territory with a click of a button.  The process takes a minute or two to
                        complete, even though it returns you back so you can keep working.</p>
                </Panel>
                <Panel header="Reports" eventKey="3">
                    <p>Currently there are 3 Reports: No Default Tech, No Alt Tech, Customer per Group.  Each
                        of them have their own use cases, but all reports return a list of customers that
                        meet certain criteria.</p>
                    <p><strong>No Default Tech: </strong> This report looks at all the customers in a given
                        territory that are active and checks to see if they have a default tech association.
                        The goal of this report would be to have nothing returned as that helps ensure the
                        correct Technician is assigned on creation of the dispatch.  Also some customers
                        require a certain technician association and this association helps with that as
                        well.</p>
                    <p><strong>No Alt Tech: </strong> This report looks at all your groupings of technicians
                        and lets you know if you are missing a back up for any specific group the returns all
                        the customers that affected by not having an alternate tech assigned.  This allows
                        you to schedule a technician on the Manage Technician page to be be gone on specific
                        days and the system will move the dispatches that for you (see Manage Technicians for
                        more specifics).  This report the goal is for it to have no return which means all of
                        your techs have back-ups for each group assigned.</p>
                    <p><strong>Customer per Group: </strong>This reports looks at all customers assigned to as
                        specific group.  This can help you see sizes of areas or if there is a customer assigned
                        to the wrong group.</p>
                </Panel>
            </Accordion>
        </div>
    )
}



module.exports = Help;
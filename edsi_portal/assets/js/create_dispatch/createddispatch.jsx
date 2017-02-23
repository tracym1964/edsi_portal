var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../../styles');

var Panel = require('react-bootstrap').Panel;


function CreatedDispatch (props){
   return props.isLoading === true
     ? <p> LOADING! </p>
     : <div className="col-sm-6 col-sm-offset-3 text-center" >
          <Panel
            header="Dispatch Successfully Submitted"
            bsStyle="success">
            Created Dispatch Say Whaaaaa
          </Panel>
       </div>
};

CreatedDispatch.propTypes = {
},

module.exports = CreatedDispatch;

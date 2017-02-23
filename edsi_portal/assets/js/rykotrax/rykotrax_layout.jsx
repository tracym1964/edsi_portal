var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../../styles');

var Button = require('react-bootstrap').Button;


function RykoTraxLayout (props){
   return (
     <div className="col-sm-10 col-sm-offset-1">
       <h3>Coming Soon - Reporting</h3>
       <Button
           bsStyle="danger"
           onClick={props.onTest}>
           Send Email
       </Button>
     </div>
   )
};

RykoTraxLayout.propTypes = {
},

module.exports = RykoTraxLayout;

var React = require('react');

var Col = require('react-bootstrap').Col;
var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;
var Button = require('react-bootstrap').Button;
var Panel = require('react-bootstrap').Panel;

function DispatchCust (props){
   if (props.address1) {
     address1 = (props.address1)
     address2 = (props.address2)
     address3 = (props.city_state)
   } else {
     address1 = (props.address2)
     address2 = (props.city_state)
     address3 = ''
   }
   return (
     <Grid>
       <Row>
         <Col sm={4}>
           <Button
             onClick={props.onUpdateCustomerInfo}
             bsSize="large"
             block
             bsStyle={null}
             className="btn-darkblue">
              Customer Infomation
           </Button>
           <Panel collapsible expanded={props.custinfo_open}>
             <Row>
               <Row>
                 <Col sm={1}>
                 </Col>
                 <Col sm={4}>
                   Credit Status:
                 </Col>
                 <Col>
                   {props.credit_status}
                 </Col>
               </Row>
             </Row>
             <Row>
               <Row>
                 <Col sm={1}>
                 </Col>
                 <Col sm={4}>
                   Contact:
                 </Col>
                 <Col>
                   {props.contact_name}
                 </Col>
               </Row>
             </Row>
             <Row>
               <Row>
                 <Col sm={1}>
                 </Col>
                 <Col sm={4}>
                   Address:
                 </Col>
                 <Col>
                   {address1}
                 </Col>
               </Row>
               <Row>
                 <Col sm={1}>
                 </Col>
                 <Col sm={4}>
                 </Col>
                 <Col>
                   {address2}
                 </Col>
               </Row>
               <Row>
                 <Col sm={1}>
                 </Col>
                 <Col sm={4}>
                 </Col>
                 <Col>
                   {address3}
                 </Col>
               </Row>
             </Row>
           </Panel>
         </Col>
       </Row>
     </Grid>
   )
};


module.exports = DispatchCust;